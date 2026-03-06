# Nvysion Platform - Full Project Documentation

## 📝 Overview
Nvysion Platform is a high-end, full-stack e-commerce application designed as a clone of **VistaPrint**. It provides a premium shopping experience for custom printing and marketing materials, featuring a sophisticated frontend built with **React 19** and a robust **Node.js/Express** backend with **MongoDB** integration.

The platform also includes a deep integration with the **4over API**, allowing for real-time product configuration, pricing, and order fulfillment simulation.

---

## 🛠 Tech Stack

### Frontend
- **Framework**: React 19 (Vite)
- **Styling**: Tailwind CSS v4, Vanilla CSS
- **State Management**: Zustand
- **Routing**: React Router DOM v7
- **Icons**: Lucide React, React Icons
- **Key Libraries**: Framer Motion (animations), React Slick (carousels), Axios (API calls)

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB (Mongoose ODM)
- **Environment**: Dotenv
- **Process Management**: Nodemon

---

## 📁 Project Structure

```text
vistaprint/
├── backend/                # Express Backend
│   ├── models/             # Mongoose Schemas (User, Product, Cart, etc.)
│   ├── routes/             # API Endpoints
│   │   ├── mock/           # Fallback Mock Routes
│   │   └── ...             # Live Database Routes
│   ├── services/           # 4over integration service
│   ├── utils/              # Seeding and helpers
│   └── index.js            # Server Entry Point
├── src/                    # React Frontend
│   ├── components/         # Reusable UI Components
│   │   ├── common/         # Buttons, Inputs, Cards
│   │   ├── layout/         # Header, Footer, Hero
│   │   └── ProductConfigurator/ # Complex Logic Components
│   ├── pages/              # Page Views (Home, Cart, Checkout, etc.)
│   ├── routes/             # Client-side Routing
│   ├── services/           # Axios API Wrappers
│   ├── store/              # Zustand State Stores
│   └── styles/             # Global CSS & Tailwind Config
├── public/                 # Static Assets (Images, Icons)
├── dist/                   # Production Build Output
└── package.json            # Global Dependencies
```

---

## 🗄 Backend Documentation

### Data Models (Mongoose)
1.  **User**: Authentication, profile data, saved addresses, and payment methods.
2.  **Product**: Name, slug, pricing, materials, quantities, features, and rating.
3.  **Category**: Visual data for category pages and navigation.
4.  **Cart**: User-specific shopping cart persistence.
5.  **Order**: Historical records of purchases with shipping and payment status.
6.  **Project**: Saved user designs and configurations.

### API Endpoints (`/api`)

| Category | Endpoint | Description |
| :--- | :--- | :--- |
| **Auth** | `POST /users/register` | Create a new account |
| | `POST /users/login` | Sign in and receive token |
| **Products** | `GET /products` | Fetch all products (filterable) |
| | `GET /products/:slug` | Get specific product details |
| **Categories** | `GET /categories` | List all main categories |
| **Cart** | `GET /cart/:userId` | Get user's active cart |
| | `POST /cart/:userId/items` | Add item to cart |
| **4over** | `GET /4over/categories` | Fetch 4over categories |
| | `POST /4over/pricing/calculate`| Real-time pricing calculation |

### Database Seeding
The project includes a comprehensive seeding script to populate the database with initial products and categories:
```bash
cd backend
npm run seed
```

---

## 💻 Frontend Documentation

### Architecture
- **Lazy Loading**: Pages are loaded on demand using `React.lazy` and `Suspense` for optimal performance.
- **Service Layer**: All API interactions are encapsulated in `src/services/api.js` and `src/services/fourOverApi.js`.
- **Protected Routes**: Certain pages (Cart, Account, Checkout) are wrapped in a `ProtectedRoute` component to handle authentication.

### Key Components
- **HeaderWithMegaMenu**: A sophisticated navigation system with multi-level dropdowns.
- **ProductConfigurator**: A dynamic UI for selecting sizes, quantities, and materials with live price updates.
- **Hero Section**: Premium visual entry point with glassmorphism and animations.

---

## 🖨 4over Integration
One of the most powerful features of this project is the **4over API integration**.
- **Service Layer**: `backend/services/fourOverService.js` handles complex UUID-based logic (runsize, turnaround, colorspec).
- **Frontend Configuration**: The `FourOverProductsPage` provides a dedicated interface for high-volume trade print products.

---

## 🚀 Installation & Setup

### 1. Prerequisites
- **Node.js** (v18+)
- **MongoDB** (Local or Atlas)

### 2. Environment Variables
Create a `.env` file in the `backend/` folder:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:21017/vistaprint
USE_MOCK_DATA=false  # Set to true if no DB available
```

### 3. Running the Project
**Start Backend:**
```bash
cd backend
npm run dev
```

**Start Frontend:**
```bash
cd ..
npm run dev
```

---

## ✅ Current Status
- **Backend**: Fully operational with MongoDB connection and 4over routes.
- **Frontend**: All major pages (Home, Category, Product Detail, Cart, Login) are functional.
- **Design**: 100% responsive with premium aesthetics.

---
*Generated by Antigravity AI - January 23, 2026*
