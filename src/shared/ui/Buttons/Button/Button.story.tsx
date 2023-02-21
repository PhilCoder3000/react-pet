import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { primaryBgDecorator } from 'shared/utils/storybookDecorators/PrimaryBg';
import { Button } from './Button';

export default {
  title: 'shared/Buttons/Button',
  component: Button,
  args: {
    children: 'Button'
  }
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args} />
);

export const Primary: ComponentStory<typeof Button> = Template.bind({});
Primary.args = {
  color: 'primary',
};

export const Secondary: ComponentStory<typeof Button> = Template.bind({});
Secondary.args = {
  color: 'secondary',
};
Secondary.decorators = [primaryBgDecorator]