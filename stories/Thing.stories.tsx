import { Meta, Story } from '@storybook/react';
import { Props } from '../src';
import { Box } from '../src/components/Box';
import { Avatar } from '../src/components/Avatar';
import { TrustedProvider } from '../src/context';
import { Form } from '../src/components/Form';

const meta: Meta = {
  title: 'Welcome',
  component: TrustedProvider,
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

const Template: Story<Props> = () => (
  <TrustedProvider>
    <Box>
      <Avatar src="https://png.pngtree.com/png-vector/20190223/ourmid/pngtree-vector-avatar-icon-png-image_695765.jpg" />
      <h1>Hello World</h1>

      <Form />
    </Box>
  </TrustedProvider>
);

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {};
