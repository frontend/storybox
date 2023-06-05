import type { Meta, StoryObj } from '@storybook/react';

import DropdownVanilla from './DropdownVanilla';
import doc from './DropdownVanilla.mdx';

const meta = {
  title: 'Atoms/Dropdown Vanilla',
  component: DropdownVanilla,
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: doc,
    },
  },
} satisfies Meta<typeof DropdownVanilla>;

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
      story: { inline: true },
      canvas: { sourceState: 'shown' },
    },
  },
};
