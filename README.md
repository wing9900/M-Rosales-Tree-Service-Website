# M Rosales Tree Service Website

Professional tree service company website built with React, TypeScript, and Vite.

## Getting Started

**Development**

Run the development server:

```bash
npm run dev
```

The website will be available at http://localhost:9080

For mobile testing over a public link:

```bash
npm run dev:tunnel
```

**Build for Production**

```bash
npm run build
```

Production deploys to Cloudflare via GitHub Actions on pushes to `main`.

**Sitemap for search engines:** Set a GitHub Actions repository variable `SITE_URL` to your live site URL (e.g. `https://yourdomain.com`, no trailing slash). The build generates `sitemap.xml` and updates `robots.txt` when this is set. Without it, `/sitemap` still works for visitors; XML sitemap is skipped.

```bash
# Local production build with sitemap (optional)
VITE_SITE_URL=https://yourdomain.com npm run build
```

## Tech Stack

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## Features

- Professional tree service company website
- Responsive design
- Service pages for different tree services
- Gallery of completed work
- Contact forms and lead generation
- SEO optimized
