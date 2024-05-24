import type { Meta as MetaObj, StoryObj } from '@storybook/react';

import Example from '@/components/example';

type Story = StoryObj<typeof Example>;
type Meta = MetaObj<typeof Example>;

export const Default: Story = {
  args: {
    children:
      'Example Component, You should delete this component before starting new project',
  },
};

export default { component: Example } as Meta;
