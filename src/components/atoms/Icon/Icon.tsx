import React from 'react';

export type Props = {
  name?: string;
};

const Icon = ({ name }: Props): JSX.Element => (
  <>
    <svg className={`icon icon-${name}`} aria-hidden="true">
      <use xlinkHref={`#${name}`} />
    </svg>
  </>
);

Icon.defaultProps = {
  name: 'home',
};

export default Icon;
