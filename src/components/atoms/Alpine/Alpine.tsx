import React, { useEffect } from 'react';
import * as ReactDomServer from 'react-dom/server';

import { ComponentWrapper } from '../../storybook/HtmlComment';
import Blank from '../Blank';

import script from './lib/script';
import html from './Alpine.html';

const Alpine = () => {
  useEffect(() => {
    script();
  }, []);

  return (
    <ComponentWrapper name="Alpine">
      <div
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: html.replace(
            /<Blank \/>/gm,
            ReactDomServer.renderToStaticMarkup(<Blank active={false} />)
          ),
        }}
      />
    </ComponentWrapper>
  );
};

export default Alpine;
