# Migration Guide

## 2.0.0 → [2.1.0]
1. Upgrade all your dependencies `$ yarn upgrade-interactive --latest` (**🚨 do NOT upgrade Prettier to >=3.0.0**, the `prettier.format` method used in preview.tsx became async, and storybook doesn't support async functions inside `source.transform`)
2. Inside `.storybook/preview.tsx`, refactor `docs.transformSource` into `docs.source.transform`:
```js
    source: {
      transform: function(src, storyContext) {
        const component = createElement(storyContext.component, storyContext.initialArgs);
        return renderHtml(component);
      },
    },
```
3. In `Blank.mdx`, refactor the deprecated `<Canvas>` by the following:
```js
<Canvas of={Blank.Default} />
```

## 1.1.0 → 2.0.0
1. Upgrade all your dependencies `$ yarn upgrade-interactive --latest`
2. ```$ yarn remove webpack-cli @svgr/webpack``` 
3. ```$ yarn add clsx glob svg-sprite``` 
4. ```$ yarn add -D storybook @storybook/addon-interactions @storybook/manager-api @storybook/blocks @storybook/testing-library @storybook/react-vite rollup @rollup/plugin-commonjs @rollup/plugin-node-resolve @rollup/plugin-terser @vitejs/plugin-react```
5. In `./package.json`, replace the following scripts with their updated versions:
```json
    "tailwind:build": "export NODE_ENV=production && npx tailwindcss -i ./src/styles/base.css -o ./public/css/styles.css --minify",
    "tailwind:start": "npx tailwindcss -i ./src/styles/base.css -o ./public/css/styles.css --watch",
    "storybook:start": "storybook dev --no-open -p 6006",
    "storybook:build": "storybook build",
    "modules:build": "rollup --config",
    "build": "yarn build:assets",
    "build:styleguide": "yarn build:assets && yarn storybook:build",
```
6. Add the following script:
```json
    "build:assets": "yarn tailwind:build && yarn modules:build && npx @ffflorian/jszip-cli add public/ > public/tl-styleguide-assets.zip",
    "icons:build": "svg-sprite -s --symbol-inline --symbol-dest public --symbol-sprite icons.svg src/assets/icons/*.svg",
    "images:build": "npx zx bin/generate-image.mjs",
```
7. Replace the content of your `.storybook/preview.js` files with the following:
```js
import { createElement } from 'react';
import ReactDomServer from 'react-dom/server';
import prettierHtml from 'prettier/parser-html';
import prettier from 'prettier/standalone';

const renderHtml = function(component) {
   return prettier.format(ReactDomServer.renderToStaticMarkup(component).
           replace(/<script><\/script>/g, ''), {
      parser: 'html',
      plugins: [prettierHtml],
      htmlWhitespaceSensitivity: 'ignore',
   });
};

const preview = {
   parameters: {
      actions: {argTypesRegex: '^on[A-Z].*'},
      html: {
         prettier: {
            tabWidth: 2,
            useTabs: false,
         },
      },
      docs: {
        source: {
          transform: function(src, storyContext) {
            const component = createElement(storyContext.component, storyContext.initialArgs);
            return renderHtml(component);
          },
        },
      },
      controls: {
         matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
         },
      },
   },
};
export default preview;
```
8. Rename your `.storybook/main.js` to `.storybook/main.ts` and replace the content by the following:
```js
import type { StorybookConfig } from "@storybook/react-vite";
const config: StorybookConfig = {
  stories: [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-docs",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-links",
    "@storybook/theming",
    "@storybook/manager-api",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
    defaultName: "Documentation",
  },
};
export default config;

```
9. Remove `styles.css` from the content of your `.storybook/preview-head.html` and import theme directly into `.storybook/preview.tsx` like
````ts
import '../public/css/styles.css';
````

### Refactoring your components

Storybook v7 comes with some changes to the way it handles markdown. You need to refactor them with the following steps:

1. Refactor your `[component].stories.tsx` file in the style of [the Blank component](https://github.com/frontend/storybox/blob/main/src/components/atoms/Blank/Blank.stories.tsx) 
2. Add a `[component].mdx` file in the same level as the `.stories.tsx` file.
3. This file will serve as the documentation of the component, you can take a look at this file to get an example of how to document your component: [Blank.mdx](https://github.com/frontend/storybox/blob/main/src/components/atoms/Blank/Blank.mdx)

## 1.0.3 → 1.1.0
1. Add the new `"modules:start": "webpack --watch",` NPM script
2. Remove `postcss-nested` dependencies
3. Update your devDependencies
4. Udapte your `postcss.config.js` with something like
  ```js
  module.exports = {
    plugins: {
      'postcss-import': {},
      'tailwindcss/nesting': {},
      tailwindcss: {},
      autoprefixer: {},
    },
  };
  ```
5. In your colors documentation, use the Tailwind config like:
  ```tsx
  import resolveConfig from 'tailwindcss/resolveConfig';

  resolveConfig(tailwindConfig).theme.colors
  ```
6. Create a dedicated `tailwind.css` file to import first from `base.css` with
  ```
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
  ```
7. Update your `tailwind.config.js` with something like
  ```js
  module.exports = {
    important: true,
    content: ['./src/**/*.{jsx,tsx,html,twig}'],
    theme: {
      extend: {...},
    },
    plugins: [...],
  };
  ```
8. In your `tsconfig.json`, change `"isolatedModules": false,`

## 1.0.2 → 1.0.3

1. Upgrade all your dependencies `$ yarn upgrade-interactive --latest`
2. Remove `css-loader` (`$ yarn remove css-loader`)
3. Ensure Webpack 5 (`$ yarn add webpack --dev`)
4. In `webpack.congif.js`, add after line 17: `mode: 'production',`
5. Remove in `.storybook/preview.js`: `import '!style-loader!css-loader!./../build/styles.css';`
6. Add in `.storybook/preview-head.html`: `<link rel="stylesheet" href="/styles.css" />`
7. Update your NPM scripts to something like:
  ```diff
  -    "storybook:build": "NODE_PATH=src build-storybook",
  +    "storybook:build": "NODE_PATH=src build-storybook && cp ./build/styles.css ./storybook-static",
  ```

## 0.0.4 → 1.0.2

1. Remove `chokidar-cli` and `postcss-cli` dependencies
2. Update all your dependencies (`$ yarn upgrade-interactive --latest`)
3. Update the content of your `.storybook/main.js` with
    ```js
    module.exports = {
      "stories": [
        "../src/**/*.stories.mdx",
        "../src/**/*.stories.@(js|jsx|ts|tsx)",
      ],
      "addons": [
        "@whitespace/storybook-addon-html",
        "@storybook/addon-docs",
        "@storybook/addon-links",
        "@storybook/addon-essentials"
      ],
      typescript: {
        reactDocgen: 'react-docgen'
      }
    }
    ```
4. Replace all `tailwind:XXX` npm script by:
    ```json
    "tailwind:build": "export NODE_ENV=production && npx tailwindcss -i ./src/styles/base.css -o ./build/styles.css  --minify --purge='./src/**/*.tsx' --postcss",
    "tailwind:start": "npx tailwindcss -i ./src/styles/base.css -o ./build/styles.css --watch --jit --purge='./src/**/*.tsx' --postcss",
    ```
5. Update your `src/components/atoms/Icons/Icons.tsx` like:
    ```tsx
    import React, { FunctionComponent, SVGAttributes } from 'react';

    import External from 'assets/icons/external.svg';
    import Home from 'assets/icons/home.svg';

    export const iconList: Record<string, unknown> = {
      home: Home,
      external: External,
    };

    export type IconNames = 'home' | 'external';

    const Icons = (): JSX.Element => (
      <div style={{ display: 'none' }}>
        {Object.keys(iconList).map(icon =>
          React.createElement<SVGAttributes<SVGAElement>>(
            iconList[icon] as FunctionComponent,
            {
              key: icon,
              id: icon.replace(/_/gm, '-'),
            }
          )
        )}
      </div>
    );

    //...
    ```
6. In your `src/components/atoms/Icon/Icon.tsx` import and use the new `IconNames` type like:
    ```tsx
    import { IconNames } from 'components/atoms/Icons/Icons';

    export type Props = {
      name?: IconNames;
    };
    ```

## 0.0.3 → 0.0.4

Nothing to worry about 😉

## 0.0.2 → 0.0.3

Nothing to worry about 😉, but the new `src/modules/collapse-react.tsx` and `src/modules/collapse-vanilla.tsx` should help you to better understand Storybox modules system.

## 0.0.1 → 0.0.2

Nothing to worry about 😉
