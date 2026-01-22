/**
 * 4over API Integration Service
 * 
 * 4over uses a UUID-based system for products and options.
 * Each product has: product_uuid, runsize_uuid, turnaroundtime_uuid, colorspec_uuid
 * 
 * SETUP REQUIRED:
 * 1. Create 4over reseller account at https://4over.com
 * 2. Contact 4over support to get API credentials and product UUIDs
 * 3. Add credentials to .env file
 */

const axios = require('axios');

class FourOverService {
    constructor() {
        this.baseURL = process.env.FOUROVER_BASE_URL || 'https://api.4over.com';
        this.apiKey = process.env.FOUROVER_API_KEY;
        this.apiSecret = process.env.FOUROVER_API_SECRET;
        this.resellerId = process.env.FOUROVER_RESELLER_ID;
        this.accountId = process.env.FOUROVER_ACCOUNT_ID;
        this.markupPercentage = parseFloat(process.env.FOUROVER_MARKUP_PERCENT) || 30;
        
        // Create axios instance for 4over API
        this.client = axios.create({
            baseURL: this.baseURL,
            timeout: 30000,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        });

        // Add auth to requests
        this.client.interceptors.request.use((config) => {
            if (this.apiKey && this.apiSecret) {
                // 4over typically uses Basic Auth or API Key header
                const authString = Buffer.from(`${this.apiKey}:${this.apiSecret}`).toString('base64');
                config.headers['Authorization'] = `Basic ${authString}`;
            }
            return config;
        });
    }

    /**
     * Check if 4over API is configured
     */
    isConfigured() {
        return !!(this.apiKey && this.apiSecret && this.accountId);
    }

    /**
     * Get all available product categories from 4over
     */
    async getCategories() {
        if (!this.isConfigured()) {
            return this._getMockCategories();
        }
        
        try {
            const response = await this.client.get('/v1/products/categories');
            return this._transformCategories(response.data);
        } catch (error) {
            console.error('4over API Error (getCategories):', error.message);
            return this._getMockCategories();
        }
    }

    /**
     * Get products by category
     */
    async getProductsByCategory(categoryId) {
        if (!this.isConfigured()) {
            return this._getMockProducts(categoryId);
        }
        
        try {
            const response = await this.client.get(`/v1/products`, {
                params: { category: categoryId }
            });
            return this._transformProducts(response.data);
        } catch (error) {
            console.error('4over API Error (getProductsByCategory):', error.message);
            return this._getMockProducts(categoryId);
        }
    }

    /**
     * Get product details with all available options
     * Returns UUIDs for runsize, turnaround, colorspec, etc.
     */
    async getProductDetails(productUuid) {
        if (!this.isConfigured()) {
            return this._getMockProductDetails(productUuid);
        }
        
        try {
            const response = await this.client.get(`/v1/products/${productUuid}`);
            return this._transformProductDetails(response.data);
        } catch (error) {
            console.error('4over API Error (getProductDetails):', error.message);
            return this._getMockProductDetails(productUuid);
        }
    }

    /**
     * Get product options (sizes, paper types, coatings, etc.)
     * These are returned as UUIDs that must be used when ordering
     */
    async getProductOptions(productUuid) {
        if (!this.isConfigured()) {
            return this._getMockProductOptions(productUuid);
        }
        
        try {
            const response = await this.client.get(`/v1/products/${productUuid}/options`);
            return this._transformProductOptions(response.data);
        } catch (error) {
            console.error('4over API Error (getProductOptions):', error.message);
            return this._getMockProductOptions(productUuid);
        }
    }

    /**
     * Calculate price for a product configuration
     * @param {Object} config - Product configuration with UUIDs
     */
    async calculatePrice(config) {
        const { 
            productUuid, 
            runsizeUuid, 
            turnaroundUuid, 
            colorspecUuid,
            quantity,
            optionUuids = []
        } = config;
        
        if (!this.isConfigured()) {
            return this._getMockPricing(config);
        }
        
        try {
            const response = await this.client.post('/v1/pricing/calculate', {
                product_uuid: productUuid,
                runsize_uuid: runsizeUuid,
                turnaroundtime_uuid: turnaroundUuid,
                colorspec_uuid: colorspecUuid,
                quantity: quantity,
                option_uuids: optionUuids
            });
            
            const basePrice = response.data.price || response.data.total;
            const yourPrice = this._applyMarkup(basePrice);
            
            return {
                basePrice,
                yourPrice,
                markup: this.markupPercentage,
                turnaround: response.data.turnaround_description,
                shippingEstimate: response.data.shipping_estimate || 0
            };
        } catch (error) {
            console.error('4over API Error (calculatePrice):', error.message);
            return this._getMockPricing(config);
        }
    }

    /**
     * Get shipping rates
     */
    async getShippingRates(config) {
        const { productUuid, quantity, zipCode, runsizeUuid } = config;
        
        if (!this.isConfigured()) {
            return this._getMockShippingRates();
        }
        
        try {
            const response = await this.client.post('/v1/shipping/rates', {
                product_uuid: productUuid,
                runsize_uuid: runsizeUuid,
                quantity: quantity,
                destination_zip: zipCode,
                country: 'US'
            });
            return this._transformShippingRates(response.data);
        } catch (error) {
            console.error('4over API Error (getShippingRates):', error.message);
            return this._getMockShippingRates();
        }
    }

    /**
     * Submit order to 4over
     * Requires all UUIDs for product configuration
     */
    async submitOrder(orderData) {
        if (!this.isConfigured()) {
            return this._getMockOrderSubmission(orderData);
        }
        
        try {
            const payload = this._formatOrderForFourOver(orderData);
            const response = await this.client.post('/v1/orders', payload);
            
            return {
                success: true,
                fourOverOrderId: response.data.order_id || response.data.id,
                status: response.data.status || 'received',
                estimatedShipDate: response.data.estimated_ship_date
            };
        } catch (error) {
            console.error('4over API Error (submitOrder):', error.message);
            if (error.response) {
                console.error('Response:', error.response.data);
            }
            throw new Error('Failed to submit order to 4over: ' + error.message);
        }
    }

    /**
     * Get order status from 4over
     */
    async getOrderStatus(fourOverOrderId) {
        if (!this.isConfigured()) {
            return this._getMockOrderStatus(fourOverOrderId);
        }
        
        try {
            const response = await this.client.get(`/v1/orders/${fourOverOrderId}`);
            return {
                orderId: fourOverOrderId,
                status: response.data.status,
                trackingNumber: response.data.tracking_number,
                carrier: response.data.carrier,
                estimatedDelivery: response.data.estimated_delivery,
                shipDate: response.data.ship_date
            };
        } catch (error) {
            console.error('4over API Error (getOrderStatus):', error.message);
            return this._getMockOrderStatus(fourOverOrderId);
        }
    }

    /**
     * Upload print file to 4over
     * Returns a URL that can be used in order submission
     */
    async uploadPrintFile(fileBuffer, fileName, mimeType) {
        if (!this.isConfigured()) {
            return { 
                success: true, 
                fileUrl: `https://mock-storage.4over.com/files/${Date.now()}-${fileName}` 
            };
        }
        
        try {
            // 4over typically accepts file URLs rather than direct uploads
            // You would upload to your own storage (S3, etc.) and provide the URL
            // Or use their file upload endpoint if available
            
            const FormData = require('form-data');
            const formData = new FormData();
            formData.append('file', fileBuffer, {
                filename: fileName,
                contentType: mimeType
            });
            
            const response = await this.client.post('/v1/files/upload', formData, {
                headers: formData.getHeaders()
            });
            
            return {
                success: true,
                fileUrl: response.data.url || response.data.file_url,
                fileId: response.data.id
            };
        } catch (error) {
            console.error('4over API Error (uploadPrintFile):', error.message);
            throw new Error('Failed to upload file: ' + error.message);
        }
    }

    /**
     * Get available facilities/locations
     */
    async getFacilities() {
        if (!this.isConfigured()) {
            return this._getMockFacilities();
        }

        try {
            const response = await this.client.get('/v1/facilities');
            return response.data;
        } catch (error) {
            console.error('4over API Error (getFacilities):', error.message);
            return this._getMockFacilities();
        }
    }

    // ============ HELPER METHODS ============

    _applyMarkup(basePrice) {
        return Math.round(basePrice * (1 + this.markupPercentage / 100) * 100) / 100;
    }

    _formatOrderForFourOver(orderData) {
        return {
            account_id: this.accountId,
            reference_id: orderData.orderNumber,
            dropship: 1, // Ship directly to customer
            skip_confirmation: 1,
            shipping: {
                name: orderData.shippingAddress.name,
                company: orderData.shippingAddress.company || '',
                address1: orderData.shippingAddress.street,
                address2: orderData.shippingAddress.street2 || '',
                city: orderData.shippingAddress.city,
                state: orderData.shippingAddress.state,
                zip: orderData.shippingAddress.zipCode,
                country: orderData.shippingAddress.country || 'US',
                phone: orderData.shippingAddress.phone || ''
            },
            mail_class: orderData.shippingMethod || 'GROUND',
            items: orderData.items.map(item => ({
                product_uuid: item.fourOverProductUuid,
                runsize_uuid: item.runsizeUuid,
                turnaroundtime_uuid: item.turnaroundUuid,
                colorspec_uuid: item.colorspecUuid,
                option_uuids: item.optionUuids || [],
                quantity: item.quantity,
                sets: item.sets || 1,
                print_url: item.printFileUrl,
                print_url_1: item.printFileFrontUrl,
                print_url_2: item.printFileBackUrl
            }))
        };
    }

    _transformCategories(data) {
        if (!data || !Array.isArray(data)) return [];
        return data.map(cat => ({
            id: cat.id || cat.uuid,
            name: cat.name,
            slug: cat.slug || cat.name.toLowerCase().replace(/\s+/g, '-'),
            icon: this._getCategoryIcon(cat.name)
        }));
    }

    _transformProducts(data) {
        if (!data || !Array.isArray(data)) return [];
        return data.map(prod => ({
            id: prod.uuid || prod.id,
            uuid: prod.uuid,
            name: prod.name,
            description: prod.description,
            startingPrice: prod.starting_price || prod.base_price || 19.99,
            image: prod.image_url || prod.thumbnail
        }));
    }

    _transformProductDetails(data) {
        return {
            id: data.uuid || data.id,
            uuid: data.uuid,
            name: data.name,
            description: data.description,
            category: data.category,
            startingPrice: data.starting_price || data.base_price,
            images: data.images || [data.image_url]
        };
    }

    _transformProductOptions(data) {
        return {
            runsizes: (data.runsizes || data.run_sizes || []).map(r => ({
                uuid: r.uuid,
                name: r.name || r.description,
                dimensions: r.dimensions
            })),
            turnarounds: (data.turnarounds || data.turnaround_times || []).map(t => ({
                uuid: t.uuid,
                name: t.name || t.description,
                days: t.days,
                priceMultiplier: t.price_multiplier || 1
            })),
            colorspecs: (data.colorspecs || data.color_specs || []).map(c => ({
                uuid: c.uuid,
                name: c.name || c.description,
                sides: c.sides
            })),
            options: (data.options || []).map(o => ({
                uuid: o.uuid,
                name: o.name,
                type: o.type,
                priceAdd: o.price_add || 0
            }))
        };
    }

    _transformShippingRates(data) {
        if (!data || !Array.isArray(data)) return this._getMockShippingRates();
        return data.map(rate => ({
            id: rate.id || rate.mail_class,
            name: rate.name || rate.description,
            price: rate.price || rate.cost,
            days: rate.days || rate.delivery_days
        }));
    }

    _getCategoryIcon(name) {
        const icons = {
            'business cards': '💼',
            'postcards': '📬',
            'flyers': '📄',
            'brochures': '📑',
            'banners': '🎯',
            'signs': '🪧',
            'booklets': '📚',
            'catalogs': '📖',
            'stickers': '🏷️',
            'labels': '🏷️',
            'promotional': '🎁',
            'envelopes': '✉️',
            'letterhead': '📝',
            'folders': '📁',
            'posters': '🖼️'
        };
        const key = Object.keys(icons).find(k => name.toLowerCase().includes(k));
        return icons[key] || '📦';
    }

    // ============ MOCK DATA (for development without API) ============

    _getMockCategories() {
        return [
            { id: 'bc-cat', name: 'Business Cards', slug: 'business-cards', icon: '💼' },
            { id: 'pc-cat', name: 'Postcards & Flyers', slug: 'postcards-flyers', icon: '📬' },
            { id: 'br-cat', name: 'Brochures', slug: 'brochures', icon: '📑' },
            { id: 'bn-cat', name: 'Banners & Signs', slug: 'banners-signs', icon: '🎯' },
            { id: 'bk-cat', name: 'Booklets & Catalogs', slug: 'booklets', icon: '📚' },
            { id: 'st-cat', name: 'Stickers & Labels', slug: 'stickers', icon: '🏷️' },
            { id: 'pr-cat', name: 'Promotional Products', slug: 'promotional', icon: '🎁' },
            { id: 'lf-cat', name: 'Large Format', slug: 'large-format', icon: '🖼️' }
        ];
    }

    _getMockProducts(categoryId) {
        const products = {
            'bc-cat': [
                { id: 'bc-std-001', uuid: 'bc-std-001', name: 'Standard Business Cards', startingPrice: 19.99, image: null },
                { id: 'bc-prm-001', uuid: 'bc-prm-001', name: 'Premium Business Cards', startingPrice: 34.99, image: null },
                { id: 'bc-lux-001', uuid: 'bc-lux-001', name: 'Luxury Thick Business Cards', startingPrice: 59.99, image: null },
                { id: 'bc-die-001', uuid: 'bc-die-001', name: 'Die-Cut Business Cards', startingPrice: 49.99, image: null }
            ],
            'pc-cat': [
                { id: 'pc-4x6-001', uuid: 'pc-4x6-001', name: '4x6 Postcards', startingPrice: 24.99, image: null },
                { id: 'pc-5x7-001', uuid: 'pc-5x7-001', name: '5x7 Postcards', startingPrice: 29.99, image: null },
                { id: 'pc-6x9-001', uuid: 'pc-6x9-001', name: '6x9 Postcards', startingPrice: 39.99, image: null },
                { id: 'fl-8x11-001', uuid: 'fl-8x11-001', name: '8.5x11 Flyers', startingPrice: 35.99, image: null }
            ],
            'br-cat': [
                { id: 'br-tri-001', uuid: 'br-tri-001', name: 'Tri-Fold Brochures', startingPrice: 89.99, image: null },
                { id: 'br-bi-001', uuid: 'br-bi-001', name: 'Bi-Fold Brochures', startingPrice: 79.99, image: null },
                { id: 'br-z-001', uuid: 'br-z-001', name: 'Z-Fold Brochures', startingPrice: 94.99, image: null }
            ],
            'bn-cat': [
                { id: 'bn-vy-001', uuid: 'bn-vy-001', name: 'Vinyl Banners', startingPrice: 29.99, image: null },
                { id: 'bn-rt-001', uuid: 'bn-rt-001', name: 'Retractable Banners', startingPrice: 89.99, image: null },
                { id: 'sg-yd-001', uuid: 'sg-yd-001', name: 'Yard Signs', startingPrice: 14.99, image: null }
            ],
            'bk-cat': [
                { id: 'bk-sd-001', uuid: 'bk-sd-001', name: 'Saddle-Stitch Booklets', startingPrice: 149.99, image: null },
                { id: 'bk-pb-001', uuid: 'bk-pb-001', name: 'Perfect Bound Booklets', startingPrice: 199.99, image: null },
                { id: 'ct-001', uuid: 'ct-001', name: 'Product Catalogs', startingPrice: 249.99, image: null }
            ],
            'st-cat': [
                { id: 'st-die-001', uuid: 'st-die-001', name: 'Die-Cut Stickers', startingPrice: 29.99, image: null },
                { id: 'st-rol-001', uuid: 'st-rol-001', name: 'Roll Labels', startingPrice: 49.99, image: null },
                { id: 'st-sht-001', uuid: 'st-sht-001', name: 'Sheet Labels', startingPrice: 24.99, image: null }
            ],
            'pr-cat': [
                { id: 'pr-pen-001', uuid: 'pr-pen-001', name: 'Custom Pens', startingPrice: 0.99, image: null },
                { id: 'pr-mug-001', uuid: 'pr-mug-001', name: 'Custom Mugs', startingPrice: 8.99, image: null },
                { id: 'pr-bag-001', uuid: 'pr-bag-001', name: 'Tote Bags', startingPrice: 4.99, image: null }
            ],
            'lf-cat': [
                { id: 'lf-pst-001', uuid: 'lf-pst-001', name: 'Posters', startingPrice: 12.99, image: null },
                { id: 'lf-cnv-001', uuid: 'lf-cnv-001', name: 'Canvas Prints', startingPrice: 39.99, image: null },
                { id: 'lf-fom-001', uuid: 'lf-fom-001', name: 'Foam Board Signs', startingPrice: 24.99, image: null }
            ]
        };
        return products[categoryId] || products['bc-cat'];
    }

    _getMockProductDetails(productUuid) {
        return {
            id: productUuid,
            uuid: productUuid,
            name: 'Standard Business Cards',
            description: 'Professional business cards printed on premium cardstock with vibrant full-color printing.',
            category: 'business-cards',
            startingPrice: 19.99,
            images: ['/images/products/business-cards.jpg']
        };
    }

    _getMockProductOptions(productUuid) {
        return {
            runsizes: [
                { uuid: 'rs-3.5x2', name: 'Standard (3.5" x 2")', dimensions: '3.5x2' },
                { uuid: 'rs-3.5x2.5', name: 'European (3.5" x 2.5")', dimensions: '3.5x2.5' },
                { uuid: 'rs-2x3.5', name: 'Vertical (2" x 3.5")', dimensions: '2x3.5' },
                { uuid: 'rs-2x2', name: 'Square (2" x 2")', dimensions: '2x2' }
            ],
            turnarounds: [
                { uuid: 'ta-standard', name: '5-7 Business Days', days: 7, priceMultiplier: 1 },
                { uuid: 'ta-rush', name: '3-4 Business Days', days: 4, priceMultiplier: 1.3 },
                { uuid: 'ta-express', name: '1-2 Business Days', days: 2, priceMultiplier: 1.8 },
                { uuid: 'ta-sameday', name: 'Same Day', days: 0, priceMultiplier: 2.5 }
            ],
            colorspecs: [
                { uuid: 'cs-4/0', name: 'Full Color Front Only (4/0)', sides: 1 },
                { uuid: 'cs-4/4', name: 'Full Color Both Sides (4/4)', sides: 2 },
                { uuid: 'cs-4/1', name: 'Full Color Front, B&W Back (4/1)', sides: 2 }
            ],
            paperTypes: [
                { uuid: 'pt-14pt', name: '14pt Cardstock', description: 'Standard thickness', priceAdd: 0 },
                { uuid: 'pt-16pt', name: '16pt Cardstock', description: 'Premium thickness', priceAdd: 5 },
                { uuid: 'pt-32pt', name: '32pt Ultra Thick', description: 'Luxury thickness', priceAdd: 15 },
                { uuid: 'pt-100lb', name: '100lb Gloss Cover', description: 'Glossy finish', priceAdd: 3 }
            ],
            coatings: [
                { uuid: 'ct-none', name: 'No Coating', priceAdd: 0 },
                { uuid: 'ct-matte', name: 'Matte Finish', priceAdd: 0 },
                { uuid: 'ct-gloss', name: 'Gloss UV', priceAdd: 3 },
                { uuid: 'ct-soft', name: 'Soft Touch Laminate', priceAdd: 10 },
                { uuid: 'ct-spot', name: 'Spot UV', priceAdd: 20 }
            ],
            quantities: [
                { qty: 100, pricePerUnit: 0.20 },
                { qty: 250, pricePerUnit: 0.15 },
                { qty: 500, pricePerUnit: 0.10 },
                { qty: 1000, pricePerUnit: 0.07 },
                { qty: 2500, pricePerUnit: 0.05 },
                { qty: 5000, pricePerUnit: 0.04 }
            ]
        };
    }

    _getMockPricing(config) {
        const { quantity = 100, turnaroundUuid = 'ta-standard' } = config;
        
        // Base price calculation
        let basePrice = quantity * 0.10;
        
        // Turnaround multiplier
        const turnaroundMultipliers = { 
            'ta-standard': 1, 
            'ta-rush': 1.3, 
            'ta-express': 1.8,
            'ta-sameday': 2.5
        };
        basePrice *= turnaroundMultipliers[turnaroundUuid] || 1;
        
        // Minimum order
        basePrice = Math.max(basePrice, 19.99);
        
        const yourPrice = this._applyMarkup(basePrice);
        
        const turnaroundNames = {
            'ta-standard': '5-7 Business Days',
            'ta-rush': '3-4 Business Days',
            'ta-express': '1-2 Business Days',
            'ta-sameday': 'Same Day'
        };
        
        return {
            basePrice: Math.round(basePrice * 100) / 100,
            yourPrice,
            markup: this.markupPercentage,
            turnaround: turnaroundNames[turnaroundUuid] || '5-7 Business Days',
            shippingEstimate: 5.99
        };
    }

    _getMockShippingRates() {
        return [
            { id: 'GROUND', name: 'Ground Shipping', price: 5.99, days: '5-7 business days' },
            { id: 'PRIORITY', name: 'Priority Shipping', price: 12.99, days: '2-3 business days' },
            { id: 'EXPRESS', name: 'Express Shipping', price: 24.99, days: '1-2 business days' },
            { id: 'OVERNIGHT', name: 'Overnight Shipping', price: 39.99, days: 'Next business day' }
        ];
    }

    _getMockFacilities() {
        return [
            { id: 'CA', name: 'California Facility', location: 'Glendale, CA' },
            { id: 'TX', name: 'Texas Facility', location: 'Dallas, TX' },
            { id: 'NJ', name: 'New Jersey Facility', location: 'Newark, NJ' },
            { id: 'IL', name: 'Illinois Facility', location: 'Chicago, IL' }
        ];
    }

    _getMockOrderSubmission(orderData) {
        return {
            success: true,
            fourOverOrderId: 'MOCK-4O-' + Date.now(),
            status: 'received',
            estimatedShipDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString()
        };
    }

    _getMockOrderStatus(orderId) {
        const statuses = ['received', 'processing', 'printing', 'shipped'];
        const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];
        
        return {
            orderId,
            status: randomStatus,
            trackingNumber: randomStatus === 'shipped' ? 'MOCK1234567890' : null,
            carrier: randomStatus === 'shipped' ? 'UPS' : null,
            estimatedDelivery: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toISOString()
        };
    }
}

module.exports = new FourOverService();
