import React from 'react';

import Button, { Props } from './Button';

export default {
  title: 'Atoms/Button',
  component: Button,
};

const Template = (args: Props) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  children: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  children: 'Button',
};
