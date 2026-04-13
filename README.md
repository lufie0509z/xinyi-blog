# Zoey (Xinyi) Zhang Personal Website

This repository contains a personal website and online resume built as a static single-page app with React, TypeScript, Vite, and Tailwind CSS. The site presents profile details, work experience, education, projects, hobbies, and downloadable CV assets.

## Stack

- React 19
- TypeScript
- Vite 6
- Tailwind CSS 4
- Motion
- Lucide React

## Getting Started

Requirements:

- Node.js 20+
- npm

Install dependencies:

```bash
npm install
```

Start the local development server:

```bash
npm run dev
```

The app is served at `http://localhost:3000`.

## Scripts

- `npm run dev` starts the Vite development server on port `3000`
- `npm run build` creates a production build in `dist/`
- `npm run preview` serves the production build locally
- `npm run lint` runs the TypeScript check with `tsc --noEmit`
- `npm run clean` removes the build output directory

## Project Layout

- `src/main.tsx` bootstraps the React app
- `src/App.tsx` contains the page layout and the hard-coded content arrays
- `src/index.css` defines global styles, theme tokens, and typography
- `assets/` stores the profile image and CV PDF
- `index.html` is the Vite HTML entry point
- `vite.config.ts` configures Vite, React, Tailwind, and the relative base path used for static hosting
- `.github/workflows/deploy.yml` builds and deploys the site to GitHub Pages

## Editing Content

Most site content currently lives in `src/App.tsx`.

- Update the intro text, experience, education, project entries, and contact links there
- Replace files in `assets/` if the profile image or CV changes
- Adjust the global look and feel in `src/index.css`

## Deployment

Pushes to the `main` branch trigger the GitHub Pages workflow. The workflow installs dependencies, runs `npm run build`, uploads `dist/`, and deploys the generated static site.

The Vite config uses `base: './'` so the built site can be served from a relative path during static hosting.

## Notes

- The current site is static and does not make runtime API calls
- No environment variables are required for the current portfolio implementation
- The repository still includes some legacy template residue such as `metadata.json`, `.env.example`, the `process.env.GEMINI_API_KEY` Vite define, and a few unused dependencies in `package.json`
