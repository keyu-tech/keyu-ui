# Keyu UI

Component library for the **Circuit** direction of the Keyu design system — re-skinned shadcn/ui primitives in black and gold, bilingual-first (EN / AR / KU).

> **Live docs:** https://keyu-tech.github.io/keyu-ui/
> **Design system:** https://keyu-tech.github.io/keyu-ui/design-system.html

---

## Install

Two equally supported flows.

### As an npm package

```bash
npm install @keyu-tech/keyu-ui
# or
yarn add @keyu-tech/keyu-ui
# or
pnpm add @keyu-tech/keyu-ui
```

```tsx
import { Button, Dialog, DialogContent, DialogTitle } from "@keyu-tech/keyu-ui";
import "@keyu-tech/keyu-ui/tokens.css";
import "@keyu-tech/keyu-ui/base.css";   // optional — global resets
import "@keyu-tech/keyu-ui/shadcn.css"; // component styles
```

### Via the shadcn CLI

The repo publishes a shadcn-compatible registry. Init against it once, then add components individually:

```bash
pnpm dlx shadcn@latest init -t https://keyu-tech.github.io/keyu-ui/registry.json
pnpm dlx shadcn@latest add button input dialog
```

The CLI copies the `.tsx` source into your project's `components/ui/` directory and adds the relevant Radix packages to your `package.json`.

## What ships today

The library implements the foundation slice:

- **Form / display:** Button, Input, Textarea, Label, Badge, Card
- **Overlay / behaviour (Radix-backed):** Dialog, Popover, DropdownMenu, Tabs

The remaining shadcn primitives are themed in CSS already ([shadcn.css](shadcn.css) covers accordion, calendar, command, OTP, menubar, etc.) but don't yet have React wrappers. Adding them follows the established pattern; PRs welcome.

## What's in this repo

| Path | Purpose |
|---|---|
| [tokens.css](tokens.css) | Single source of truth — primitive + semantic tokens |
| [base.css](base.css) | Optional element resets layered on the token sheet |
| [shadcn.css](shadcn.css) | The Circuit skin — class-driven, theme-aware |
| [keyu-ui/](keyu-ui/) | React component sources (TypeScript) |
| [registry.json](registry.json) | shadcn registry index |
| [r/](r/) | Generated per-component registry entries (built by `pnpm registry`) |
| [ui-docs.html](ui-docs.html) | Developer documentation site (deployed to `/`) |
| [design-system.html](design-system.html) | Full design system reference (deployed to `/design-system.html`) |
| [tools/](tools/) | Prototyping helpers (e.g. `tweaks-panel.jsx`) — not part of `@keyu-tech/keyu-ui` |
| [.github/workflows/pages.yml](.github/workflows/pages.yml) | Auto-deploys to GitHub Pages on push to `main` |

## Develop

```bash
pnpm install
pnpm typecheck   # tsc --noEmit
pnpm build       # tsup → dist/ (ESM + CJS + .d.ts)
pnpm registry    # rebuild r/*.json from registry.json
pnpm format      # prettier --write .
```

## Deployment

Push to `main` triggers [.github/workflows/pages.yml](.github/workflows/pages.yml), which type-checks, builds, regenerates the registry, and publishes the docs + CSS + registry to GitHub Pages.

## License

MIT © Keyu.tech, 2026.
