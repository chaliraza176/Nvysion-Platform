import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import ProtectedRoute from '../components/ProtectedRoute';

// Lazy load pages
const Home = lazy(() => import('../pages/HomePage'));
const BusinessCards = lazy(() => import('../pages/BusinessCardsPage'));
const Category = lazy(() => import('../pages/GenericCategoryPage'));
const ProductDetail = lazy(() => import('../pages/ProductDetailPage'));
const Cart = lazy(() => import('../pages/CartPage'));
const Checkout = lazy(() => import('../pages/CheckoutPage'));
const Deals = lazy(() => import('../pages/DealsPage'));
const TwoDayDelivery = lazy(() => import('../pages/TwoDayDeliveryPage'));
const Search = lazy(() => import('../pages/SearchResultsPage'));
const Help = lazy(() => import('../pages/HelpPage'));
const Projects = lazy(() => import('../pages/ProjectsPage'));
const Favorites = lazy(() => import('../pages/FavoritesPage'));

// Auth Pages
const SignIn = lazy(() => import('../pages/SignInPage'));
const SignUp = lazy(() => import('../pages/SignUpPage'));
const ForgotPassword = lazy(() => import('../pages/ForgotPasswordPage'));
const AccountCreated = lazy(() => import('../pages/AccountCreatedPage'));

// Account Pages
const AccountDashboard = lazy(() => import('../pages/AccountPages').then(m => ({ default: m.AccountDashboard })));
const AccountProfile = lazy(() => import('../pages/AccountPages').then(m => ({ default: m.AccountProfile })));
const AccountOrders = lazy(() => import('../pages/AccountPages').then(m => ({ default: m.AccountOrders })));
const AccountSettings = lazy(() => import('../pages/AccountPages').then(m => ({ default: m.AccountSettings })));
const AccountProjects = lazy(() => import('../pages/AccountPages').then(m => ({ default: m.AccountProjects })));
const AccountDesignServices = lazy(() => import('../pages/AccountPages').then(m => ({ default: m.AccountDesignServices })));
const AccountWebsites = lazy(() => import('../pages/AccountPages').then(m => ({ default: m.AccountWebsites })));
const AccountBrandKit = lazy(() => import('../pages/AccountPages').then(m => ({ default: m.AccountBrandKit })));
const AccountUploads = lazy(() => import('../pages/AccountPages').then(m => ({ default: m.AccountUploads })));
const AccountFavorites = lazy(() => import('../pages/AccountPages').then(m => ({ default: m.AccountFavorites })));
const AccountMailingLists = lazy(() => import('../pages/AccountPages').then(m => ({ default: m.AccountMailingLists })));
const AccountSubscriptions = lazy(() => import('../pages/AccountPages').then(m => ({ default: m.AccountSubscriptions })));
const AccountPayment = lazy(() => import('../pages/AccountPages').then(m => ({ default: m.AccountPayment })));

// 4over Products
const FourOverProducts = lazy(() => import('../pages/FourOverProductsPage'));

// Loading Component
const PageLoader = () => (
    <div className="page-loader">
        <div className="loader-spinner"></div>
        <p>Loading...</p>
    </div>
);

const AppRoutes = () => {
    return (
        <Suspense fallback={<PageLoader />}>
            <Routes>
                {/* Public Routes */}
                <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
                <Route path="/business-cards" element={<ProtectedRoute><BusinessCards /></ProtectedRoute>} />
                <Route path="/category/business-cards" element={<BusinessCards />} />
                <Route path="/category/:slug" element={<ProtectedRoute><Category /></ProtectedRoute>} />
                <Route path="/category/:categorySlug/:productSlug" element={<ProtectedRoute><ProductDetail /></ProtectedRoute>} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<ProtectedRoute><Checkout /></ProtectedRoute>} />
                <Route path="/deals" element={<Deals />} />
                <Route path="/2-day-delivery" element={<TwoDayDelivery />} />
                <Route path="/search" element={<Search />} />
                <Route path="/help" element={<Help />} />
                <Route path="/projects" element={<ProtectedRoute><Projects /></ProtectedRoute>} />
                <Route path="/favorites" element={<ProtectedRoute><Favorites /></ProtectedRoute>} />

                {/* Auth Routes */}
                <Route path="/signin" element={<SignIn />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="/account-created" element={<AccountCreated />} />

                {/* Account Routes */}
                <Route path="/account/dashboard" element={<ProtectedRoute><AccountDashboard /></ProtectedRoute>} />
                <Route path="/account/profile" element={<ProtectedRoute><AccountProfile /></ProtectedRoute>} />
                <Route path="/account/projects" element={<ProtectedRoute><AccountProjects /></ProtectedRoute>} />
                <Route path="/account/design-services" element={<ProtectedRoute><AccountDesignServices /></ProtectedRoute>} />
                <Route path="/account/websites" element={<ProtectedRoute><AccountWebsites /></ProtectedRoute>} />
                <Route path="/account/brand-kit" element={<ProtectedRoute><AccountBrandKit /></ProtectedRoute>} />
                <Route path="/account/uploads" element={<ProtectedRoute><AccountUploads /></ProtectedRoute>} />
                <Route path="/account/favorites" element={<ProtectedRoute><AccountFavorites /></ProtectedRoute>} />
                <Route path="/account/mailing-lists" element={<ProtectedRoute><AccountMailingLists /></ProtectedRoute>} />
                <Route path="/account/orders" element={<ProtectedRoute><AccountOrders /></ProtectedRoute>} />
                <Route path="/account/subscriptions" element={<ProtectedRoute><AccountSubscriptions /></ProtectedRoute>} />
                <Route path="/account/settings" element={<ProtectedRoute><AccountSettings /></ProtectedRoute>} />
                <Route path="/account/payment" element={<ProtectedRoute><AccountPayment /></ProtectedRoute>} />

                {/* Business Cards Subpages - redirect to main page */}
                <Route path="/business-cards/*" element={<BusinessCards />} />

                {/* 4over Products */}
                <Route path="/4over-products" element={<FourOverProducts />} />
                <Route path="/4over-products/:categoryId" element={<FourOverProducts />} />

                {/* 404 */}
                <Route path="*" element={<div className="not-found">Page Not Found</div>} />
            </Routes>
        </Suspense>
    );
};

export default AppRoutes;
