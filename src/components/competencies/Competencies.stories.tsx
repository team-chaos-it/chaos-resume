import { Competencies } from './Competencies'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  component: Competencies,
  title: 'Components/Competencies',
} as ComponentMeta<typeof Competencies>

const Template: ComponentStory<typeof Competencies> = (args) => (
  <Competencies {...args} />
)

export const Default = Template.bind({})
Default.storyName = 'Competencies'
Default.args = {}
