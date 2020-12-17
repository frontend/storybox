import React from 'react';

import Blank, { Props } from './Blank';

export default {
  title: 'Atoms/Blank',
  component: Blank,
};

const Template = (args: Props) => <Blank {...args} />;

export const Default = Template.bind({});
Default.args = {
  active: false,
};
