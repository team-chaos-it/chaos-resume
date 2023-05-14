import * as icons from '@fortawesome/free-solid-svg-icons'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { ContactItem } from './ContactItem'

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
  value: 'Lorem ipsum dolor sit amet',
}
