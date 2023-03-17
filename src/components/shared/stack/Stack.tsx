import { forwardRef } from 'react'
import { Polymorphic } from '../../../utils/PolymorphicUtils'
import {
  ResponsiveCSSObject,
  responsiveValue,
} from '../../../utils/ResponsiveUtils'

export type StackProps = {
  align?: ResponsiveCSSObject<'alignItems'>
  justify?: ResponsiveCSSObject<'justifyContent'>
  gap?: ResponsiveCSSObject<'gap'>
  direction?: ResponsiveCSSObject<'flexDirection'>
  wrap?: ResponsiveCSSObject<'flexWrap'>
}

export const Stack = forwardRef(
  ({ as, align, justify, gap, direction, wrap, ...props }, ref) => {
    const Component = as || 'div'

    return (
      <Component
        css={[
          {
            display: 'flex',
          },
          responsiveValue('gap', gap),
          responsiveValue('alignItems', align),
          responsiveValue('justifyContent', justify),
          responsiveValue('flexWrap', wrap),
          responsiveValue('flexDirection', direction),
        ]}
        {...props}
        ref={ref}
      />
    )
  },
) as Polymorphic<'div', StackProps>
