import type { Meta, StoryObj } from '@storybook/react';
import doc from './doc/Blank.mdx';

import Blank from "./Blank";

const meta = {
  title: 'Atoms/Blank',
  component: Blank,
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: doc,
    }
  }
} satisfies Meta<typeof Blank>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * This is a blank component
 */
export const Default: Story = {
  args: {
    active: false
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
    active: true
  }
};