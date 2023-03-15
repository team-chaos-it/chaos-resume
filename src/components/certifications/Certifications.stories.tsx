import { Certifications } from './Certifications'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  component: Certifications,
  title: 'Components/Certifications',
} as ComponentMeta<typeof Certifications>

const Template: ComponentStory<typeof Certifications> = (args) => (
  <Certifications {...args} />
)

export const Default = Template.bind({})
Default.storyName = 'Certifications'
Default.args = {}
