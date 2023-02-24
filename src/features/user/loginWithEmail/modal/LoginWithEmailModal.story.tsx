import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { LoginWithEmailModal } from './LoginWithEmailModal';

export default {
  title: 'shared/Modals/LoginWithEmailModal',
  component: LoginWithEmailModal,
} as ComponentMeta<typeof LoginWithEmailModal>;

const Template: ComponentStory<typeof LoginWithEmailModal> = (args) => (
  <LoginWithEmailModal {...args} />
);

export const Primary: ComponentStory<typeof LoginWithEmailModal> =
  Template.bind({});
Primary.args = {
  isOpen: true,
  setOpen: () => {
    return;
  },
};
