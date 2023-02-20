import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { IconButton } from './IconButton';

export default {
  title: 'shared/IconButtons/IconButton',
  component: IconButton,
} as ComponentMeta<typeof IconButton>;

const Template: ComponentStory<typeof IconButton> = (args) => (
  <IconButton {...args} />
);

export const Primary: ComponentStory<typeof IconButton> = Template.bind({});
Primary.args = {
  color: 'primary',
  children: 'X'
};

export const Secondary: ComponentStory<typeof IconButton> = Template.bind({});
Secondary.args = {
  color: 'secondary',
  children: 'X',
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  theme: 'dark'
};
