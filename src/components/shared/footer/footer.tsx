import { Stack, StackProps } from '../stack/Stack'

export type FooterProps = StackProps

export const Footer = (props: StackProps) => {
  return (
    <Stack
      justify="center"
      gap="12px"
      css={{
        padding: '20px',
        '@media print': {
          display: 'none',
        },
      }}
      {...props}
    />
  )
}
