import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { SignInWithEmailModal } from './SignInWithEmailModal';

export default {
  title: 'shared/Modals/SignInWithEmailModal',
  component: SignInWithEmailModal,
} as ComponentMeta<typeof SignInWithEmailModal>;

const Template: ComponentStory<typeof SignInWithEmailModal> = (args) => (
  <SignInWithEmailModal {...args} />
);

export const Primary: ComponentStory<typeof SignInWithEmailModal> =
  Template.bind({});
Primary.args = {
  isOpen: true,
  setOpen: () => {
    return;
  },
};
