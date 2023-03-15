import { ContactItem } from './ContactItem'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import * as icons from '@fortawesome/free-solid-svg-icons'
import faEnvelope from '@fortawesome/free-solid-svg-icons'

export default {
  component: ContactItem,
  title: 'Components/ContactItem',
  argTypes: {
    icon: {
      defaultValue: 'faEnvelope',
      control: {
        type: 'select',
      },
      options: Object.keys(icons),
      mapping: icons,
    },
  },
} as ComponentMeta<typeof ContactItem>

const Template: ComponentStory<typeof ContactItem> = (args) => (
  <ContactItem {...args} />
)

export const Default = Template.bind({})
Default.storyName = 'ContactItem'
Default.args = {
  children: 'Lorem ipsum dolor sit amet',
}
