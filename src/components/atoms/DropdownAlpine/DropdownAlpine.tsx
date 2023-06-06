import React, { useEffect } from 'react';
import Alpine from 'alpinejs';

import { ComponentWrapper } from '../../storybook/HtmlComment';
import HtmlComponent from '../../storybook/HtmlComponent';
import Icon from '../Icon';

import data from './lib/data';
import html from './DropdownAlpine.html?raw';

const DropdownAlpine = () => {
  useEffect(() => {
      if (window.Alpine === undefined) {
        window.Alpine = Alpine;
        window.Alpine.data('dropdown', data);
        window.Alpine.start();
      }
  }, []);

  return (
    <ComponentWrapper name="DropdownAlpine">
      <HtmlComponent
        html={html}
        components={{
          '<Icon />': (
            <Icon name="chevron-down" className="text-gray-400 !text-base"/>
          ),
        }}
      />
    </ComponentWrapper>
  );
};

export default DropdownAlpine;
