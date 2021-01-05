# Storybox

> Storybook-Tailwind distribution for Styleguide projects

*If you're just to lazy to read the README  😏👉 `npx frontend-storybox*

Currently **provides**:
- [🌊 Tailwind](https://tailwindcss.com/)
- [🔺 PostCSS](https://postcss.org/)
- [📚 Storybook](https://storybook.js.org/)
- [⚛️ React](https://react.com/) as a template engine
- [🟦 TypeScript](https://www.typescriptlang.org/)

## 🎉 New Styleguide

First you need to kick off the generator:

```bash
$ mkdir new-styleguide && cd new-styleguide
$ npx frontend-storybox
```

If you want a good ESLint/Prettier/Cypress/Jest config, you can use the [Antistatique Frontend Development Configuration](https://github.com/antistatique/frontend-development-configuration) as so:

```bash
$ npx antistatique-frontend # Uncheck storybook, obviously
$ git checkout tsconfig.json
```

## 📦 Deliver Styleguide

To deliver your styleguide, simply hit the following command:

```bash
$ yarn build
```

In `./build`, it will output you a `styles.css` with your custom CSS and the *purged Tailwind utilities.

It will also take all the modules available in `./src/modules/` and create independent bundles (without React and ReactDOM) that can be used as widgets. Check the `./src/modules/button.tsx` example.

*⚠️ Always use complete utility name (even in variables), otherwise the purge will skip your “composed” classNames.

## 🚀 Deploy Styleguide

You can easily (and freely) deploy your styleguide on Netlify. Choose the following options:
- Build command: `yarn build:styleguide`
- Publish directory: `storybook-static/`
