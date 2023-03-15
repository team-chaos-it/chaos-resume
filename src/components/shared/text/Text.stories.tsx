import { Text } from './Text'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  component: Text,
  title: 'Components/Shared/Text',
} as ComponentMeta<typeof Text>

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />

export const Default = Template.bind({})
Default.storyName = 'Text'
Default.args = {
  children: 'Lorem ipsum dolor sit amet',
}
