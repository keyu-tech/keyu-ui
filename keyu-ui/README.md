# @keyu-tech/keyu-ui

React components for the Circuit direction of the Keyu design system.

> Black, gold, and the room in between. Sharp 2–4px corners, hairline rules, monospace numerics. Bilingual-first (EN / AR / KU).

## Install

```bash
npm install @keyu-tech/keyu-ui
# or
yarn add @keyu-tech/keyu-ui
# or
pnpm add @keyu-tech/keyu-ui
```

Then import the CSS layers your app needs:

```ts
import "@keyu-tech/keyu-ui/tokens.css";   // required — design tokens
import "@keyu-tech/keyu-ui/base.css";     // optional — Circuit element defaults
import "@keyu-tech/keyu-ui/shadcn.css";   // required for any styled component
```

## Components

```ts
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
```

Overlay and menu components (Dialog, Popover, DropdownMenu, Tabs) are built on Radix UI, so they handle focus management, keyboard navigation, and ARIA out of the box.

## Peer requirements

- React 18.3+ (React 19 supported)
- A bundler that handles ESM and `.css` imports (Vite, Next.js, Webpack 5, esbuild, etc.)

## License

MIT © Keyu.tech, 2026.
