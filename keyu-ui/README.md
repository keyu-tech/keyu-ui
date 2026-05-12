# @keyu-tech/keyu-ui

React components for the **Circuit** direction of the Keyu design system — re-skinned shadcn/ui primitives in black and gold, bilingual-first (EN / AR / KU).

> Black, gold, and the room in between. Sharp 2–4px corners, hairline rules, monospace numerics.

- **Docs:** https://keyu-tech.github.io/keyu-ui/
- **Design system reference:** https://keyu-tech.github.io/keyu-ui/design-system.html
- **Source:** https://github.com/keyu-tech/keyu-ui

## Install

```bash
pnpm add @keyu-tech/keyu-ui
# or: npm install @keyu-tech/keyu-ui
# or: yarn add @keyu-tech/keyu-ui
```

Import the CSS layers your app needs (typically once at the entry):

```ts
import "@keyu-tech/keyu-ui/tokens.css";   // required — design tokens
import "@keyu-tech/keyu-ui/base.css";     // optional — Circuit element defaults
import "@keyu-tech/keyu-ui/shadcn.css";   // required — component styles
```

Tailwind is **not** required. Components are plain CSS classes driven by the token sheet.

## Use

```tsx
import {
  Button, Input, Textarea, Label, Badge,
  Card, CardMeta, CardTitle, CardDescription, CardFooter,
  Dialog, DialogTrigger, DialogContent, DialogTitle, DialogDescription,
  DialogHeader, DialogFooter, DialogClose,
  Popover, PopoverTrigger, PopoverContent,
  DropdownMenu, DropdownMenuTrigger, DropdownMenuContent,
  DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator,
  Tabs, TabsList, TabsTrigger, TabsContent,
  cn,
} from "@keyu-tech/keyu-ui";

export function Example() {
  return (
    <Card>
      <CardTitle>Start a project</CardTitle>
      <Button variant="primary">Send brief</Button>
    </Card>
  );
}
```

Overlay and menu components (Dialog, Popover, DropdownMenu, Tabs) wrap Radix UI primitives, so focus management, keyboard navigation, and ARIA are handled out of the box.

## Alternative: shadcn CLI

Prefer to vendor the `.tsx` sources into your own project? The repo also publishes a shadcn-compatible registry:

```bash
pnpm dlx shadcn@latest init -t "https://keyu-tech.github.io/keyu-ui/registry.json"
pnpm dlx shadcn@latest add button input dialog
```

You still need `tokens.css`, `base.css`, and `shadcn.css` — either install this package alongside for the CSS imports, or copy the sheets from the repo.

## Bilingual / RTL

`base.css` swaps the font stack to `--font-arabic` for `[lang="ar"]`, `[lang="ku"]`, and `[dir="rtl"]`. Component layouts respect the document direction; flip an ancestor to `dir="rtl"` and icons, borders, and flex order follow.

## What ships today

**Typed React wrappers**

- Form & display: `Button`, `Input`, `Textarea`, `Label`, `Badge`, `Card`
- Overlay (Radix-backed): `Dialog`, `Popover`, `DropdownMenu`, `Tabs`

The full 49-primitive shadcn surface is themed in `shadcn.css` already; the remaining wrappers (Accordion, AlertDialog, Avatar, Calendar, Checkbox, Combobox, Command, Select, Sheet, Tooltip, …) are in progress and follow the same pattern. Contributions welcome.

## Peer requirements

- React 18.3+ (React 19 supported)
- A bundler that handles ESM and `.css` imports (Vite, Next.js, Webpack 5, esbuild, Remix, Astro, …)

## License

MIT © Keyu.tech, 2026.
