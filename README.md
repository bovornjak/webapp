# Savory & Co. - Premium Catering Website

A beautiful, elegant catering business website built with React and Vite.

## Features

- ⚡ **Vite** - Lightning fast build tool
- ⚛️ **React 18** - Modern React with hooks
- 🧭 **React Router** - Client-side routing
- 🎨 **Custom CSS** - Elegant design with CSS variables
- 📱 **Responsive** - Mobile-first design
- ✨ **Animations** - Smooth transitions and hover effects
- ☁️ **Cloudflare Ready** - Wrangler CLI configured for deployment

## Pages

- **Home** - Hero, services, featured menu, testimonials
- **About** - Company story, team, values
- **Menu** - Catering packages and pricing
- **Contact** - Quote request form with event details

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The development server will start at `http://localhost:5173`

### Building for Production

```bash
# Build the static site
npm run build

# Preview the production build
npm run preview
```

### Deploy to Cloudflare Pages

```bash
# Login to Cloudflare (first time only)
npx wrangler login

# Deploy
npm run deploy
```

## Project Structure

```
webapp/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   └── Layout.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Menu.jsx
│   │   └── Contact.jsx
│   ├── styles/
│   │   └── index.css
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Customization

### Colors

Edit the CSS variables in `src/styles/index.css`:

```css
:root {
  --color-primary: #C9A962;      /* Gold accent */
  --color-warm: #A67C52;         /* Warm brown */
  --color-bg: #1A1612;           /* Dark background */
  /* ... */
}
```

### Fonts

The site uses Google Fonts:
- **Cormorant Garamond** - Elegant serif for headings
- **Montserrat** - Clean sans-serif for body text

## License

MIT
