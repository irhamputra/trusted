import React from 'react';
import { Meta, Story } from '@storybook/react';
import { TrustProvider, Props } from '../src';
import { Box } from '../src/components/Box';
import { Avatar } from '../src/components/Avatar';

const meta: Meta = {
  title: 'Welcome',
  component: TrustProvider,
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<Props> = (args) => (
  <TrustProvider {...args}>
    <Box>
      <Avatar src="https://png.pngtree.com/png-vector/20190223/ourmid/pngtree-vector-avatar-icon-png-image_695765.jpg" />
      <h1>Hello World</h1>
    </Box>
  </TrustProvider>
);

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {};
