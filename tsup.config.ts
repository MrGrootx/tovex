import { defineConfig } from "tsup";

export default defineConfig({
    entry: ["./src/index.ts","./src/types.ts"],
    format: ["esm", "cjs"],
    dts: true,
    shims: true,
    sourcemap: true,
    skipNodeModulesBundle: true,
    clean: true,
    minify: true,
})