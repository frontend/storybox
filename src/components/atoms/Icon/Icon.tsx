import React from 'react';

import { IconNames } from 'components/atoms/Icons/Icons';

export type Props = {
  name?: IconNames;
};

const Icon = ({ name = 'home' }: Props): JSX.Element => (
  <>
    <svg className={`icon icon-${name}`} aria-hidden="true">
      <use xlinkHref={`#${name}`} />
    </svg>
  </>
);

Icon.defaultProps = {};

export default Icon;
