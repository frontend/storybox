# Migration Guide

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