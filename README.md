# Keyu UI

Open-source component library for the **Circuit** direction of the Keyu design system.
Forty-nine shadcn/ui primitives, re-skinned in black and gold, bilingual-first (EN / AR / KU).

> **Live docs:** https://keyu-tech.github.io/keyu-ui/
> **Design system:** https://keyu-tech.github.io/keyu-ui/design-system.html
> **Landing:** https://keyu-tech.github.io/keyu-ui/landing.html

---

## Quick start

```bash
pnpm dlx shadcn@latest init -t https://keyu-tech.github.io/keyu-ui/keyu-ui/registry.json
pnpm dlx shadcn@latest add button input dialog
```

Or import the CSS layer directly:

```html
<link rel="stylesheet" href="https://keyu-tech.github.io/keyu-ui/tokens.css" />
<link rel="stylesheet" href="https://keyu-tech.github.io/keyu-ui/shadcn.css" />
```

## What's in this repo

| Path | Purpose |
|---|---|
| `Keyu UI Docs.html` | Developer documentation site (deployed to `/`) |
| `Keyu Design System.html` | Full design system reference (deployed to `/design-system.html`) |
| `Keyu Landing.html` | Production landing page reference |
| `tokens.css` | Single source of truth — primitive + semantic tokens |
| `shadcn.css` | The Circuit skin layer for shadcn/ui primitives |
| `keyu-ui/` | JSX component sources (Button, Input, Badge, …) |
| `assets/` | Icons, fonts, brand marks |
| `.github/workflows/pages.yml` | Auto-deploys to GitHub Pages on push to `main` |

## Deployment

This repo deploys to GitHub Pages automatically on every push to `main` via
`.github/workflows/pages.yml`. After first push:

1. **Settings → Pages → Build and deployment → Source:** *GitHub Actions*
2. Re-run the workflow (or push again).
3. Site goes live at `https://keyu-tech.github.io/keyu-ui/`.

## License

MIT © Keyu.tech, 2026.
