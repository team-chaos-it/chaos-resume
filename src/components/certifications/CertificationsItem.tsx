import { PropsWithChildren } from 'react'
import { Heading } from '../shared/heading/Heading'
import { Stack } from '../shared/stack/Stack'

export type CertificationsItemProps = PropsWithChildren & {
  title: string
  subtitle?: string
  authority?: string
  date?: string
}

export const CertificationsItem = ({
  title,
  subtitle,
  authority,
  date,
  ...props
}: CertificationsItemProps) => {
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
      {(authority || date) && (
        <Heading size="xs" textAlign={{ sm: 'center', md: 'start' }}>
          {authority} {authority && date ? '|' : undefined} {date}
        </Heading>
      )}
    </Stack>
  )
}
