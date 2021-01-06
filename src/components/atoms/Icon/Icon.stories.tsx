import React from 'react';

import { IconsDecorator } from '../Icons';

import Icon, { Props } from './Icon';

export default {
  title: 'Atoms/Icon',
  component: Icon,
  decorators: [IconsDecorator],
};

const Template = (args: Props) => <Icon {...args} />;

export const Default = Template.bind({});
Default.args = {
  icon: 'home',
};
