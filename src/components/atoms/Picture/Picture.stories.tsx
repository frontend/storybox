import type {Meta, StoryObj} from '@storybook/react';
import doc from './Picture.mdx';

import Picture from "./Picture";

const meta = {
  title: 'Atoms/Picture',
  component: Picture,
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: doc,
    }
  }
} satisfies Meta<typeof Picture>;

export default meta;
type Story = StoryObj<typeof meta>;


/*
 * STORIES
 */

export const Default: Story = {
  args: {
    ratio: 'original'
  },
};

export  const _16x9: Story = {
  args: {
    ratio: '16:9'
  },
};

export  const _3x2: Story = {
  args: {
    ratio: '3:2'
  },
};

export  const _1x1: Story = {
  args: {
    ratio: '1:1'
  },
};