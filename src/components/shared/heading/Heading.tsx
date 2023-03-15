import { CSSProperties, forwardRef } from 'react'
import { Polymorphic } from '../../../utils/PolymorphicUtils'
import { tokens } from '../../../tokens'

export type HeadingProps = {
  size: 'xs' | 'sm' | 'md' | 'lg'
  center?: boolean
}

export const Heading = forwardRef(
  ({ as = 'p', size, center = false, ...props }, ref) => {
    const Component = as || 'p'

    return (
      <Component
        ref={ref}
        css={{
          margin: 0,
          textAlign: center ? 'center' : undefined,
          width: center ? '100%' : undefined,
          ...(tokens.heading[size].font as CSSProperties),
        }}
        {...props}
      />
    )
  },
) as Polymorphic<'p', HeadingProps>
