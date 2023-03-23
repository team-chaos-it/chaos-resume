import { ComponentProps } from 'react'
import { Stack } from '../stack/Stack'

export type FooterProps = ComponentProps<typeof Stack>

export const Footer = (props: FooterProps) => {
  return (
    <Stack
      justify="center"
      gap="12px"
      css={{
        '@media print': {
          display: 'none',
        },
      }}
      {...props}
    />
  )
}
