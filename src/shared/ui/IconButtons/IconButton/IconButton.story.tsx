import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { primaryBgDecorator } from 'shared/utils/storybookDecorators/PrimaryBg';
import { IconButton } from './IconButton';

export default {
  title: 'shared/IconButtons/IconButton',
  component: IconButton,
  args: {
    children: <span />
  }
} as ComponentMeta<typeof IconButton>;

const Template: ComponentStory<typeof IconButton> = (args) => (
  <IconButton {...args} />
);

export const Primary: ComponentStory<typeof IconButton> = Template.bind({});
Primary.args = {
  color: 'primary',
};

export const Secondary: ComponentStory<typeof IconButton> = Template.bind({});
Secondary.args = {
  color: 'secondary',
};
Secondary.decorators = [primaryBgDecorator]
