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

## 🔧 Requirements

You need to have the following tools installed globally on your environment:

- [📗 NodeJS >= 16](https://nodejs.org/en/) - JavaScript runtime used to build and run the project
- [🐈 Yarn >= 1.22](https://yarnpkg.com/lang/en/) - Dependency manager built on top of the NPM registry

## 🏁 Run the Project

Start the following commands **in parallel** (with nicer output):

```bash
$ yarn tailwind:start
$ yarn storybook:start
```

**OR** (with uglier output)

```bash
$ yarn start
```

And here are **all the available commands**:

- `yarn clean`: Purge build packages cache
- `yarn tailwind:build`: Build Production Tailwind project
- `yarn tailwind:start`: Start Tailwind development mode 
- `yarn storybook:start`: Start Storybook
- `yarn storybook:build`: Build Storybook static deliverable
- `yarn modules:build`: Build React modules
- `yarn start`: Start all development processes
- `yarn build`: Build all deliverables
- `yarn build:assets`: Build all deliverables
- `yarn build:styleguide`: Build styleguide for deployment
- `yarn generate`: Generate new component (select `Blank` for ease)
- `yarn icons:build` : Build the icons sprite
- `yarn images:build` : Build the placeholders images using ImageMagick


## 📦 Deliver Styleguide

To deliver your styleguide, simply hit the following command:

```bash
$ yarn build
```

In `./public`, it will output you a `CSS` folder that includes a `styles.css` with your custom CSS and the *purged Tailwind utilities.

It will also take all the modules available in `./src/modules/` and create independent bundles (without React and ReactDOM) that can be used as widgets. Check the `./src/modules/test-module.tsx` example.

**⚠️ Always use complete utility name (even in variables), otherwise the purge will skip your “composed” classNames.*

## 🚀 Deploy Styleguide

You can easily (and freely) **deploy your styleguide on Netlify**.

Choose the following **options**:
- Build command: `yarn build:styleguide`
- Publish directory: `storybook-static/`
