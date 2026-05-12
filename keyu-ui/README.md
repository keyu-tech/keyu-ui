# @keyu/ui

The Keyu component library — shadcn/ui primitives, re-themed in the Circuit direction.

> Black, gold, and the room in between. Sharp 2–4px corners, hairline rules, monospace numerics. Bilingual-first (EN / AR / KU).

## Installation

```bash
pnpm dlx shadcn@latest init -t https://keyu.tech/registry/circuit.json
pnpm dlx shadcn@latest add button input dialog
```

Or copy components directly out of `keyu-ui/` into your project's `components/ui/` folder.

## Requirements

- React 18.3+
- Tailwind CSS 3.4+ (or 4.0)
- `tokens.css` — the Circuit token sheet (single source of truth)
- `shadcn.css` — the themed primitives (drop-in skin layer)

## Exports

```ts
import {
  Button, Badge, Card, Input, Label, Textarea,
  Select, Combobox, Checkbox, RadioGroup, Switch, Slider, InputOTP,
  Accordion, Collapsible,
  Dialog, AlertDialog, Sheet, Drawer, Popover, Tooltip, HoverCard,
  DropdownMenu, ContextMenu, Menubar, NavigationMenu, Command,
  Tabs, Breadcrumb, Pagination,
  Alert, Toast, Sonner, Progress, Skeleton,
  Avatar, Table, DataTable, Chart, Carousel,
  AspectRatio, ScrollArea, Resizable, Separator,
  Toggle, ToggleGroup,
} from "@keyu/ui";
```

## License

MIT © Keyu.tech, 2026.
