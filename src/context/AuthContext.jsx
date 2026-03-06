import React, { createContext, useContext, useState, useEffect } from 'react';
import { loginUser, registerUser, logoutUser, getCurrentUser, updateUserProfile } from '../services/api';

const AuthContext = createContext();

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Load user from localStorage on mount - always provide a demo user for ease of use
    useEffect(() => {
        const demoUser = {
            _id: 'demo_user',
            name: 'Demo User',
            email: 'demo@example.com',
            token: 'demo_token'
        };
        setUser(demoUser);
        setLoading(false);
    }, []);

    const login = async (email, password) => {
        try {
            setError(null);
            setLoading(true);
            const response = await loginUser({ email, password });
            setUser(response.user);
            return response;
        } catch (err) {
            setError(err.message || 'Login failed');
            throw err;
        } finally {
            setLoading(false);
        }
    };

    const register = async (userData) => {
        try {
            setError(null);
            setLoading(true);
            const response = await registerUser(userData);
            // Auto login after registration
            if (response.user) {
                localStorage.setItem('user', JSON.stringify(response.user));
                setUser(response.user);
            }
            return response;
        } catch (err) {
            setError(err.message || 'Registration failed');
            throw err;
        } finally {
            setLoading(false);
        }
    };

    const logout = () => {
        logoutUser();
        setUser(null);
    };

    const updateProfile = async (data) => {
        try {
            setError(null);
            const updatedUser = await updateUserProfile(user._id, data);
            setUser(updatedUser);
            return updatedUser;
        } catch (err) {
            setError(err.message || 'Update failed');
            throw err;
        }
    };

    const value = {
        user,
        loading,
        error,
        isAuthenticated: !!user,
        login,
        register,
        logout,
        updateProfile,
        setError
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};
