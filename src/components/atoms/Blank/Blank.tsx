import React from 'react';

export type Props = {
  active: boolean;
};

const Blank = ({ active }: Props): JSX.Element => (
  <span className={`blank ${active ? 'blank-active' : ''}`}>
    Blank component
  </span>
);

Blank.defaultProps = {};

export default Blank;
