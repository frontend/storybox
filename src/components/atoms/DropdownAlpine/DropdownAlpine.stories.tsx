import type { Meta, StoryObj } from '@storybook/react';

import DropdownAlpine from './DropdownAlpine';
import doc from './DropdownAlpine.mdx';

const meta = {
  title: 'Atoms/Dropdown Alpine',
  component: DropdownAlpine,
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: doc,
    },
  },
} satisfies Meta<typeof DropdownAlpine>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * This is a blank component
 */
export const Default: Story = {
  args: {},
  parameters: {
    docs: {
      story: { inline: true, height: '200px' },
      canvas: { sourceState: 'shown' },
    },
  },
};
