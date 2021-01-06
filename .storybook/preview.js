import React from "react";

import { IconsDecorator } from '../src/components/atoms/Icons';
import '!style-loader!css-loader!./../build/styles.css';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  html: {
    prettier: {
      tabWidth: 2,
      useTabs: false,
    },
  },
  docs: {
    source: {
      code: 'Take a look in the HTML tab of your Canvas view',
    },
  },
}

export const decorators = [
  // IconsDecorator,
];