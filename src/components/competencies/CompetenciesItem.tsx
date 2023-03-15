import { Stack } from '../shared/stack/Stack'
import { PropsWithChildren } from 'react'
import { Heading } from '../shared/heading/Heading'
import { base } from '../../tokens'

export type CompetenciesItemProps = PropsWithChildren & {
  title: string
  level: number
}

export const CompetenciesItem = ({
  title,
  level,
  ...props
}: CompetenciesItemProps) => {
  return (
    <Stack direction="column" gap=".25rem">
      <Heading size="xs">{title}</Heading>
      <progress
        css={{
          appearance: 'none',
          height: '.25rem',
          '::-webkit-progress-bar': {
            backgroundColor: base.colors['grey-200'],
          },
          '::-webkit-progress-value': {
            backgroundColor: base.colors['grey-300'],
          },
        }}
        value={level}
        max="100"
      ></progress>
    </Stack>
  )
}
