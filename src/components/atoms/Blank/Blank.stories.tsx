import React from 'react';

import { IconsDecorator } from '../Icons';

import Blank, { Props } from './Blank';

export default {
  title: 'Atoms/Blank',
  component: Blank,
  decorators: [IconsDecorator],
};

const Template = (args: Props) => <Blank {...args} />;

export const Default = Template.bind({});
Default.args = {
  active: false,
};
