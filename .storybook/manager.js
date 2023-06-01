import { addons } from '@storybook/manager-api';
import { themes } from '@storybook/theming';
import { version, displayName } from '../package.json';

addons.setConfig({
  isFullscreen: false,
  showNav: true,
  showPanel: true,
  panelPosition: 'bottom',
  enableShortcuts: true,
  showToolbar: true,
  selectedPanel: undefined,
  initialActive: 'sidebar',
  sidebar: {
    showRoots: true,
    collapsedRoots: ['other'],
  },
  toolbar: {
    title: {hidden: false},
    zoom: {hidden: false},
    eject: {hidden: false},
    copy: {hidden: false},
    fullscreen: {hidden: false},
  },
  theme: {
    ...themes.normal,
    base: 'light',
    brandTitle: `${ displayName } (${ version })`,
    brandUrl: '/',
    colorSecondary: '#FB0299',
    appBorderRadius: 10,
  },
});