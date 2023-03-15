import { EducationItem } from './EducationItem'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import * as icons from '@fortawesome/free-solid-svg-icons'
import faEnvelope from '@fortawesome/free-solid-svg-icons'

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
  },
} as ComponentMeta<typeof EducationItem>

const Template: ComponentStory<typeof EducationItem> = (args) => (
  <EducationItem {...args} />
)

export const Default = Template.bind({})
Default.storyName = 'EducationItem'
Default.args = {
  children: 'Lorem ipsum dolor sit amet',
}
