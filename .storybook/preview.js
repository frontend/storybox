import React from "react";
import {
  Title,
  Subtitle,
  Description,
  Primary,
  ArgsTable,
  Stories,
  PRIMARY_STORY,
} from '@storybook/addon-docs/blocks';

import { IconsDecorator } from '../src/components/atoms/Icons';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  viewMode: 'docs',
  html: {
    prettier: {
      tabWidth: 2,
      useTabs: false,
    },
  },
  docs: {
    page: () => (
      <>
        <Title />
        <Subtitle />
        <Primary />
        {/* <ArgsTable story={PRIMARY_STORY} /> */}
        <Description />
        <Stories />
      </>
    ),
    source: {
      code: '{/* Take a look in the HTML tab of the Canvas tab */}',
    },
  },
}

export const decorators = [
  // IconsDecorator,
];