import { Heading } from './Heading'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  component: Heading,
  title: 'Components/Shared/Heading',
} as ComponentMeta<typeof Heading>

const Template: ComponentStory<typeof Heading> = (args) => <Heading {...args} />

export const Default = Template.bind({})
Default.storyName = 'Heading'
Default.args = {
  children: 'Lorem ipsum dolor sit amet',
  size: 'lg',
}
