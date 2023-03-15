import { forwardRef } from 'react'
import { Polymorphic } from '../../../utils/PolymorphicUtils'
import { tokens } from '../../../tokens'

export type TextProps = {
  bold?: boolean
}

export const Text = forwardRef(({ as = 'p', bold = false, ...props }, ref) => {
  const Component = as || 'p'

  return (
    <Component
      ref={ref}
      css={{
        margin: 0,
        ...tokens.text.font,
        fontWeight: bold ? '700' : undefined,
      }}
      {...props}
    />
  )
}) as Polymorphic<'p', TextProps>
