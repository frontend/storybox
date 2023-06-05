import React, { useEffect } from 'react';
import * as ReactDomServer from 'react-dom/server';

import { ComponentWrapper } from '../../storybook/HtmlComment';
import HtmlComponent from '../../storybook/HtmlComponent';
import Blank from '../Blank';

import script from './lib/script';
import html from './Alpine.html';

const Alpine = () => {
  useEffect(() => {
    script();
  }, []);

  return (
    <ComponentWrapper name="Alpine">
      <HtmlComponent
        html={html}
        components={{
          '<Blank />': <Blank active={false} />,
        }}
      />
    </ComponentWrapper>
  );
};

export default Alpine;
