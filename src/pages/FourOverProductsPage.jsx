/**
 * 4over Products Page
 * Displays products available through 4over wholesale printing
 */

import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { get4overCategories, get4overProductsByCategory, get4overStatus } from '../services/fourOverApi';
import ProductConfigurator from '../components/ProductConfigurator';
import { useCart } from '../context/CartContext';
import './FourOverProductsPage.css';

const FourOverProductsPage = () => {
    const { categoryId } = useParams();
    const navigate = useNavigate();
    const { addItem } = useCart();
    
    const [status, setStatus] = useState(null);
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(categoryId || null);
    const [loading, setLoading] = useState(true);
    const [productsLoading, setProductsLoading] = useState(false);
    const [configuratorProduct, setConfiguratorProduct] = useState(null);
    const [addedToCart, setAddedToCart] = useState(false);

    // Check 4over status and load categories
    useEffect(() => {
        const init = async () => {
            try {
                const [statusData, categoriesData] = await Promise.all([
                    get4overStatus(),
                    get4overCategories()
                ]);
                setStatus(statusData);
                setCategories(categoriesData);
                
                if (!selectedCategory && categoriesData.length > 0) {
                    setSelectedCategory(categoriesData[0].id);
                }
            } catch (error) {
                console.error('Failed to initialize:', error);
            } finally {
                setLoading(false);
            }
        };
        init();
    }, []);

    // Load products when category changes
    useEffect(() => {
        if (!selectedCategory) return;
        
        const loadProducts = async () => {
            setProductsLoading(true);
            try {
                const data = await get4overProductsByCategory(selectedCategory);
                setProducts(data);
            } catch (error) {
                console.error('Failed to load products:', error);
                setProducts([]);
            } finally {
                setProductsLoading(false);
            }
        };
        loadProducts();
    }, [selectedCategory]);

    const handleCategoryChange = (catId) => {
        setSelectedCategory(catId);
        navigate(`/4over-products/${catId}`, { replace: true });
    };

    const handleCustomize = (product) => {
        setConfiguratorProduct(product);
    };

    const handleAddToCart = (configuredProduct) => {
        addItem({
            id: `4over-${configuredProduct.productUuid}-${Date.now()}`,
            name: configuredProduct.productName,
            price: configuredProduct.price,
            quantity: 1,
            is4overProduct: true,
            fourOverConfig: {
                productUuid: configuredProduct.productUuid,
                runsizeUuid: configuredProduct.runsizeUuid,
                turnaroundUuid: configuredProduct.turnaroundUuid,
                colorspecUuid: configuredProduct.colorspecUuid,
                optionUuids: configuredProduct.optionUuids,
                printQuantity: configuredProduct.quantity
            },
            displayOptions: configuredProduct.displayOptions,
            image: '/images/products/default.jpg'
        });
        
        setConfiguratorProduct(null);
        setAddedToCart(true);
        
        // Hide success message after 3 seconds
        setTimeout(() => setAddedToCart(false), 3000);
    };

    if (loading) {
        return (
            <div className="fourover-page">
                <div className="loading-container">
                    <div className="spinner"></div>
                    <p>Loading 4over products...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="fourover-page">
            {/* Success Toast */}
            {addedToCart && (
                <div className="toast-success">
                    <span>✓</span> Product added to cart!
                    <button onClick={() => navigate('/cart')}>View Cart</button>
                </div>
            )}

            {/* Status Banner */}
            {status && !status.configured && (
                <div className="status-banner mock-mode">
                    <span>🔧</span>
                    <p>Running in demo mode. Connect your 4over API credentials for live products and pricing.</p>
                </div>
            )}

            {/* Page Header */}
            <div className="fourover-header">
                <div className="header-content">
                    <div className="header-badge">Powered by 4over</div>
                    <h1>Professional Print Products</h1>
                    <p>Wholesale quality printing with fast turnaround times</p>
                </div>
            </div>

            {/* Main Content */}
            <div className="fourover-content">
                {/* Category Sidebar */}
                <aside className="category-sidebar">
                    <h3>Categories</h3>
                    <ul className="category-list">
                        {categories.map(cat => (
                            <li key={cat.id}>
                                <button
                                    className={`category-btn ${selectedCategory === cat.id ? 'active' : ''}`}
                                    onClick={() => handleCategoryChange(cat.id)}
                                >
                                    <span className="cat-icon">{cat.icon}</span>
                                    <span className="cat-name">{cat.name}</span>
                                </button>
                            </li>
                        ))}
                    </ul>
                    
                    <div className="sidebar-info">
                        <h4>Why 4over?</h4>
                        <ul>
                            <li>✓ Wholesale pricing</li>
                            <li>✓ Fast turnaround</li>
                            <li>✓ Premium quality</li>
                            <li>✓ Direct shipping</li>
                        </ul>
                    </div>
                </aside>

                {/* Products Grid */}
                <main className="products-main">
                    <div className="products-header">
                        <h2>
                            {categories.find(c => c.id === selectedCategory)?.name || 'Products'}
                        </h2>
                        <span className="product-count">{products.length} products</span>
                    </div>

                    {productsLoading ? (
                        <div className="products-loading">
                            <div className="spinner"></div>
                            <p>Loading products...</p>
                        </div>
                    ) : products.length === 0 ? (
                        <div className="no-products">
                            <div className="no-products-icon">📦</div>
                            <p>No products found in this category.</p>
                            <p className="no-products-hint">Try selecting a different category.</p>
                        </div>
                    ) : (
                        <div className="products-grid">
                            {products.map(product => (
                                <div key={product.id} className="product-card">
                                    <div className="product-image">
                                        <img 
                                            src={product.image || `https://via.placeholder.com/300x200/f3f4f6/9ca3af?text=${encodeURIComponent(product.name)}`} 
                                            alt={product.name}
                                            onError={(e) => {
                                                e.target.src = `https://via.placeholder.com/300x200/f3f4f6/9ca3af?text=${encodeURIComponent(product.name)}`;
                                            }}
                                        />
                                        <div className="product-badge">4over</div>
                                    </div>
                                    <div className="product-info">
                                        <h3>{product.name}</h3>
                                        <p className="product-price">
                                            Starting at <strong>${product.startingPrice?.toFixed(2) || '19.99'}</strong>
                                        </p>
                                        <button 
                                            className="customize-btn"
                                            onClick={() => handleCustomize(product)}
                                        >
                                            Customize & Order
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </main>
            </div>

            {/* Product Configurator Modal */}
            {configuratorProduct && (
                <ProductConfigurator
                    productId={configuratorProduct.uuid || configuratorProduct.id}
                    productName={configuratorProduct.name}
                    onAddToCart={handleAddToCart}
                    onClose={() => setConfiguratorProduct(null)}
                />
            )}
        </div>
    );
};

export default FourOverProductsPage;
