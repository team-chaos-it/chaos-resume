import * as icons from '@fortawesome/free-solid-svg-icons'
import { ComponentMeta, Story } from '@storybook/react'
import { EducationItem, EducationItemProps } from './EducationItem'

export default {
  component: EducationItem,
  title: 'Components/EducationItem',
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
        options: ['from', 'to'],
      },
    },
  },
} as ComponentMeta<typeof EducationItem>

const Template: Story<EducationItemProps & { elements: ['from', 'to'] }> = ({
  elements,
  title,
  subtitle,
  from,
  to,
}) => (
  <EducationItem
    title={title}
    subtitle={subtitle}
    from={elements.includes('from') ? from : undefined}
    to={elements.includes('to') ? to : undefined}
  />
)

export const Default = Template.bind({})
Default.storyName = 'EducationItem'
Default.args = {
  title: 'Master of Disaster',
  subtitle: 'Chaos University',
  from: '2012',
  to: '2015',
  elements: ['from', 'to'],
}
