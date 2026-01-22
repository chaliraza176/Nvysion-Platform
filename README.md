# VistaPrint Clone - React Application

Complete clone of VistaPrint website built with modern React and Vite.

## 🚀 Features

- **Modern UI/UX Design**: Premium design with glassmorphism, gradients, and smooth animations
- **Fully Responsive**: Works seamlessly on desktop, tablet, and mobile devices
- **Component-Based Architecture**: Reusable React components for scalability
- **Interactive Carousels**: Product showcases with horizontal scrolling
- **Sticky Navigation**: Header stays accessible while scrolling
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Fast Performance**: Built with Vite for lightning-fast development and builds

## 📦 Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **React Slick** - Carousel/slider component
- **React Icons** - Icon library
- **CSS3** - Modern styling with CSS variables

## 🎨 Design Highlights

### Color Palette
- Primary Navy: `#003057`
- Accent Green: `#00A859`
- Accent Orange: `#FF6B35`
- Accent Blue: `#0066CC`

### Key Sections
1. **Header** - Sticky navigation with search, user actions, and category menu
2. **Hero** - Gradient background with glassmorphism card and CTA buttons
3. **Trust Features** - Value propositions with gradient icons
4. **Product Carousels** - Multiple carousels for categories and collections
5. **Promo Banner** - Logo maker promotion with gradient background
6. **Footer** - Newsletter signup, links, trust badges, and social media

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Steps

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:5173`

3. **Build for Production**
   ```bash
   npm run build
   ```

4. **Preview Production Build**
   ```bash
   npm run preview
   ```

## 📁 Project Structure

```
vistaprint/
├── public/              # Static assets
├── src/
│   ├── components/      # Reusable React components
│   │   ├── Header.jsx
│   │   ├── Header.css
│   │   ├── Hero.jsx
│   │   ├── Hero.css
│   │   ├── TrustFeatures.jsx
│   │   ├── TrustFeatures.css
│   │   ├── ProductCarousel.jsx
│   │   ├── ProductCarousel.css
│   │   ├── PromoBanner.jsx
│   │   ├── PromoBanner.css
│   │   ├── Footer.jsx
│   │   └── Footer.css
│   ├── App.jsx          # Main application component
│   ├── App.css          # App-specific styles
│   ├── index.css        # Global styles and design system
│   └── main.jsx         # Application entry point
├── index.html           # HTML template
├── package.json         # Dependencies and scripts
└── vite.config.js       # Vite configuration
```

## 🎯 Components Overview

### Header
- Top utility bar with service links
- Logo and search bar
- User action buttons (Help, Projects, Favorites, Sign In, Cart)
- Navigation menu with product categories
- Promotional banner
- Mobile-responsive hamburger menu

### Hero
- Full-width gradient background with decorative patterns
- Glassmorphism card with main headline
- Call-to-action buttons
- Trust features (satisfaction guarantee, 2-day shipping, quality)
- Floating animation effect

### TrustFeatures
- Grid layout with 3 feature cards
- Gradient icons
- Hover effects with lift animation

### ProductCarousel
- Supports two layouts: circular and rectangular
- Responsive sliding with React Slick
- Product cards with images, names, prices
- Sale badges for promotional items
- Navigation dots for pagination

### PromoBanner
- Full-width promotional section
- Gradient background with decorative elements
- Logo maker call-to-action

### Footer
- Newsletter subscription form
- Multi-column link sections
- Trustpilot-style review widget
- Social media icons
- Payment method icons
- Copyright and legal links

## 🎨 Customization

### Changing Colors
Edit the CSS variables in `src/index.css`:
```css
:root {
  --primary-navy: #003057;
  --accent-green: #00A859;
  /* Add your custom colors */
}
```

### Adding Products
Edit the product arrays in `src/App.jsx`:
```javascript
const categories = [
  { name: 'Your Category', icon: '🎨', gradient: 'linear-gradient(...)' },
  // Add more categories
];
```

### Modifying Layout
Each component has its own CSS file. Edit the respective `.css` file to modify styling.

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: Below 768px

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🌟 Features Implemented

- ✅ Responsive design
- ✅ Sticky header navigation
- ✅ Product carousels with multiple layouts
- ✅ Glassmorphism effects
- ✅ Gradient backgrounds
- ✅ Smooth animations
- ✅ Mobile menu
- ✅ SEO optimization
- ✅ Modern typography
- ✅ Icon integration

## 📝 Notes

This is a clone project built for educational purposes. All design inspiration comes from the original VistaPrint website. This project demonstrates modern React development practices, component architecture, and responsive web design.

## 🚀 Future Enhancements

Potential features to add:
- Product detail pages
- Shopping cart functionality
- User authentication
- Design tool integration
- Checkout process
- Admin dashboard
- Product search and filtering
- Customer reviews section

## 📄 License

This project is open source and available for educational purposes.

## 👨‍💻 Author

Created with ❤️ using React and Vite

---

**Enjoy building with this VistaPrint clone!** 🎉
