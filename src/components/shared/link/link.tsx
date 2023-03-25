import { forwardRef } from 'react'
import { base, tokens } from '../../../tokens'
import { Polymorphic } from '../../../utils/PolymorphicUtils'

export const Link = forwardRef(({ as, ...props }, ref) => {
  const Component = as || 'a'

  return (
    <Component
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
      ref={ref}
    />
  )
}) as Polymorphic<'a'>
