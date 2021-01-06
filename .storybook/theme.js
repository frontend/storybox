import { create } from '@storybook/theming/create';
import { storyboxVersion } from "../package.json";

export default create({
  base: 'light',
  colorPrimary: '#06B6D4',
  colorSecondary: '#06B6D4',
  appContentBg: '#fff',
  brandTitle: `Your Project \nstorybox ${storyboxVersion}`,
});
