import type { Preview } from "@storybook/react";
import { createElement } from 'react';
import * as ReactDomServer from 'react-dom/server';
import * as prettierHtml from 'prettier/parser-html';
import * as prettier from 'prettier/standalone';

const renderHtml = function(component) {
  return prettier.format(ReactDomServer.renderToStaticMarkup(component).
      replace(/<script><\/script>/g, ''), {
    parser: 'html',
    plugins: [prettierHtml],
    htmlWhitespaceSensitivity: 'ignore',
  });
};

const preview: Preview = {
  parameters: {
    actions: {argTypesRegex: '^on[A-Z].*'},
    html: {
      prettier: {
        tabWidth: 2,
        useTabs: false,
      },
    },
    previewTabs: {
      "storybook/docs/panel": {
        index: -1,
      },
    },
    docs: {
      components: {
        ol: ({ children }) => (<ol className="list-decimal">{children}</ol>),
      },
      transformSource: function(src, storyContext) {
        const component = createElement(storyContext.component, storyContext.initialArgs);
        return renderHtml(component);
      },
    },
    options: {
      storySort: {
        order: [
          'Introduction',
          'Installation',
          'Contribution',
          'Changelog',
          'Docs',
          "Atoms",
          "Navigation",
          "Content",
          "Pages",
        ],
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