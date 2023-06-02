import React from 'react';
import clsx from 'clsx';

import { ComponentWrapper } from '../../storybook/HtmlComment';

export type IconNames =
  | 'home'
  | 'external'

export const icons: IconNames[] = [
  'home',
  'external'
];

export type IconProps = {
  name: IconNames;
  className?: string;
  test?:string
  // eslint-disable-next-line
  [x: string]: any;
};

const Icon = ({ name = 'home', className, test, ...props }: IconProps): JSX.Element => (
  <ComponentWrapper name="Icon">
    <svg aria-hidden="true" className={clsx('icon', className)} {...props}>
      <use href={`icons.svg#${name}`} />
    </svg>
  </ComponentWrapper>
);

export default Icon;
