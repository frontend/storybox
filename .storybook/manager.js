import { addons } from '@storybook/addons';
import { themes } from '@storybook/theming';
import { version, displayName, url  } from '../package.json';

addons.setConfig({
  theme: {
    ...themes.normal,
    brandTitle: `${displayName} (${version})`,
    base: 'light',
    colorSecondary: '#266FAC',
    barSelectedColor: '#266FAC',
    barTextColor: 'black',
    brandUrl: url,
  },
});