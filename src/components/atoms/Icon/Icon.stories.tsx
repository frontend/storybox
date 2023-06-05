import type { Meta, StoryObj } from '@storybook/react';

import Icon from './Icon';
import doc from './Icon.mdx';

const meta = {
  title: 'Atoms/Icon',
  component: Icon,
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: doc,
    },
  },
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

/*
 * STORIES
 */

export const Default: Story = {
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: 'shown' },
    },
  },
};
