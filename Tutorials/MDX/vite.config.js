import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const mdx = await import("@mdx-js/rollup");

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), mdx.default()],
});
