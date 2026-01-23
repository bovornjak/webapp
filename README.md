# Twin Burger ทวินเบอร์เกอร์ - หมั่นโถวเบอร์เกอร์เจ้าแรก

A modern, bilingual (Thai/English) website for Twin Burger - a unique burger shop featuring Mom's original mantou recipe as burger buns.

🌐 **Live Site**: [twin-burger.pages.dev](https://twin-burger.pages.dev)

## Features

- ⚡ **Vite** - Lightning fast build tool
- ⚛️ **React 18** - Modern React with hooks
- 🧭 **React Router** - Client-side routing
- 🌍 **Bilingual** - Thai/English language support with toggle
- 🎨 **Custom CSS** - Elegant green & peach color scheme
- 📱 **Mobile Responsive** - Hamburger menu, touch-friendly
- ✨ **Animations** - Smooth transitions and hover effects
- 🎯 **SVG Icons** - Custom social media icons (LINE, Facebook, Instagram, TikTok)
- ☁️ **Cloudflare Pages** - Fast global deployment

## Services

- 📦 **Snack Box** - Break time snacks from ฿80/box
- 🍱 **Meal Box** - Boxed meals from ฿99/box
- 🎪 **Catering** - Off-site catering services
- 🎤 **Food Support** - Artist/film crew food support

## Pages

- **Home** - Hero with logo, services overview, why choose us
- **About** - Company story, stats, values
- **Menu** - Service packages and pricing
- **Contact** - Contact info, social links, service area

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
│   ├── favicon.svg
│   └── logo.png
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── Layout.jsx
│   │   └── SocialIcons.jsx
│   ├── context/
│   │   └── LanguageContext.jsx
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
  --color-bg: #1B4332;           /* Dark green background */
  --color-primary: #E8A598;      /* Peach/salmon accent */
  --color-accent: #C9E4CA;       /* Light green */
  --color-text: #FFFFFF;         /* White text */
  /* ... */
}
```

### Fonts

The site uses Google Fonts:
- **Playfair Display** - Elegant serif for headings
- **Kanit** - Thai-friendly sans-serif for body text

### Languages

Translations are managed in `src/context/LanguageContext.jsx`. Add or modify translations in the `translations` object.

## Contact

- 📞 094-466-6498
- 💬 LINE: [@twinburger](https://lin.ee/RtGeSs9)
- 📘 Facebook: [twinburger.bkk](https://facebook.com/twinburger.bkk)
- 📸 Instagram: [@twinburger.bkk](https://instagram.com/twinburger.bkk)
- 🎵 TikTok: [@twinburger.bkk](https://tiktok.com/@twinburger.bkk)

## License

MIT
