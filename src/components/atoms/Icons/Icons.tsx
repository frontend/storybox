/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-webpack-loader-syntax */
/* eslint-disable react/no-danger */
import React, { FunctionComponent, SVGAttributes } from 'react';

import External from 'assets/icons/external.svg';
import Home from 'assets/icons/home.svg';

export const iconList: Record<string, unknown> = {
  home: Home,
  external: External,
};

export type IconNames = 'home' | 'external';

const Icons = (): JSX.Element => (
  <div style={{ display: 'none' }}>
    {Object.keys(iconList).map(icon =>
      React.createElement<SVGAttributes<SVGAElement>>(
        iconList[icon] as FunctionComponent,
        {
          key: icon,
          id: icon.replace(/_/gm, '-'),
        }
      )
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
