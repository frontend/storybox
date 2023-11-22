# 📚 Storybox

> Storybook-Tailwind distribution for Styleguide projects

*If you're just too lazy to read the README  😏👉 `npx frontend-storybox@latest`*

Currently **provides**:
- [🌊 Tailwind](https://tailwindcss.com/)
- [🔺 PostCSS](https://postcss.org/)
- [📚 Storybook](https://storybook.js.org/)
- [⚛️ React](https://react.com/) as a template engine
- [🟦 TypeScript](https://www.typescriptlang.org/)

### [👉  Live Demo](https://frontend-storybox.netlify.app)

### [🔢  Want to upgrade your current project?](./MIGRATION_GUIDE.md)

## 🎉 New Styleguide

First you need to **kick off the generator**:

```bash
$ mkdir new-styleguide && cd new-styleguide
$ npx frontend-storybox@latest
```

If you want a good ESLint/Prettier/Cypress/Jest config, you can use the [Antistatique Frontend Development Configuration](https://github.com/antistatique/frontend-development-configuration) as so:

⚠️ Make sure everything has been added/commited before doing this

```bash
$ npx antistatique-frontend@latest # Uncheck storybook and check stylelint, obviously
$ git checkout tsconfig.json
```

## 🔧 Installation

You need to have the following tools installed globally on your environment:

- [📗 NodeJS >= 16](https://nodejs.org/en/) - JavaScript runtime used to build and run the project
- [🥟 Bun >= 1.0.13](https://bun.sh/) - Dependency manager

To install the project:

```bash
bun install
```


## 🏁 Run the Project

Start the following commands **in parallel** (with nicer output):

```bash
$ npm run tailwind:start
$ npm run storybook:start
```

**OR** (with uglier output)

```bash
$ npm run start
```

And here are **all the available commands**:

- `npm run clean`: Purge build packages cache
- `npm run tailwind:build`: Build Production Tailwind project
- `npm run tailwind:start`: Start Tailwind development mode 
- `npm run storybook:start`: Start Storybook
- `npm run storybook:build`: Build Storybook static deliverable
- `npm run modules:start`: Build modules and watch for changes
- `npm run modules:build`: Build modules
- `npm run start`: Start all development processes
- `npm run build`: Build all deliverables
- `npm run build:assets`: Build all deliverables
- `npm run build:styleguide`: Build styleguide for deployment
- `npm run generate`: Generate new component (select `Blank` for ease)
- `npm run icons:build` : Build the icons sprite
- `npm run images:build` : Build the placeholders images using ImageMagick


## 📦 Deliver Styleguide

To deliver your styleguide, simply hit the following command:

```bash
$ npm run build
```

In `./public`, it will output you a `CSS` folder that includes a `styles.css` with your custom CSS and the *purged Tailwind utilities.

It will also take all the modules available in `./src/modules/` and create independent bundles (without React and ReactDOM) that can be used as widgets. Check the `./src/modules/test-module.tsx` example.

**⚠️ Always use complete utility name (even in variables), otherwise the purge will skip your “composed” classNames.*

## 🚀 Deploy Styleguide

You can easily (and freely) **deploy your styleguide on Netlify**.

Choose the following **options**:
- Build command: `npm run build:styleguide`
- Publish directory: `storybook-static/`
