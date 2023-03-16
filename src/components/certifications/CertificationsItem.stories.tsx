import * as icons from '@fortawesome/free-solid-svg-icons'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { CertificationsItem } from './CertificationsItem'

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
