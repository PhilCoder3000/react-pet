import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { primaryBgDecorator } from 'shared/utils/storybookDecorators/PrimaryBg';
import { TextInput } from './TextInput';

export default {
  title: 'shared/Inputs/TextInput',
  component: TextInput,
  args: {
    placeholder: 'placeholder',
  },
} as ComponentMeta<typeof TextInput>;

const Template: ComponentStory<typeof TextInput> = (args) => (
  <TextInput {...args} />
);

export const Primary: ComponentStory<typeof TextInput> = Template.bind({});
Primary.args = {
  variant: 'contained',
};

export const Secondary: ComponentStory<typeof TextInput> = Template.bind({});
Secondary.args = {
  variant: 'outlined',
};
Secondary.decorators = [primaryBgDecorator];
