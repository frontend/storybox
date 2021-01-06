/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-webpack-loader-syntax */
/* eslint-disable react/no-danger */
import React, { FunctionComponent } from 'react';

import External from 'assets/icons/external.svg';
import Home from 'assets/icons/home.svg';

export const iconList: Record<string, FunctionComponent<{ id: string }>> = {
  home: Home,
  external: External,
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
