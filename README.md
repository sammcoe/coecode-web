# Coe Code - Application Studio

A clean, minimal portfolio website built with vanilla HTML, CSS, and JavaScript. This is an exact replica of coecode.io created without any frameworks or build tools.

## Features

- 🌑 Dark theme design
- 📱 Fully responsive layout
- ✨ Smooth animations and transitions
- 🎨 Clean, minimal aesthetic
- 🚀 Fast loading with no dependencies
- 📄 Static HTML files for easy deployment

## Pages

- **Homepage** (`index.html`) - Main landing page with hero section and project showcase
- **Projects** (`projects.html`) - Featured projects gallery
- **Connect** (`connect.html`) - Contact page with call-to-action buttons
- **Linc Detail** (`linc.html`) - Detailed project page for the Linc app

## Structure

```
/
├── index.html          # Homepage
├── projects.html       # Projects page
├── connect.html        # Connect page
├── linc.html          # Linc project detail page
├── css/
│   └── styles.css     # Main stylesheet
├── js/
│   └── main.js        # JavaScript interactions
├── images/            # All images and assets
├── _redirects         # Deployment redirects
└── README.md
```

## Development

To run locally, simply open `index.html` in your browser or use a simple HTTP server:

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (if you have it installed)
npx serve .

# Using PHP
php -S localhost:8000
```

## Deployment

This site can be deployed to any static hosting service:

- **Netlify**: Drag and drop the entire folder
- **Vercel**: Deploy from GitHub
- **GitHub Pages**: Push to a repository and enable Pages
- **Any web server**: Upload files via FTP/SFTP

The `_redirects` file is configured for Netlify deployment.

## Images

All images are sourced from the original coecode.io Framer CDN and are used for replication purposes.

## License

Created for educational/replication purposes.
