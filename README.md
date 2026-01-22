# Lumina - Creative Digital Studio

A beautiful, modern static website built with React and Vite.

## Features

- ⚡ **Vite** - Lightning fast build tool
- ⚛️ **React 18** - Modern React with hooks
- 🧭 **React Router** - Client-side routing
- 🎨 **Custom CSS** - No frameworks, pure CSS with CSS variables
- 📱 **Responsive** - Mobile-first design
- ✨ **Animations** - Smooth transitions and hover effects

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

The build output will be in the `dist` folder, ready for deployment.

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
│   │   ├── Work.jsx
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

## Deployment

The built site can be deployed to any static hosting service:

- **Vercel**: `vercel`
- **Netlify**: `netlify deploy`
- **GitHub Pages**: Push the `dist` folder
- **AWS S3**: Upload `dist` contents

## Customization

### Colors

Edit the CSS variables in `src/styles/index.css`:

```css
:root {
  --color-primary: #FF6B35;
  --color-accent: #F7C59F;
  /* ... */
}
```

### Fonts

The site uses Google Fonts (Outfit + Playfair Display). To change fonts, update the `<link>` tags in `index.html` and the `--font-*` variables in CSS.

## License

MIT
