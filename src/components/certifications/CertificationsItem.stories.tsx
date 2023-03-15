import { CertificationsItem } from './CertificationsItem'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import * as icons from '@fortawesome/free-solid-svg-icons'
import faEnvelope from '@fortawesome/free-solid-svg-icons'

export default {
  component: CertificationsItem,
  title: 'Components/CertificationsItem',
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
} as ComponentMeta<typeof CertificationsItem>

const Template: ComponentStory<typeof CertificationsItem> = (args) => (
  <CertificationsItem {...args} />
)

export const Default = Template.bind({})
Default.storyName = 'CertificationsItem'
Default.args = {
  children: 'Lorem ipsum dolor sit amet',
}
