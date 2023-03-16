import { ComponentMeta, Story } from '@storybook/react'
import React, { ComponentProps } from 'react'
import { Stack } from './Stack'
import { StoryPlaceholder } from '../../../utils/StoryUtils'
import { StackDivider } from './StackDivider'
import { CSSObject } from '@emotion/react'

export default {
  title: 'Components/Shared/StackDivider',
  component: StackDivider,
  argTypes: {
    numberOfItems: {
      control: { type: 'range', min: 0, max: 20, step: 1 },
    },
    direction: {
      type: 'string',
      options: ['row', 'column', 'row-reverse', 'column-reverse'],
      control: {
        type: 'select',
      },
    },
    gap: {
      control: { type: 'range', min: 0, max: 200, step: 1 },
    },
  },
} as ComponentMeta<typeof StackDivider>

type StoryProps = {
  numberOfItems: number
  direction?: CSSObject['flexDirection']
  gap: number
}
const Template: Story<ComponentProps<typeof StackDivider> & StoryProps> = ({
  numberOfItems,
  gap,
  direction,
  ...args
}) => {
  const items = Array(numberOfItems).fill(null)

  return (
    <Stack direction={direction} gap={gap}>
      {items.map((_, index) => (
        <React.Fragment key={index}>
          <StoryPlaceholder key={index} width="50px" height="50px" />
          {index !== items.length - 1 && <StackDivider {...args} />}
        </React.Fragment>
      ))}
    </Stack>
  )
}

export const Default = Template.bind({})
Default.storyName = 'StackDivider'
Default.args = {
  numberOfItems: 5,
  direction: 'row',
  gap: 5,
  inset: false,
}
