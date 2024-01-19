import { PropsWithChildren } from 'react'
import { base } from '../../tokens'
import { Heading } from '../shared/heading/Heading'
import { Stack } from '../shared/stack/Stack'

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
    <Stack direction="column" gap=".25rem" {...props}>
      <Heading
        id={`progress-bar-${title}`}
        size="xs"
        textAlign={{ sm: 'center', md: 'start' }}
      >
        {title}
      </Heading>
      <progress
        aria-labelledby={`progress-bar-${title}`}
        css={{
          appearance: 'none',
          height: '.25rem',
          '::-webkit-progress-bar': {
            backgroundColor: base.colors['grey-200'],
          },
          '::-webkit-progress-value': {
            backgroundColor: base.colors['grey-300'],
          },
          '::-moz-progress-bar ': {
            backgroundColor: base.colors['grey-300'],
          },
        }}
        value={level}
        max="100"
      />
    </Stack>
  )
}
