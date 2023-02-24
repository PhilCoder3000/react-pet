import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { SingUpWithEmailModal } from './SingUpWithEmailModal';

export default {
  title: 'shared/SingUpWithEmailModal',
  component: SingUpWithEmailModal,
  args: {
    children: 'SingUpWithEmailModal',
  },
} as ComponentMeta<typeof SingUpWithEmailModal>;

const Template: ComponentStory<typeof SingUpWithEmailModal> = (args) => (
  <SingUpWithEmailModal {...args} />
);

export const Primary: ComponentStory<typeof SingUpWithEmailModal> =
  Template.bind({});
