import { PropsWithChildren } from 'react'
import { Heading } from '../shared/heading/Heading'
import { Stack } from '../shared/stack/Stack'

export type EducationItemProps = PropsWithChildren & {
  title: string
  subtitle?: string
  from?: string
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
      {...props}
    >
      <Heading size="sm" textAlign={{ sm: 'center', md: 'start' }}>
        {title}
      </Heading>
      {subtitle && (
        <Heading size="xs" textAlign={{ sm: 'center', md: 'start' }}>
          {subtitle}
        </Heading>
      )}
      {(to || from) && (
        <Heading size="xs" textAlign={{ sm: 'center', md: 'start' }}>
          {from && to
            ? `${from} - ${to}`
            : from
            ? `seit ${from}`
            : to
            ? `bis ${to}`
            : ''}
        </Heading>
      )}
    </Stack>
  )
}
