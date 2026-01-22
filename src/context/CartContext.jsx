import React, { createContext, useContext, useState, useEffect } from 'react';
import { getCart, addToCart as apiAddToCart, updateCartItem, removeFromCart as apiRemoveFromCart, clearCart as apiClearCart } from '../services/api';
import { useAuth } from './AuthContext';

const CartContext = createContext();

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [loading, setLoading] = useState(false);
    const { user, isAuthenticated } = useAuth();

    // Load cart - from API if logged in, else from localStorage
    useEffect(() => {
        const loadCart = async () => {
            if (isAuthenticated && user?._id) {
                try {
                    setLoading(true);
                    const cart = await getCart(user._id);
                    setCartItems(cart.items || []);
                } catch (error) {
                    console.error('Failed to load cart from API:', error);
                    loadLocalCart();
                } finally {
                    setLoading(false);
                }
            } else {
                loadLocalCart();
            }
        };

        loadCart();
    }, [isAuthenticated, user]);

    const loadLocalCart = () => {
        const savedCart = localStorage.getItem('vistaprint_cart');
        if (savedCart) {
            try {
                setCartItems(JSON.parse(savedCart));
            } catch (e) {
                console.error('Failed to parse cart from localStorage', e);
            }
        }
    };

    // Save cart to localStorage when not logged in
    useEffect(() => {
        if (!isAuthenticated) {
            localStorage.setItem('vistaprint_cart', JSON.stringify(cartItems));
        }
    }, [cartItems, isAuthenticated]);

    const addToCart = async (product) => {
        if (isAuthenticated && user?._id) {
            try {
                setLoading(true);
                const cart = await apiAddToCart(user._id, {
                    product: product.id || product._id,
                    quantity: product.quantity || 1,
                    material: product.material || product.selectedOption,
                    size: product.size,
                    customization: product.customization,
                    price: product.price
                });
                setCartItems(cart.items || []);
            } catch (error) {
                console.error('Failed to add to cart:', error);
                // Fallback to local
                addToLocalCart(product);
            } finally {
                setLoading(false);
            }
        } else {
            addToLocalCart(product);
        }
    };

    const addToLocalCart = (product) => {
        setCartItems(prevItems => {
            const existingItemIndex = prevItems.findIndex(item =>
                item.id === product.id &&
                item.selectedOption === product.selectedOption
            );

            if (existingItemIndex !== -1) {
                const updatedItems = [...prevItems];
                updatedItems[existingItemIndex].quantity = parseInt(updatedItems[existingItemIndex].quantity) + parseInt(product.quantity);
                return updatedItems;
            }

            return [...prevItems, product];
        });
    };

    const removeFromCart = async (id, option) => {
        if (isAuthenticated && user?._id) {
            try {
                setLoading(true);
                const cart = await apiRemoveFromCart(user._id, id);
                setCartItems(cart.items || []);
            } catch (error) {
                console.error('Failed to remove from cart:', error);
                removeFromLocalCart(id, option);
            } finally {
                setLoading(false);
            }
        } else {
            removeFromLocalCart(id, option);
        }
    };

    const removeFromLocalCart = (id, option) => {
        setCartItems(prevItems => prevItems.filter(item => !(item.id === id && (option ? item.selectedOption === option : true))));
    };

    const updateQuantity = async (id, option, quantity) => {
        if (isAuthenticated && user?._id) {
            try {
                setLoading(true);
                const cart = await updateCartItem(user._id, id, quantity);
                setCartItems(cart.items || []);
            } catch (error) {
                console.error('Failed to update quantity:', error);
                updateLocalQuantity(id, option, quantity);
            } finally {
                setLoading(false);
            }
        } else {
            updateLocalQuantity(id, option, quantity);
        }
    };

    const updateLocalQuantity = (id, option, quantity) => {
        setCartItems(prevItems => {
            return prevItems.map(item => {
                if (item.id === id && (option ? item.selectedOption === option : true)) {
                    return { ...item, quantity: parseInt(quantity) };
                }
                return item;
            });
        });
    };

    const clearCart = async () => {
        if (isAuthenticated && user?._id) {
            try {
                setLoading(true);
                await apiClearCart(user._id);
                setCartItems([]);
            } catch (error) {
                console.error('Failed to clear cart:', error);
                setCartItems([]);
            } finally {
                setLoading(false);
            }
        } else {
            setCartItems([]);
        }
    };

    const cartTotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

    return (
        <CartContext.Provider value={{
            cartItems,
            addToCart,
            removeFromCart,
            updateQuantity,
            clearCart,
            cartTotal,
            cartCount,
            loading
        }}>
            {children}
        </CartContext.Provider>
    );
};
