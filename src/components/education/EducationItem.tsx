import { Stack } from '../shared/stack/Stack'
import { Text } from '../shared/text/Text'
import { PropsWithChildren } from 'react'
import { Heading } from '../shared/heading/Heading'

export type EducationItemProps = PropsWithChildren & {
  title: string
  subtitle?: string
  from: string
  to?: string
}

export const EducationItem = ({
  title,
  subtitle,
  from,
  to,
  ...props
}: EducationItemProps) => {
  return (
    <Stack
      direction="column"
      gap="2px"
      css={{
        pageBreakInside: 'avoid',
      }}
    >
      <Heading size="sm">{title}</Heading>
      {subtitle && <Heading size="xs">{subtitle}</Heading>}
      <Heading size="xs">{to ? `${from} - ${to}` : `seit ${from}`}</Heading>
    </Stack>
  )
}
