import React from 'react';

import { ComponentWrapper } from '../../storybook/HtmlComment';

import config from './config';

export type Props = {
  ratio: 'original' | '16:9' | '3:2' | '1:1';
  sizes?: string;
  name?: string;
};

const src = (ratio: string, width: number, format: string, name: string): string =>
  `/placeholders/${name}_${ratio.replace(':', '_')}_${width}.${format}`;

const Picture = ({ ratio, sizes = '100vw', name = 'sunset' }: Props): JSX.Element => (
  <ComponentWrapper name="Picture">
    <picture className={`picture-${ratio.replace(':', 'x')}`}>
      {config.formats.map(format => (
        <source
          key={format}
          srcSet={config.widths
            .map(width => `${src(ratio, width, format, name)} ${width}w`)
            .join(',\n\t\t\t')
            .replace(/,$/, '')}
          type={`image/${format}`}
        />
      ))}
      <img src={src(ratio, 750, 'jpg', name)} sizes={sizes} alt="Visual description for people with disabilities" />
    </picture>
  </ComponentWrapper>
);

export default Picture;