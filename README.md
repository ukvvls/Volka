# VOLKA — Global Financial Intelligence

A responsive bilingual (English / Arabic) financial markets dashboard built with React and Vite.

## Included
- Dark glass-inspired responsive interface
- Arabic RTL / English LTR language switch
- Dashboard, market categories, company directory, and news views
- Search and market category filters
- Demo notifications panel
- GitHub Actions workflow for GitHub Pages deployment

## Important data notice
All displayed prices, changes, company quotes, and headlines are illustrative demo content. They are not live market data, financial recommendations, or suitable for trading decisions.

## Run locally
Requires Node.js 20 or newer.

```bash
npm install
npm run dev
```

## Build
```bash
npm run build
npm run preview
```

## Publish on GitHub Pages
1. Create a **public** repository named `volka`.
2. Upload all project files and folders to the repository root.
3. Open **Settings → Pages**.
4. Under **Build and deployment**, select **GitHub Actions** as the source.
5. Open the **Actions** tab and wait for `Deploy VOLKA to GitHub Pages` to finish.
6. Your preview URL will be `https://YOUR-GITHUB-USERNAME.github.io/volka/`.

If the repository name is different from `volka`, change `base: '/volka/'` in `vite.config.js` to match it.

## Next development phase
Replace demo content only after selecting market-data providers whose API terms explicitly allow the intended public display and redistribution. Keep private API keys on a backend; never commit secrets to this public repository.
