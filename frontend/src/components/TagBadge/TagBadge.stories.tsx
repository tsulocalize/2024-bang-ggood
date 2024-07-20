import type { Meta, StoryObj } from '@storybook/react';

import TagBadge from '@/components/TagBadge/TagBadge';

const meta: Meta<typeof TagBadge> = {
  component: TagBadge,
  parameters: {
    backgrounds: {
      default: 'white',
      values: [
        { name: 'grey', value: '#cccccc' },
        { name: 'white', value: '#ffffff' },
      ],
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const SmallSize: Story = {
  args: { $width: 'small', children: '10' },
};
export const MediumSize: Story = {
  args: { $width: 'medium', children: '서울대입구역' },
};
export const LargeSize: Story = {
  args: { $width: 'large', children: '방 이름' },
};
export const Full: Story = {
  args: { $width: 'full', children: '서울특별시 용산시 뭐시구 우아동 101동' },
};
export const NoWidth: Story = {
  args: { children: '서울특별시 용산시 뭐시구 우아동 101동' },
};
