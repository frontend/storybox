import type { Meta, StoryObj } from '@storybook/react';

import Alpine from './Alpine';
import doc from './Alpine.mdx';

const meta = {
  title: 'Atoms/Alpine',
  component: Alpine,
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: doc,
    },
  },
} satisfies Meta<typeof Alpine>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * This is a blank component
 */
export const Default: Story = {
  args: {
    active: false,
  },
  parameters: {
    docs: {
      story: { inline: true }, // render the story in an iframe
      canvas: { sourceState: 'shown' }, // start with the source open
    },
  },
};

export const Active: Story = {
  args: {
    active: true,
  },
};
