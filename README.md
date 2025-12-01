# React + TypeScript + Vite + Tailwind CSS v4

This project uses React 19, TypeScript, Vite 7, and **Tailwind CSS v4** with the NEXA font family.

## ✅ What's Configured

- **React 19.2.0** with TypeScript
- **Vite 7.2.4** for fast dev server and building
- **Tailwind CSS v4.1.17** (latest version with new @import syntax)
- **PostCSS 8** and **Autoprefixer**
- **NEXA Font Family** configured and ready to use
- SWC for Fast Refresh

## 🚀 Getting Started

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

The app will be available at `http://localhost:5173` (or another port if 5173 is in use).

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 🎨 Tailwind CSS v4 Setup

This project uses **Tailwind CSS v4**, which has a different setup from v3:

- **No `tailwind.config.js` needed** - Configuration is done in CSS using `@theme`
- **Import syntax**: Uses `@import "tailwindcss"` instead of `@tailwind` directives
- **Just-in-Time by default**: Utilities are generated on-demand

### How It Works

In `src/index.css`:

```css
@import "tailwindcss";

@theme {
  --font-sans: "Nexa", ui-sans-serif, system-ui, ...;
}

@utility font-nexa {
  font-family: "Nexa", ...;
}
```

All Tailwind utility classes work out of the box:

- Layout: `flex`, `grid`, `min-h-screen`, etc.
- Spacing: `p-4`, `mx-auto`, `mb-6`, etc.
- Colors: `bg-gray-50`, `text-gray-900`, `bg-blue-600`, etc.
- Typography: `text-4xl`, `font-bold`, `text-center`, etc.
- Dark mode: `dark:bg-gray-900`, `dark:text-gray-100`, etc.

## 🔤 NEXA Font Setup

The project is configured to use the NEXA font family. To enable it:

1. **Add font files** to `public/fonts/`:
   - `Nexa-Regular.woff2` (regular weight, 400)
   - `Nexa-Bold.woff2` (bold weight, 700)

2. **The font is already configured** in `src/index.css` with `@font-face` declarations

3. **Use the font** with the `font-nexa` utility class or it's set as default via `--font-sans`

### Example Usage

```tsx
<div className="font-nexa text-4xl">This uses NEXA font</div>
```

## ✅ Verification

To verify everything is working:

1. **Start dev server**: `npm run dev`
2. **Open** `http://localhost:5174` in your browser
3. **Check**: You should see a centered page with:
   - Tailwind styles applied (flex layout, colors, spacing)
   - Responsive typography
   - Dark mode support
4. **Inspect element** in browser DevTools:
   - CSS utilities should be applied
   - Font family should show "Nexa" (or fallback if font files not added)

## 📦 Project Structure

```
TXA-26/
├── src/
│   ├── App.tsx          # Main App component (uses Tailwind classes)
│   ├── main.tsx         # Entry point
│   └── index.css        # Tailwind imports + NEXA font + custom styles
├── public/
│   └── fonts/           # 👈 Add your NEXA font files here
├── package.json
├── vite.config.ts
├── tsconfig.json
└── README.md
```

## 🛠️ Tailwind CSS v4 Migration Notes

If you're familiar with Tailwind v3, here are the key differences:

| Tailwind v3                  | Tailwind v4                 |
| ---------------------------- | --------------------------- |
| `tailwind.config.js`         | `@theme` in CSS             |
| `@tailwind base;`            | `@import "tailwindcss";`    |
| `@tailwind components;`      | _(automatic)_               |
| `@tailwind utilities;`       | _(automatic)_               |
| `postcss.config.js` required | Still used for autoprefixer |

## 🐛 Troubleshooting

### Styles not applying?

1. **Check dev server is running**: `npm run dev`
2. **Hard refresh** your browser: `Ctrl+Shift+R` (Windows/Linux) or `Cmd+Shift+R` (Mac)
3. **Clear dist folder**: `rm -rf dist && npm run build`
4. **Reinstall dependencies**: `rm -rf node_modules && npm install`

### Font not showing?

1. **Verify font files** are in `public/fonts/`
2. **Check file names** match `index.css` (`Nexa-Regular.woff2`, `Nexa-Bold.woff2`)
3. **Try system fonts first** to verify Tailwind is working

## 📚 Resources

- [Tailwind CSS v4 Docs](https://tailwindcss.com/docs)
- [Vite Documentation](https://vite.dev/)
- [React Documentation](https://react.dev/)

---

**Need help?** Check the console for errors or inspect elements in DevTools to see which styles are applied.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is currently not compatible with SWC. See [this issue](https://github.com/vitejs/vite-plugin-react/issues/428) for tracking the progress.

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";

export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs["recommended-typescript"],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```
