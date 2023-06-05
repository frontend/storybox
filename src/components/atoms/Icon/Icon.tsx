import React from 'react';
import clsx from 'clsx';

import { ComponentWrapper } from '../../storybook/HtmlComment';

export type IconNames =
  | 'chevron-left'
  | 'chevron-right'
  | 'chevron-up'
  | 'chevron-down'
  | 'home'
  | 'external';

export const icons: IconNames[] = [
  'chevron-left',
  'chevron-right',
  'chevron-up',
  'chevron-down',
  'home',
  'external',
];

export type IconProps = {
  name: IconNames;
  className?: string;
  // eslint-disable-next-line
  [x: string]: any;
};

const Icon = ({
  name = 'home',
  className,
  ...props
}: IconProps): JSX.Element => (
  <ComponentWrapper name="Icon">
    <svg aria-hidden="true" className={clsx('icon', className)} {...props}>
      <use href={`/icons/icons.svg#${name}`} />
    </svg>
  </ComponentWrapper>
);

export default Icon;
