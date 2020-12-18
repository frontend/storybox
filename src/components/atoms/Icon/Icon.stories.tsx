import React from 'react';

import Icon, { Props } from './Icon';

export default {
  title: 'Atoms/Icon',
  component: Icon,
};

const Template = (args: Props) => <Icon {...args} />;

export const Default = Template.bind({});
Default.args = {
  icon: 'home',
};
