# 4over API Integration Guide

## Overview

This document explains the 4over wholesale print API integration. 4over uses a UUID-based system where each product configuration option has a unique identifier.

## Key Concepts

### UUID-Based System
4over identifies everything with UUIDs:
- `product_uuid` - Product identifier
- `runsize_uuid` - Size/dimensions
- `turnaroundtime_uuid` - Production time
- `colorspec_uuid` - Color specifications (4/0, 4/4, etc.)
- `option_uuids` - Additional options (paper type, coating, etc.)

---

## Files Structure

### Backend
```
backend/
├── services/
│   └── fourOverService.js    # 4over API communication
├── routes/
│   └── fourOverRoutes.js     # API endpoints
└── .env                      # API credentials
```

### Frontend
```
src/
├── services/
│   └── fourOverApi.js        # Frontend API service
├── components/
│   ├── ProductConfigurator/  # Product customization modal
│   └── FileUpload/           # Design file uploader
└── pages/
    └── FourOverProductsPage.jsx  # Products listing
```

---

## Setup Instructions

### Step 1: Get 4over API Credentials

1. Go to https://4over.com
2. Create a reseller account (requires reseller certificate)
3. Once approved, contact 4over support for API access
4. Get your credentials:
   - Account ID
   - API Key
   - API Secret

### Step 2: Configure Environment

Edit `backend/.env`:
```env
FOUROVER_API_KEY=your_actual_api_key
FOUROVER_API_SECRET=your_actual_secret
FOUROVER_ACCOUNT_ID=your_account_id
FOUROVER_RESELLER_ID=your_reseller_id
FOUROVER_BASE_URL=https://api.4over.com
FOUROVER_MARKUP_PERCENT=30
```

### Step 3: Start the Application

```bash
# Terminal 1 - Backend
cd backend
npm run dev

# Terminal 2 - Frontend
npm run dev
```

### Step 4: Test

Visit: `http://localhost:5173/4over-products`

---

## API Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/4over/status` | GET | Check API configuration |
| `/api/4over/categories` | GET | Get product categories |
| `/api/4over/categories/:id/products` | GET | Get products by category |
| `/api/4over/products/:uuid` | GET | Get product details |
| `/api/4over/products/:uuid/options` | GET | Get product options (UUIDs) |
| `/api/4over/pricing/calculate` | POST | Calculate price |
| `/api/4over/shipping/rates` | POST | Get shipping rates |
| `/api/4over/facilities` | GET | Get 4over facilities |
| `/api/4over/orders` | POST | Submit order |
| `/api/4over/orders/:id/status` | GET | Get order status |
| `/api/4over/files/upload` | POST | Upload print file |

---

## Order Submission Format

```javascript
{
  orderNumber: "ORD-12345",
  items: [{
    fourOverProductUuid: "product-uuid",
    runsizeUuid: "size-uuid",
    turnaroundUuid: "turnaround-uuid",
    colorspecUuid: "colorspec-uuid",
    optionUuids: ["paper-uuid", "coating-uuid"],
    quantity: 500,
    printFileUrl: "https://your-storage.com/file.pdf"
  }],
  shippingAddress: {
    name: "John Doe",
    street: "123 Main St",
    city: "Los Angeles",
    state: "CA",
    zipCode: "90001",
    country: "US",
    phone: "555-1234"
  },
  shippingMethod: "GROUND"
}
```

---

## Mock Mode

When API credentials are not configured, the system runs in **mock mode**:
- Sample products and categories are displayed
- Pricing calculations use mock data
- Orders return mock confirmation

This allows development and testing without a 4over account.

---

## Pricing Markup

Your profit margin is controlled by `FOUROVER_MARKUP_PERCENT`:

| 4over Price | Markup | Your Price | Profit |
|-------------|--------|------------|--------|
| $20.00 | 30% | $26.00 | $6.00 |
| $50.00 | 30% | $65.00 | $15.00 |
| $100.00 | 30% | $130.00 | $30.00 |

---

## Customer Flow

```
1. Browse /4over-products
2. Select category
3. Click "Customize & Order"
4. Configure product:
   - Size (runsize_uuid)
   - Print sides (colorspec_uuid)
   - Paper type
   - Coating
   - Quantity
   - Turnaround time
5. See real-time pricing
6. Add to cart
7. Upload design file at checkout
8. Complete payment
9. Order submitted to 4over
10. 4over prints & ships to customer
```

---

## Product Options Response

```javascript
{
  runsizes: [
    { uuid: "rs-3.5x2", name: "Standard (3.5\" x 2\")", dimensions: "3.5x2" }
  ],
  turnarounds: [
    { uuid: "ta-standard", name: "5-7 Business Days", days: 7, priceMultiplier: 1 }
  ],
  colorspecs: [
    { uuid: "cs-4/4", name: "Full Color Both Sides (4/4)", sides: 2 }
  ],
  paperTypes: [
    { uuid: "pt-14pt", name: "14pt Cardstock", priceAdd: 0 }
  ],
  coatings: [
    { uuid: "ct-gloss", name: "Gloss UV", priceAdd: 3 }
  ],
  quantities: [
    { qty: 100, pricePerUnit: 0.20 }
  ]
}
```

---

## Troubleshooting

### "Running in demo mode"
- API credentials not configured in `.env`
- Check `FOUROVER_API_KEY`, `FOUROVER_API_SECRET`, `FOUROVER_ACCOUNT_ID`

### "Failed to fetch products"
- Check backend is running on port 5000
- Check network connectivity
- Review backend console for errors

### "Price calculation failed"
- Ensure all required UUIDs are provided
- Check quantity is valid

---

## Next Steps

1. **Get 4over Account**: Apply at https://4over.com
2. **Add Real Credentials**: Update `.env`
3. **Get Product UUIDs**: Contact 4over for your product catalog UUIDs
4. **File Storage**: Set up S3 or similar for print file uploads
5. **Payment**: Integrate Stripe/PayPal
6. **Webhooks**: Set up order status webhooks

---

## Support

- 4over Support: Contact through your reseller dashboard
- Integration Help: https://gaincafe.com/services/api-integrations/4over
