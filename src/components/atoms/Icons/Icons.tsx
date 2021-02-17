/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-webpack-loader-syntax */
/* eslint-disable react/no-danger */
import React, { FunctionComponent, SVGProps } from 'react';

import { ReactComponent as external } from 'assets/icons/external.svg';
import { ReactComponent as home } from 'assets/icons/home.svg';

export const iconList: Record<
  string,
  FunctionComponent<SVGProps<SVGSVGElement>>
> = {
  home,
  external,
};

const Icons = (): JSX.Element => (
  <div style={{ display: 'none' }}>
    {Object.keys(iconList).map(icon =>
      React.createElement(iconList[icon], { key: icon, id: icon })
    )}
  </div>
);

export default Icons;

export const IconsDecorator = (Story: FunctionComponent): JSX.Element => (
  <>
    <Story />
    {`
      
      `}
    <span hidden>
      👇 =========================== Icons sprite =========================== 👇
    </span>
    <Icons />
  </>
);
