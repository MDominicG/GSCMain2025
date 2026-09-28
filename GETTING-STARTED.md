# 🚗 GSC Auto Website - Quick Start Guide

## 📋 Prerequisites

Before you begin, make sure you have installed:
- **Node.js** (v18 or higher) - [Download here](https://nodejs.org/)
- **npm** or **pnpm** (comes with Node.js)

## 🚀 Installation Steps

### 1. Install Dependencies

Open your terminal in the project directory and run:

```bash
npm install
```

This will install all required packages (~5 minutes first time).

### 2. Start Development Server

```bash
npm run dev
```

The website will be available at: **http://localhost:3000**

### 3. Build for Production

When ready to deploy:

```bash
npm run build
```

### 4. Preview Production Build

```bash
npm run preview
```

## 📁 Project Overview

### Main Pages
- **Homepage** (`/`) - Main landing page with services and insurance partners
- **Services** (`/servicii`) - Auto repair services
  - Mechanics (`/servicii/mecanica`)
  - Bodywork (`/servicii/tinichigerie`)
  - Painting (`/servicii/vopsitorie`)
- **Insurance** (`/daune-auto`) - Damage assessment for all insurers
  - Individual pages for: Grawe, Omniasig, Allianz, Asirom, Generali, Groupama, Axeria
- **Contact** (`/contact`) - Contact form and map
- **Booking** (`/programare`) - Online appointment booking
- **About** (`/despre`) - Company information

### Key Features
✅ Modern, responsive design
✅ SEO optimized (meta tags, structured data, sitemap)
✅ Fast page loading
✅ Mobile-friendly
✅ Contact & booking forms
✅ Google Maps integration
✅ Professional color scheme
✅ Accessibility compliant

## 🎨 Customization

### Colors
Edit `tailwind.config.js` to change the color scheme:
- Primary color (blue): `primary-600`
- Secondary color (gray): `secondary-600`

### Contact Information
Update contact details in:
- `components/AppHeader.vue`
- `components/AppFooter.vue`
- `pages/contact.vue`

### SEO Settings
Edit `nuxt.config.ts` for:
- Site URL
- Site name
- Default description
- Meta tags

## 🔍 SEO Checklist

✅ Unique meta titles for each page
✅ Optimized meta descriptions
✅ Structured data (LocalBusiness schema)
✅ Sitemap.xml (auto-generated)
✅ Robots.txt configured
✅ Semantic HTML
✅ Alt tags for images
✅ Fast loading times
✅ Mobile responsive
✅ HTTPS ready

## 📱 Pages to Optimize for Google

**Priority Keywords:**
- service auto bucuresti
- daune auto bucuresti
- tinichigerie auto bucuresti
- vopsitorie auto bucuresti
- constatare daune auto
- reparatii auto sector 2

**Local SEO:**
- Google My Business listing
- Local citations
- Customer reviews
- Location pages

## 🛠️ Troubleshooting

### Port already in use?
Change port in `package.json`:
```json
"dev": "nuxt dev --port 3001"
```

### Dependencies error?
Delete `node_modules` and reinstall:
```bash
rm -rf node_modules
npm install
```

### Build fails?
Check Node.js version:
```bash
node --version
```
Should be v18 or higher.

## 📞 Support

For questions or issues:
- Email: office@gsc-auto.ro
- Phone: 0799 777 357

## 🚀 Deployment

### Option 1: Static Hosting (Recommended)
```bash
npm run generate
```
Upload the `.output/public` folder to your hosting.

### Option 2: Server Hosting
```bash
npm run build
```
Deploy the `.output` folder to a Node.js server.

### Recommended Hosts:
- Vercel (free, automatic)
- Netlify (free, automatic)
- Digital Ocean
- AWS

## 📈 Next Steps for SEO

1. **Submit to Google Search Console**
   - Verify ownership
   - Submit sitemap.xml
   - Monitor performance

2. **Create Google My Business**
   - Add business location
   - Add photos
   - Get reviews

3. **Build Backlinks**
   - Local directories
   - Industry directories
   - Social media profiles

4. **Content Marketing**
   - Blog about auto tips
   - Service guides
   - Customer testimonials

5. **Technical SEO**
   - Optimize images
   - Enable compression
   - Set up analytics

Good luck! 🎉
