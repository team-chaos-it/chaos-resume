import { Education } from './Education'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  component: Education,
  title: 'Components/Education',
} as ComponentMeta<typeof Education>

const Template: ComponentStory<typeof Education> = (args) => (
  <Education {...args} />
)

export const Default = Template.bind({})
Default.storyName = 'Education'
Default.args = {
  items: [
    {
      title: 'Master of Disaster',
      subtitle: 'Chaos University',
      from: '2012',
      to: '2015',
    },
    {
      title: 'Bachelor of Disaster',
      subtitle: 'Chaos University',
      from: '2009',
      to: '2012',
    },
  ],
}
