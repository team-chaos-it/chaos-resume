import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Contact } from './Contact'
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from '@fortawesome/free-solid-svg-icons'
import { faXing } from '@fortawesome/free-brands-svg-icons'

export default {
  component: Contact,
  title: 'Components/Contact',
} as ComponentMeta<typeof Contact>

const Template: ComponentStory<typeof Contact> = (args) => <Contact {...args} />

export const Default = Template.bind({})
Default.storyName = 'Contact'
Default.args = {
  contacts: [
    { icon: faPhone, value: '0123 1234567' },
    { icon: faEnvelope, value: 'info@example.org' },
    { icon: faXing, value: 'xing.com/profile' },
    { icon: faLocationDot, value: 'Barcelona' },
  ],
}
