import React from 'react';

import { IconsDecorator } from '../../atoms/Icons/Icons';

import Header from './Header';

export default {
  title: 'Organisms/Header',
  component: Header,
  decorators: [IconsDecorator],
};

const Template = () => <Header />;

export const Default = Template.bind({});
Default.args = {};
