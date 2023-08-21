import { TaskList } from './TaskList'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  component: TaskList,
  title: 'Components/TaskList',
  argTypes: {
    hideAfterLines: {
      control: { type: 'range', min: 0, max: 10, step: 1 },
    },
  },
} as ComponentMeta<typeof TaskList>

const Template: ComponentStory<typeof TaskList> = (args) => (
  <TaskList
    {...args}
    tasks={[
      'Task 1',
      'Task 2',
      'Task 3',
      'Task 4',
      'Task 5',
      'Task 6',
      'Task 7',
      'Task 8',
      'Task 9',
      'Task 10',
    ]}
  />
)

export const Default = Template.bind({})
Default.storyName = 'TaskList'
