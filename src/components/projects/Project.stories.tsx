import { Project } from './Project'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  component: Project,
  title: 'Components/Project',
} as ComponentMeta<typeof Project>

const Template: ComponentStory<typeof Project> = (args) => <Project {...args} />

export const Default = Template.bind({})
Default.storyName = 'Project'
Default.args = {}
