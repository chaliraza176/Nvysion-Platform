/**
 * Product Configurator Component
 * Allows users to customize print products with 4over options
 * Uses UUID-based system for all product configurations
 */

import { useState, useEffect, useCallback } from 'react';
import { get4overProductOptions, calculate4overPrice, formatPrice } from '../../services/fourOverApi';
import './ProductConfigurator.css';

const ProductConfigurator = ({ productId, productName, onAddToCart, onClose }) => {
    const [options, setOptions] = useState(null);
    const [loading, setLoading] = useState(true);
    const [calculating, setCalculating] = useState(false);
    const [error, setError] = useState(null);
    
    // Selected configuration with UUIDs
    const [config, setConfig] = useState({
        productUuid: productId,
        runsizeUuid: '',
        turnaroundUuid: '',
        colorspecUuid: '',
        paperTypeUuid: '',
        coatingUuid: '',
        quantity: 100,
        optionUuids: []
    });
    
    // Calculated pricing
    const [pricing, setPricing] = useState(null);

    // Load product options
    useEffect(() => {
        const loadOptions = async () => {
            try {
                setLoading(true);
                setError(null);
                const data = await get4overProductOptions(productId);
                
                if (!data) {
                    setError('Failed to load product options');
                    return;
                }
                
                setOptions(data);
                
                // Set defaults from first available options
                setConfig(prev => ({
                    ...prev,
                    runsizeUuid: data.runsizes?.[0]?.uuid || '',
                    turnaroundUuid: data.turnarounds?.[0]?.uuid || '',
                    colorspecUuid: data.colorspecs?.[0]?.uuid || '',
                    paperTypeUuid: data.paperTypes?.[0]?.uuid || '',
                    coatingUuid: data.coatings?.[0]?.uuid || '',
                    quantity: data.quantities?.[0]?.qty || 100
                }));
            } catch (err) {
                console.error('Error loading options:', err);
                setError('Failed to load product options');
            } finally {
                setLoading(false);
            }
        };
        
        loadOptions();
    }, [productId]);

    // Calculate price when config changes
    const calculatePrice = useCallback(async () => {
        if (!config.runsizeUuid || !config.quantity) return;
        
        try {
            setCalculating(true);
            
            // Build option UUIDs array
            const optionUuids = [];
            if (config.paperTypeUuid) optionUuids.push(config.paperTypeUuid);
            if (config.coatingUuid) optionUuids.push(config.coatingUuid);
            
            const result = await calculate4overPrice({
                productUuid: config.productUuid,
                runsizeUuid: config.runsizeUuid,
                turnaroundUuid: config.turnaroundUuid,
                colorspecUuid: config.colorspecUuid,
                quantity: config.quantity,
                optionUuids
            });
            
            setPricing(result);
        } catch (err) {
            console.error('Price calculation error:', err);
        } finally {
            setCalculating(false);
        }
    }, [config]);

    useEffect(() => {
        const timer = setTimeout(calculatePrice, 300);
        return () => clearTimeout(timer);
    }, [calculatePrice]);

    const handleConfigChange = (key, value) => {
        setConfig(prev => ({ ...prev, [key]: value }));
    };

    const handleAddToCart = () => {
        if (!pricing) return;
        
        // Get selected option names for display
        const selectedRunsize = options.runsizes?.find(r => r.uuid === config.runsizeUuid);
        const selectedTurnaround = options.turnarounds?.find(t => t.uuid === config.turnaroundUuid);
        const selectedColorspec = options.colorspecs?.find(c => c.uuid === config.colorspecUuid);
        const selectedPaper = options.paperTypes?.find(p => p.uuid === config.paperTypeUuid);
        const selectedCoating = options.coatings?.find(c => c.uuid === config.coatingUuid);
        
        onAddToCart({
            productUuid: config.productUuid,
            productName,
            // UUIDs for 4over order
            runsizeUuid: config.runsizeUuid,
            turnaroundUuid: config.turnaroundUuid,
            colorspecUuid: config.colorspecUuid,
            optionUuids: [config.paperTypeUuid, config.coatingUuid].filter(Boolean),
            quantity: config.quantity,
            price: pricing.yourPrice,
            // Display info
            displayOptions: {
                size: selectedRunsize?.name,
                turnaround: selectedTurnaround?.name,
                colorSpec: selectedColorspec?.name,
                paper: selectedPaper?.name,
                coating: selectedCoating?.name
            }
        });
    };

    if (loading) {
        return (
            <div className="configurator-overlay">
                <div className="configurator-modal">
                    <div className="configurator-loading">
                        <div className="spinner"></div>
                        <p>Loading options...</p>
                    </div>
                </div>
            </div>
        );
    }

    if (error || !options) {
        return (
            <div className="configurator-overlay">
                <div className="configurator-modal">
                    <div className="configurator-error">
                        <p>{error || 'Failed to load product options'}</p>
                        <button onClick={onClose}>Close</button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="configurator-overlay" onClick={onClose}>
            <div className="configurator-modal" onClick={e => e.stopPropagation()}>
                <button className="configurator-close" onClick={onClose}>×</button>
                
                <div className="configurator-header">
                    <h2>Customize Your {productName}</h2>
                    <p>Select your options below</p>
                </div>

                <div className="configurator-content">
                    <div className="configurator-options">
                        {/* Size Selection */}
                        {options.runsizes?.length > 0 && (
                            <div className="option-group">
                                <label>Size</label>
                                <div className="option-buttons">
                                    {options.runsizes.map(size => (
                                        <button
                                            key={size.uuid}
                                            className={`option-btn ${config.runsizeUuid === size.uuid ? 'active' : ''}`}
                                            onClick={() => handleConfigChange('runsizeUuid', size.uuid)}
                                        >
                                            {size.name}
                                            {size.dimensions && <span className="option-dim">{size.dimensions}</span>}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Color Spec Selection */}
                        {options.colorspecs?.length > 0 && (
                            <div className="option-group">
                                <label>Print Sides</label>
                                <div className="option-cards">
                                    {options.colorspecs.map(spec => (
                                        <div
                                            key={spec.uuid}
                                            className={`option-card ${config.colorspecUuid === spec.uuid ? 'active' : ''}`}
                                            onClick={() => handleConfigChange('colorspecUuid', spec.uuid)}
                                        >
                                            <span className="option-name">{spec.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Paper Type Selection */}
                        {options.paperTypes?.length > 0 && (
                            <div className="option-group">
                                <label>Paper Type</label>
                                <div className="option-cards">
                                    {options.paperTypes.map(paper => (
                                        <div
                                            key={paper.uuid}
                                            className={`option-card ${config.paperTypeUuid === paper.uuid ? 'active' : ''}`}
                                            onClick={() => handleConfigChange('paperTypeUuid', paper.uuid)}
                                        >
                                            <span className="option-name">{paper.name}</span>
                                            {paper.description && (
                                                <span className="option-desc">{paper.description}</span>
                                            )}
                                            {paper.priceAdd > 0 && (
                                                <span className="option-price">+${paper.priceAdd}</span>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Coating Selection */}
                        {options.coatings?.length > 0 && (
                            <div className="option-group">
                                <label>Coating / Finish</label>
                                <div className="option-buttons">
                                    {options.coatings.map(coating => (
                                        <button
                                            key={coating.uuid}
                                            className={`option-btn ${config.coatingUuid === coating.uuid ? 'active' : ''}`}
                                            onClick={() => handleConfigChange('coatingUuid', coating.uuid)}
                                        >
                                            {coating.name}
                                            {coating.priceAdd > 0 && (
                                                <span className="price-add">+${coating.priceAdd}</span>
                                            )}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Quantity Selection */}
                        {options.quantities?.length > 0 && (
                            <div className="option-group">
                                <label>Quantity</label>
                                <div className="quantity-grid">
                                    {options.quantities.map(q => (
                                        <button
                                            key={q.qty}
                                            className={`quantity-btn ${config.quantity === q.qty ? 'active' : ''}`}
                                            onClick={() => handleConfigChange('quantity', q.qty)}
                                        >
                                            <span className="qty-number">{q.qty.toLocaleString()}</span>
                                            <span className="qty-price">${q.pricePerUnit}/ea</span>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Turnaround Time */}
                        {options.turnarounds?.length > 0 && (
                            <div className="option-group">
                                <label>Turnaround Time</label>
                                <div className="option-cards turnaround-cards">
                                    {options.turnarounds.map(t => (
                                        <div
                                            key={t.uuid}
                                            className={`option-card ${config.turnaroundUuid === t.uuid ? 'active' : ''}`}
                                            onClick={() => handleConfigChange('turnaroundUuid', t.uuid)}
                                        >
                                            <span className="option-name">{t.name}</span>
                                            {t.priceMultiplier > 1 && (
                                                <span className="option-price">
                                                    +{Math.round((t.priceMultiplier - 1) * 100)}%
                                                </span>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Pricing Summary */}
                    <div className="configurator-summary">
                        <div className="summary-card">
                            <h3>Order Summary</h3>
                            
                            <div className="summary-details">
                                <div className="summary-row">
                                    <span>Product:</span>
                                    <span>{productName}</span>
                                </div>
                                <div className="summary-row">
                                    <span>Quantity:</span>
                                    <span>{config.quantity.toLocaleString()}</span>
                                </div>
                                {pricing?.turnaround && (
                                    <div className="summary-row">
                                        <span>Turnaround:</span>
                                        <span>{pricing.turnaround}</span>
                                    </div>
                                )}
                            </div>

                            <div className="summary-price">
                                {calculating ? (
                                    <div className="price-calculating">
                                        <div className="spinner small"></div>
                                        <span>Calculating...</span>
                                    </div>
                                ) : pricing ? (
                                    <>
                                        <div className="total-price">
                                            <span>Total:</span>
                                            <span className="price">{formatPrice(pricing.yourPrice)}</span>
                                        </div>
                                        <div className="price-per-unit">
                                            ${(pricing.yourPrice / config.quantity).toFixed(3)} each
                                        </div>
                                        {pricing.shippingEstimate > 0 && (
                                            <div className="shipping-estimate">
                                                + Est. shipping: {formatPrice(pricing.shippingEstimate)}
                                            </div>
                                        )}
                                    </>
                                ) : (
                                    <div className="price-unavailable">Select options to see price</div>
                                )}
                            </div>

                            <button 
                                className="add-to-cart-btn"
                                onClick={handleAddToCart}
                                disabled={!pricing || calculating}
                            >
                                Add to Cart - {pricing ? formatPrice(pricing.yourPrice) : '$0.00'}
                            </button>
                            
                            <p className="powered-by">
                                Powered by 4over wholesale printing
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductConfigurator;
