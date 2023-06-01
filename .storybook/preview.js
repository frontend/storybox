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
  }).replace(/&#x27;/g, "'").replace(/&amp;/g, "&");
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
      transformSource: function(src, storyContext) {
        const component = createElement(storyContext.component, storyContext.initialArgs);
        return renderHtml(component);
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
