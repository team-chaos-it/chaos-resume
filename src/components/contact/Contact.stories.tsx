import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Contact } from './Contact'

export default {
  component: Contact,
  title: 'Components/Contact',
} as ComponentMeta<typeof Contact>

const Template: ComponentStory<typeof Contact> = (args) => <Contact {...args} />

export const Default = Template.bind({})
Default.storyName = 'Contact'
Default.args = {
  phone: '0123 1234567',
  email: 'info@example.org',
  xing: 'xing.com/profile/John_Doe',
  city: 'Barcelona',
}
