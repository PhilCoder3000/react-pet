import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { DatePicker } from './DatePicker';

export default {
  title: 'shared/DatePicker',
  component: DatePicker,
  args: {
    children: 'DatePicker'
  }
} as ComponentMeta<typeof DatePicker>;

const Template: ComponentStory<typeof DatePicker> = () => (
  <DatePicker />
);

export const Primary: ComponentStory<typeof DatePicker> = Template.bind({});