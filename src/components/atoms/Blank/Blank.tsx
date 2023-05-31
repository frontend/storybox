import React from 'react';
import clsx from 'clsx';

import {ComponentWrapper} from "../../storybook/HtmlComment";

export type Props = {
  active: boolean;
};

const Blank = ({ active }: Props) => (
  <ComponentWrapper name="Blank">
    <span className={clsx('blank', active && 'blank-active')}>Blank component</span>
  </ComponentWrapper>
);

export default Blank;
