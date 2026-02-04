# Flavor Haven - Premium Fine Dining Experience

A sophisticated multi-page restaurant website built with React, TypeScript, and Vite. Featuring a luxury design aesthetic inspired by Gordon Ramsay's culinary excellence.

## 🍽️ Live Sites

- **Production Site**: https://flavorhavendemo.netlify.app/
- **Rosie Kitchen**: https://rosiekitchen.netlify.app
- **Tony's Pizza Shack**: https://pizzashopdemos.netlify.app/

## ✨ Features

- **Multi-page Architecture**: Home, About, Menu, Reservations, and Contact pages
- **Luxury Design**: Black and yellow color scheme with sophisticated typography
- **Responsive Design**: Optimized for all devices with mobile-first approach
- **Interactive Modals**: Demo modals for reservations, menu exploration, and contact forms
- **Smooth Animations**: Framer Motion transitions and micro-interactions
- **PWA Support**: Progressive Web App capabilities with service worker
- **SEO Optimized**: Meta tags, structured data, and semantic HTML
- **Modern Stack**: React 19, TypeScript, Tailwind CSS, Vite

## 🏛️ Pages

### Home Page
- Hero section with Michelin star branding
- Excellence showcase with statistics
- Interactive demo modals for menu and reservations
- Call-to-action sections

### About Page  
- Restaurant story and philosophy
- Team profiles with high-quality images
- Global impact statistics
- Professional credentials

### Menu Page
- Tasting menu with wine pairings
- Seasonal à la carte options
- Immersive dining experiences
- Interactive reservation system

### Reservations Page
- Booking form with date/time selection
- Special occasion preferences
- Party size and seating options
- Confirmation modals

### Contact Page
- Restaurant information and hours
- Interactive contact forms
- Location details with map integration
- Social media links

## 🛠️ Tech Stack

- **Frontend**: React 19 with TypeScript
- **Styling**: Tailwind CSS with custom configurations
- **Build Tool**: Vite with rolldown
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **PWA**: Vite PWA Plugin
- **Linting**: ESLint with TypeScript support

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd multi-page-demo

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Environment Variables

Create a `.env` file in the root directory:

```env
VITE_API_URL=your-api-url
VITE_GOOGLE_MAPS_KEY=your-maps-key
```

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header.tsx      # Navigation header
│   ├── Footer.tsx      # Site footer
│   └── SEO.tsx         # SEO component
├── pages/              # Page components
│   ├── Home.tsx        # Home page
│   ├── About.tsx       # About page
│   ├── Menu.tsx        # Menu page
│   ├── Reservations.tsx # Reservations page
│   └── Contact.tsx     # Contact page
├── assets/             # Static assets
├── App.tsx             # Main app component
├── main.tsx            # App entry point
└── index.css           # Global styles
```

## 🎨 Design System

### Color Palette
- **Primary**: Black (#000000)
- **Accent**: Yellow (#facc15)
- **Secondary**: Gray (#6b7280)
- **Background**: White (#ffffff)

### Typography
- **Headings**: Font-light, tracking-wide
- **Body**: Font-light, leading-relaxed
- **Buttons**: Font-bold, tracking-wider, uppercase

### Components
- **Buttons**: Rounded corners, hover effects, transitions
- **Cards**: Border styling, backdrop blur effects
- **Modals**: Black background with yellow accents

## 🔧 Configuration

### Tailwind CSS
Custom configuration in `tailwind.config.js`:
- Extended color palette
- Custom spacing and typography
- Animation utilities

### TypeScript
Strict type checking enabled:
- `tsconfig.app.json` for application code
- `tsconfig.node.json` for build tools

### ESLint
TypeScript-aware linting rules:
- React-specific linting
- Accessibility checks
- Code quality standards

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px
- **Large Desktop**: > 1280px

## 🌐 PWA Features

- Service worker for offline functionality
- Web app manifest for installation
- Responsive icons and splash screens
- Cache strategies for optimal performance

## 📊 Performance

- **Bundle Size**: Optimized with code splitting
- **Loading**: Lazy loading for images and components
- **Runtime**: Fast refresh with HMR
- **SEO**: Meta tags and structured data

## 🔍 SEO Optimization

- Dynamic meta tags per page
- Open Graph and Twitter cards
- Structured data markup
- Semantic HTML5 structure
- Alt tags for images
- Proper heading hierarchy

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📞 Support

For questions or support, please contact:
- Email: hello@flavorhaven.com
- Phone: +1 (555) 123-4567
- Location: 123 Food Street, SF 94105

---

*Built with ❤️ for Flavor Haven Restaurant*
