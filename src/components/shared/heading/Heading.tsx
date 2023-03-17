import { CSSProperties, forwardRef } from 'react'
import { Polymorphic } from '../../../utils/PolymorphicUtils'
import { tokens } from '../../../tokens'
import {
  ResponsiveCSSObject,
  responsiveValue,
} from '../../../utils/ResponsiveUtils'

export type HeadingProps = {
  size: 'xs' | 'sm' | 'md' | 'lg'
  textAlign?: ResponsiveCSSObject<'textAlign'>
}

export const Heading = forwardRef(
  ({ as = 'p', size, textAlign, ...props }, ref) => {
    const Component = as || 'p'

    return (
      <Component
        ref={ref}
        css={{
          margin: 0,
          ...responsiveValue('textAlign', textAlign),
          width: '100%',
          ...(tokens.heading[size].font as CSSProperties),
        }}
        {...props}
      />
    )
  },
) as Polymorphic<'p', HeadingProps>
