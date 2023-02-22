import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { primaryBgDecorator } from 'shared/utils/storybookDecorators/PrimaryBg';
import { MenuIconButton } from './MenuIconButton';

export default {
  title: 'shared/IconButtons/MenuIconButton',
  component: MenuIconButton,
} as ComponentMeta<typeof MenuIconButton>;

const Template: ComponentStory<typeof MenuIconButton> = (args) => (
  <MenuIconButton {...args} />
);

export const Primary: ComponentStory<typeof MenuIconButton> = Template.bind(
  {},
);
Primary.args = {
  color: 'primary',
};

export const Secondary: ComponentStory<typeof MenuIconButton> = Template.bind(
  {},
);
Secondary.args = {
  color: 'secondary',
};
Secondary.decorators = [primaryBgDecorator];
