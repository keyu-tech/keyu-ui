import { defineConfig } from "tsup";
import { readFile, writeFile } from "node:fs/promises";

const USE_CLIENT = '"use client";\n';

export default defineConfig({
  entry: ["keyu-ui/index.ts"],
  outDir: "dist",
  format: ["esm", "cjs"],
  dts: true,
  sourcemap: true,
  clean: true,
  treeshake: true,
  target: "es2020",
  external: ["react", "react-dom"],
  async onSuccess() {
    // esbuild + rollup both strip top-level "use client" directives during
    // bundling. Re-add it so Next.js App Router consumers can import the
    // package without crossing a client boundary themselves.
    for (const file of ["dist/index.js", "dist/index.cjs"]) {
      const body = await readFile(file, "utf8");
      if (!body.startsWith('"use client"')) {
        await writeFile(file, USE_CLIENT + body);
      }
    }
  },
});
