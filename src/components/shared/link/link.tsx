import { Link as GatsbyLink, GatsbyLinkProps } from 'gatsby'
import { PropsWithoutRef } from 'react'
import { base, tokens } from '../../../tokens'

export type FooterLinkProps = PropsWithoutRef<
  GatsbyLinkProps<Record<string, never>>
>

export const Link = (props: FooterLinkProps) => {
  return (
    <GatsbyLink
      css={{
        ...tokens.text.font,
        textDecoration: 'none',
        width: 'fit-content',
        paddingBlock: '6px',
        paddingInline: '10px',
        borderRadius: '99px',
        ':hover': { backgroundColor: base.colors['grey-100'] },
        transition: `background-color 300ms cubic-bezier(0.22, 1, 0.36, 1)`,
      }}
      {...props}
    />
  )
}
