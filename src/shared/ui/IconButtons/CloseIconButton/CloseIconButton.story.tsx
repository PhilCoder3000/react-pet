import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { primaryBgDecorator } from 'shared/utils/storybookDecorators/PrimaryBg';
import { CloseIconButton } from './CloseIconButton';

export default {
  title: 'shared/IconButtons/CloseIconButton',
  component: CloseIconButton,
} as ComponentMeta<typeof CloseIconButton>;

const Template: ComponentStory<typeof CloseIconButton> = (args) => (
  <CloseIconButton {...args} />
);

export const Primary: ComponentStory<typeof CloseIconButton> = Template.bind(
  {},
);
Primary.args = {
  color: 'primary',
};

export const Secondary: ComponentStory<typeof CloseIconButton> = Template.bind(
  {},
);
Secondary.args = {
  color: 'secondary',
};
Secondary.decorators = [primaryBgDecorator];
