import { Button } from '.';
import type { StoryObj } from '@storybook/react';
import type { Meta } from '@storybook/react';

const meta: Meta<typeof Button> = {
  component: Button,
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: 'Click me!',
  },
};
