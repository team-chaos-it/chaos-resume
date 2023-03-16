import * as icons from '@fortawesome/free-solid-svg-icons'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { CompetenciesItem } from './CompetenciesItem'

export default {
  component: CompetenciesItem,
  title: 'Components/CompetenciesItem',
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
} as ComponentMeta<typeof CompetenciesItem>

const Template: ComponentStory<typeof CompetenciesItem> = (args) => (
  <CompetenciesItem {...args} />
)

export const Default = Template.bind({})
Default.storyName = 'CompetenciesItem'
Default.args = {
  children: 'Lorem ipsum dolor sit amet',
}
