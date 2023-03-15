import { Education } from './Education'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  component: Education,
  title: 'Components/Education',
} as ComponentMeta<typeof Education>

const Template: ComponentStory<typeof Education> = (args) => (
  <Education {...args} />
)

export const Default = Template.bind({})
Default.storyName = 'Education'
Default.args = {
  phone: '0123 1234567',
  email: 'info@example.org',
  xing: 'xing.com/profile/John_Doe',
  city: 'Barcelona',
}
