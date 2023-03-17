import { ComponentMeta, ComponentStory } from '@storybook/react'
import { UnderConstruction } from './UnderConstruction'

export default {
  component: UnderConstruction,
  title: 'Components/UnderConstruction',
} as ComponentMeta<typeof UnderConstruction>

const Template: ComponentStory<typeof UnderConstruction> = (args) => (
  <UnderConstruction {...args} />
)

export const Default = Template.bind({})
Default.storyName = 'UnderConstruction'
Default.args = {}
