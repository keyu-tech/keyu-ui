# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repo is

Two things in one place:

1. **An npm-publishable React library** (`@keyu-tech/keyu-ui`) built with TypeScript + tsup → `dist/` (ESM + CJS + `.d.ts`). Source under [keyu-ui/](keyu-ui/).
2. **A shadcn-compatible component registry** ([registry.json](registry.json) + per-component entries under `r/`), served from GitHub Pages alongside the documentation HTML, so consumers can copy individual `.tsx` files into their own projects via `pnpm dlx shadcn@latest add …`.

Both flows ship the same component source.

## Commands

```bash
pnpm install
pnpm typecheck   # tsc --noEmit
pnpm build       # tsup → dist/ (ESM + CJS + .d.ts)
pnpm registry    # rebuild r/<name>.json entries from registry.json
pnpm format      # prettier --write .
```

Local docs preview (no build needed for the HTML artefacts):

```bash
python3 -m http.server 8000   # then visit http://localhost:8000/
```

Deployment is automatic via [.github/workflows/pages.yml](.github/workflows/pages.yml) on push to `main`. The workflow runs typecheck → build → registry, then assembles `_site/` by copying `index.html` (the library docs — the Pages entry point), `design-system.html`, `tokens.css`, `base.css`, `shadcn.css`, `registry.json`, `r/`, `dist/`, `assets/`, and `keyu-ui/`. If you rename a top-level artefact or add a new directory that needs to ship, update this workflow.

[.github/workflows/npm-publish.yml](.github/workflows/npm-publish.yml) auto-publishes `@keyu-tech/keyu-ui` to npm on every push to `main`, but only when the `package.json` version has been bumped to one that isn't already on the registry. Release flow: PR bumps `version`, merge, the workflow publishes. Requires an `NPM_TOKEN` repository secret with publish rights to the `@keyu-tech` scope.

## Architecture — how the layers compose

The library is intentionally four thin layers; understanding the boundary between them is the main thing a new contributor needs.

**1. [tokens.css](tokens.css) — design tokens, no document side-effects.** Two tiers of CSS custom properties:
- *Primitives* (`--ink-*`, `--gold-*`, `--sp-*`, `--r-*`, `--t-*`, …) — raw scales.
- *Semantic Circuit tokens* (`--bg-canvas`, `--fg-primary`, `--accent`, `--line`, `--radius-card`, …) — what components actually consume.

Components must reference semantic tokens, not primitives or hard-coded values. The `:root` block is where the Circuit direction is wired up — changing accent colour, density, or radii repo-wide is done here, not in component CSS.

**2. [base.css](base.css) — element resets and defaults.** Pulled out of `tokens.css` so importing the token sheet alone doesn't apply global styles. Consumers opt in by importing `base.css` after `tokens.css`.

**3. [shadcn.css](shadcn.css) — the Circuit skin layer.** Class-driven CSS for every shadcn/ui primitive (`.btn`, `.input`, `.badge`, `.card`, `.sc-pop`, `.sc-item`, `.sc-tabs-list`, …). Components do not require Tailwind; everything is plain CSS reading from the token sheet. New components belong here as additional class rules. Radix-backed components (Dialog, Popover, DropdownMenu, Tabs) hook their open/close animations to `[data-state="open"|"closed"]` selectors that Radix emits automatically.

**4. [keyu-ui/](keyu-ui/) — typed React wrappers.** `.tsx` files with `forwardRef`, typed variants, and `cn()` for className composition (see [keyu-ui/lib/cn.ts](keyu-ui/lib/cn.ts)). Two kinds:
- **Pure className wrappers** (Button, Input, Textarea, Label, Badge, Card) — emit the classes that `shadcn.css` styles. Button uses `@radix-ui/react-slot` for `asChild`.
- **Radix-backed compound components** (Dialog, Popover, DropdownMenu, Tabs) — re-export Radix primitives with default classNames pre-applied.

Pattern for a new component:

```tsx
import * as React from "react";
import { cn } from "./lib/cn";

export interface FooProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "a" | "b";
}

export const Foo = React.forwardRef<HTMLDivElement, FooProps>(function Foo(
  { variant = "a", className, ...props },
  ref,
) {
  return <div ref={ref} className={cn("foo", `foo-${variant}`, className)} {...props} />;
});
```

If the component is interactive (dialog, menu, listbox, popover, combobox, accordion, tooltip, …), reach for the corresponding Radix primitive instead of rolling keyboard/ARIA by hand — that's the whole reason this is path B.

After adding a component:
1. Export it from [keyu-ui/index.ts](keyu-ui/index.ts).
2. Add a corresponding `items` entry to [registry.json](registry.json).
3. Run `pnpm registry` to regenerate `r/<name>.json`.

## Conventions worth knowing

- **Direction = "Circuit".** Visual rules: black backgrounds, gold accent (`--gold-bright` / `--accent`), sharp 2–4px corners (`--r-1`, `--r-2`), hairline rules (`--bw-hair`, `--line`), monospace numerics on numeric inputs and data. Don't add rounded-pill or soft-shadow styling unless explicitly asked — those belong to a different direction.
- **Bilingual-first.** Locales are EN / AR / KU. `base.css` swaps to `--font-arabic` for `[lang="ar"]`, `[lang="ku"]`, and `[dir="rtl"]`. Any new component that contains its own text must respect RTL and not assume LTR icon/text order.
- **`<html data-direction="circuit">`** is the top-level switch. If a sibling direction (e.g. "Paper") is ever introduced, it would key off this attribute.
- **HTML artefacts are self-contained.** The docs HTML files inline their styles and are intended to work offline. They're docs/snapshots, not the source of truth — when CSS rules diverge, `shadcn.css` wins and the HTML eventually gets updated to match.
- **`uploads/` is gitignored** and used as scratch space; don't reference anything inside it from committed code.

## Other notes

- The workflow uses GNU `sed -i` syntax (Ubuntu CI). It does not run on macOS without modification; reproduce locally with `gsed` or by running the same `cp` commands manually.
- [tools/tweaks-panel.jsx](tools/tweaks-panel.jsx) is a standalone React shell for in-page prototype tweaking. It implements a `postMessage` host protocol (`__activate_edit_mode` / `__edit_mode_set_keys` / …) so prototypes hosted in an external preview can expose editable values. It is not part of `@keyu-tech/keyu-ui` and not exported from the package.
- The [keyu-ui/README.md](keyu-ui/README.md) lists what actually ships. The full shadcn surface (49 primitives) is themed in `shadcn.css` but only the foundation slice has React wrappers yet — Accordion, AlertDialog, Avatar, Calendar, Carousel, Checkbox, Collapsible, Combobox, Command, ContextMenu, Drawer, Form, HoverCard, InputOTP, Menubar, NavigationMenu, Pagination, Progress, RadioGroup, ScrollArea, Select, Separator, Sheet, Skeleton, Slider, Sonner, Switch, Table, Toast, Toggle, ToggleGroup, Tooltip are still TODO and follow the pattern above.
