import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { NumberInput } from './NumberInput';

export default {
  title: 'shared/NumberInput',
  component: NumberInput,
} as ComponentMeta<typeof NumberInput>;

const Template: ComponentStory<typeof NumberInput> = (args) => (
  <NumberInput {...args} />
);

export const Primary: ComponentStory<typeof NumberInput> = Template.bind({});