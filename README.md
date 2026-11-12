# AI Learning Wiki

Built with [Astro Starlight](https://starlight.astro.build/).

## Write content

Articles live in `src/content/docs/<module>/<article>.md`. Each folder is a sidebar module (configured in `astro.config.mjs`).

## Run locally

```bash
npm install
npm run dev     # http://localhost:4321
```

## Publish to GitHub Pages

1. Create a public repository on GitHub (e.g. `ai-wiki`) and push this folder to its `main` branch.
2. In `astro.config.mjs`, set `site: 'https://<username>.github.io'` and `base: '/ai-wiki'`.
3. On GitHub: Settings → Pages → Source: **GitHub Actions**.
4. Every push to `main` rebuilds and deploys via `.github/workflows/deploy.yml`.
