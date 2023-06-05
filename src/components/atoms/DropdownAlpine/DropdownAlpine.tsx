import React, { useEffect } from 'react';
import * as ReactDomServer from 'react-dom/server';
import Alpine from 'alpinejs';

import { ComponentWrapper } from '../../storybook/HtmlComment';
import HtmlComponent from '../../storybook/HtmlComponent';
import Icon from '../Icon';

import data from './lib/data';
import html from './DropdownAlpine.html';

const DropdownAlpine = () => {
  useEffect(() => {
    Alpine.data('dropdown', () => data);
    Alpine.start();
  }, []);

  return (
    <ComponentWrapper name="DropdownAlpine">
      <HtmlComponent
        html={html}
        components={{
          '<Icon />': (
            <Icon name="chevron-down" className="text-gray-400 !text-base" />
          ),
        }}
      />
    </ComponentWrapper>
  );
};

export default DropdownAlpine;
