import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { primaryBgDecorator } from 'shared/utils/storybookDecorators/PrimaryBg';
import { PasswordInput } from './PasswordInput';

export default {
  title: 'shared/Inputs/PasswordInput',
  component: PasswordInput,
  args: {
    placeholder: 'PasswordInput',
  },
} as ComponentMeta<typeof PasswordInput>;

const Template: ComponentStory<typeof PasswordInput> = (args) => (
  <PasswordInput {...args} />
);

export const Primary: ComponentStory<typeof PasswordInput> = Template.bind({});
Primary.args = {
  color: 'primary',
};

export const Secondary: ComponentStory<typeof PasswordInput> = Template.bind(
  {},
);
Secondary.args = {
  color: 'primary',
};
Secondary.decorators = [primaryBgDecorator];
