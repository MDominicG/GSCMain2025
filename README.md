# GSC Auto - Modern Nuxt.js Website

Professional website for GSC Auto, an auto repair shop and damage assessment center in Bucharest, Romania.

## Features

- 🚀 Built with Nuxt 3
- 🎨 Styled with Tailwind CSS
- 📱 Fully responsive design
- 🔍 SEO optimized with @nuxtjs/seo
- 🎯 Structured data (Schema.org)
- 📄 Multiple pages: Services, Insurance Partners, Contact, About
- 📝 Contact and appointment forms
- 🗺️ Google Maps integration

## Project Structure

```
├── assets/
│   └── css/
│       └── main.css          # Global styles & Tailwind
├── components/
│   ├── AppHeader.vue          # Main navigation
│   ├── AppFooter.vue          # Footer with links
│   └── InsurancePage.vue      # Reusable insurance page component
├── layouts/
│   └── default.vue            # Default layout
├── pages/
│   ├── index.vue              # Homepage
│   ├── servicii/
│   │   ├── index.vue          # Services overview
│   │   ├── mecanica.vue       # Mechanics service
│   │   ├── tinichigerie.vue   # Bodywork service
│   │   └── vopsitorie.vue     # Paint service
│   ├── daune-auto/
│   │   ├── index.vue          # Insurance overview
│   │   ├── grawe.vue          # Grawe insurance
│   │   ├── omniasig.vue       # Omniasig insurance
│   │   ├── allianz.vue        # Allianz insurance
│   │   ├── asirom.vue         # Asirom insurance
│   │   ├── generali.vue       # Generali insurance
│   │   ├── groupama.vue       # Groupama insurance
│   │   └── axeria.vue         # Axeria insurance
│   ├── contact.vue            # Contact page
│   ├── programare.vue         # Appointment booking
│   ├── despre.vue             # About us
│   ├── politica-confidentialitate.vue
│   ├── termeni-conditii.vue
│   └── cookies.vue
├── public/
│   └── robots.txt             # SEO robots file
├── nuxt.config.ts             # Nuxt configuration
├── tailwind.config.js         # Tailwind configuration
└── package.json

```

## Installation

```bash
# Install dependencies
npm install

# Development server (http://localhost:3000)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Generate static site
npm run generate
```

## SEO Features

- Meta tags optimized for search engines
- Schema.org structured data for LocalBusiness
- Sitemap generation
- Robots.txt configuration
- Open Graph tags for social media
- Semantic HTML structure
- Optimized keywords for auto repair industry

## Key Pages

### Homepage
- Hero section with CTAs
- Services overview
- Insurance partners showcase
- Why choose us section
- Contact information

### Services
- Mecanică Auto (Auto Mechanics)
- Tinichigerie Auto (Auto Bodywork)
- Vopsitorie Auto (Auto Painting)

### Insurance Partners
Individual pages for all major Romanian insurance companies:
- Grawe, Omniasig, Allianz-Țiriac, Asirom, Generali, Groupama, Axeria

### Contact & Booking
- Contact form
- Online appointment booking
- Google Maps integration
- Multiple contact methods

## Contact Information

**General Services Company 97 SRL**
- Address: Strada Ritmului, nr. 8, Sector 2, București
- Phone (Damage): 0767 517 505
- Phone (Service): 0799 777 357
- Email: office@gsc-auto.ro
- Hours: Mon-Fri 10:00-18:30

## Technologies

- **Nuxt 3** - Vue.js framework
- **Tailwind CSS** - Utility-first CSS
- **@nuxtjs/seo** - SEO module
- **@nuxt/icon** - Icon components
- **TypeScript** - Type safety

## License

© 2024 General Services Company. All rights reserved.
