import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { SignUpWithEmailModal } from './SignUpWithEmailModal';

export default {
  title: 'shared/SignUpWithEmailModal',
  component: SignUpWithEmailModal,
  args: {
    children: 'SignUpWithEmailModal',
  },
} as ComponentMeta<typeof SignUpWithEmailModal>;

const Template: ComponentStory<typeof SignUpWithEmailModal> = (args) => (
  <SignUpWithEmailModal {...args} />
);

export const Primary: ComponentStory<typeof SignUpWithEmailModal> =
  Template.bind({});
