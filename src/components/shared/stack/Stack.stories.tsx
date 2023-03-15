import { ComponentMeta, Story } from '@storybook/react'
import { ComponentProps } from 'react'
import { Stack } from './Stack'
import { StoryPlaceholder } from '../../../utils/StoryUtils'

export default {
  title: 'Components/Shared/Stack',
  component: Stack,
  argTypes: {
    numberOfItems: {
      control: { type: 'range', min: 0, max: 20, step: 1 },
    },
    gap: {
      control: { type: 'range', min: 0, max: 200, step: 1 },
    },
    align: {
      type: 'string',
      options: ['start', 'center', 'end', 'stretch'],
      control: {
        type: 'select',
      },
    },
    justify: {
      type: 'string',
      options: [
        'start',
        'center',
        'end',
        'space-between',
        'space-around',
        'space-evenly',
        'stretch',
      ],
      control: {
        type: 'select',
      },
    },
    direction: {
      type: 'string',
      options: ['row', 'column', 'row-reverse', 'column-reverse'],
      control: {
        type: 'select',
      },
    },
    wrap: {
      type: 'string',
      options: ['nowrap', 'wrap', 'wrap-reverse'],
      control: {
        type: 'select',
      },
    },
  },
} as ComponentMeta<typeof Stack>

type StoryProps = {
  numberOfItems: number
}
const Template: Story<ComponentProps<typeof Stack> & StoryProps> = ({
  numberOfItems,
  ...args
}) => {
  const items = Array(numberOfItems).fill(null)

  return (
    <Stack {...args}>
      {items.map((_, index) => (
        <StoryPlaceholder key={index} width="50px" height="50px" />
      ))}
    </Stack>
  )
}

export const Default = Template.bind({})
Default.storyName = 'Stack'
Default.args = {
  numberOfItems: 5,
  direction: 'row',
  justify: 'start',
  align: 'start',
  wrap: 'nowrap',
  gap: 5,
}
