import * as icons from '@fortawesome/free-solid-svg-icons'
import { ComponentMeta, Story } from '@storybook/react'
import {
  CertificationsItem,
  CertificationsItemProps,
} from './CertificationsItem'

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
    elements: {
      control: {
        type: 'check',
        options: ['authority', 'date'],
      },
    },
  },
} as ComponentMeta<typeof CertificationsItem>

const Template: Story<
  CertificationsItemProps & { elements: ['authority', 'date'] }
> = ({ title, subtitle, authority, date, elements }) => (
  <CertificationsItem
    title={title}
    subtitle={subtitle}
    authority={elements.includes('authority') ? authority : undefined}
    date={elements.includes('date') ? date : undefined}
  />
)

export const Default = Template.bind({})
Default.storyName = 'CertificationsItem'
Default.args = {
  title: 'Extended Professional Smartass',
  subtitle: 'PSA II',
  authority: 'chaos.org',
  date: '03/2018',
  elements: ['authority', 'date'],
}
