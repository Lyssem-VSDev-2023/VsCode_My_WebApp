# React SideBar Example

- [Video Source](https://www.youtube.com/watch?v=X9hnBtYQx0A)

- [React Icons search](https://react-icons.github.io/react-icons)

- to access the bootstrap-icons library, consider the update on the **`vite.config.js`**

```js
import { defineConfig, searchForWorkspaceRoot } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    fs: {
      allow: [
        searchForWorkspaceRoot(process.cwd()),
        "../../../node_modules/bootstrap-icons/font/fonts/bootstrap-icons.woff",
        "../../../node_modules/bootstrap-icons/font/fonts/bootstrap-icons.woff2",
      ],
    },
  },
});
```
