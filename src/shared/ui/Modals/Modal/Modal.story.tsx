import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { Modal } from './Modal';

export default {
  title: 'shared/Modals/Modal',
  component: Modal,
  args: {
    children: 'modal body',
  },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />

// TODO getElementById portal not returned element
export const Primary: ComponentStory<typeof Modal> = Template.bind({});
Primary.args = {
  title: 'Modal title',
};


