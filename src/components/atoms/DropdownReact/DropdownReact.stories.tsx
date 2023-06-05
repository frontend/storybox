import type { Meta, StoryObj } from '@storybook/react';

import DropdownReact from './DropdownReact';
import doc from './DropdownReact.mdx';

const meta = {
  title: 'Atoms/Dropdown React',
  component: DropdownReact,
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: doc,
    },
  },
} satisfies Meta<typeof DropdownReact>;

export default meta;
type Story = StoryObj<typeof meta>;

/*
 * STORIES
 */

export const Default: Story = {
  args: {
    options: ['Profile', 'Settings', 'Logout'],
    placeholder: 'My account',
  },
  parameters: {
    docs: {
      story: { inline: true, height: '200px' },
      canvas: { sourceState: 'shown' },
    },
  },
};
