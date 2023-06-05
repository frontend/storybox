import type { Meta, StoryObj } from '@storybook/react';

import Blank from './Blank';
import doc from './Blank.mdx';

const meta = {
  title: 'Atoms/Blank',
  component: Blank,
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: doc,
    },
  },
} satisfies Meta<typeof Blank>;

export default meta;
type Story = StoryObj<typeof meta>;

/*
 * STORIES
 */

export const Default: Story = {
  args: {
    active: false,
  },
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: 'shown' },
    },
  },
};

export const Active: Story = {
  args: {
    active: true,
  },
};
