import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Banner } from './Banner'

export default {
  component: Banner,
  title: 'Components/Banner',
} as ComponentMeta<typeof Banner>

const Template: ComponentStory<typeof Banner> = (args) => <Banner {...args} />

export const Default = Template.bind({})
Default.storyName = 'Banner'
Default.args = {}
