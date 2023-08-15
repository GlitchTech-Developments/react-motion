/* eslint-disable @typescript-eslint/no-explicit-any */
import { defineConfig } from "tsup";

export default defineConfig((opts: any) => ({
	entryPoints: ["./src/index.ts", "./src/motion.tsx"],
	splitting: true,
	format: ["esm"],
	dts: true,
	clean: !opts.watch,
	sourcemap: false,
	minify: true,
	outDir: "dist",
}));
