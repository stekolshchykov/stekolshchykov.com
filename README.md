# 3D Cube Portfolio CV

3D cube portfolio with adaptive rendering:
- Desktop: Three.js cube with 6 faces
- Mobile: lightweight flat site (auto switch by viewport)

## Local run

```bash
npm i
npm run dev
# or ensure dev server stays on 4173 with logs
npm run dev:serve
# check if it is up
npm run dev:check
```

## Production build

```bash
npm run build
```

## GitHub Pages

This repo includes:
- `.github/workflows/deploy-pages.yml` for automatic deploy from `main`
- `public/CNAME` with `stekolshchykov.com`
- Vite `base` configured to work on GitHub Pages/custom domain

Manual Pages build:

```bash
npm run build:pages
```
# stekolshchykov.com
