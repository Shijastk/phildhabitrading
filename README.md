# Phildhabi General Trading

Professional B2B corporate website for **Phildhabi General Trading**, focused on cosmetics, personal care, food and FMCG wholesale supply in Dubai and Abu Dhabi.

## Architecture

The site is built with **Next.js App Router + TypeScript** and split into reusable micro-components so sections can be maintained independently.

- `app/` — page composition, layout and global visual system
- `components/layout/` — header and footer
- `components/sections/` — independent home-page sections
- `components/ui/` — reusable UI primitives
- `data/site.ts` — shared company, navigation, product and process data

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

The project uses `output: 'export'` for static hosting. The GitHub Actions workflow builds the app and deploys the `out/` directory to GitHub Pages.
