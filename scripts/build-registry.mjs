#!/usr/bin/env node
// Reads registry.json (the index) and emits one r/<name>.json per item with
// the file contents inlined, which is the format the shadcn CLI fetches.

import { readFile, writeFile, mkdir } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const indexPath = join(root, "registry.json");
const outDir = join(root, "r");

const index = JSON.parse(await readFile(indexPath, "utf8"));
await mkdir(outDir, { recursive: true });

for (const item of index.items) {
  const files = await Promise.all(
    item.files.map(async (f) => ({
      path: f.path,
      type: f.type,
      target: f.target,
      content: await readFile(join(root, f.path), "utf8"),
    })),
  );
  const entry = { ...item, files };
  await writeFile(join(outDir, `${item.name}.json`), JSON.stringify(entry, null, 2) + "\n");
  process.stdout.write(`wrote r/${item.name}.json\n`);
}
