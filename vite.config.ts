import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
	plugins: [
		react({
			jsxImportSource: "@emotion/react",
		}),
	],
	// github pages 用。index.htmlのアセットのパスに "./" がないと表示されないので。
	base: process.env.GITHUB_PAGES ? "reactailwind" : "./",
	build: {
		outDir: "docs",
	},
});
