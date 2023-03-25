import { forwardRef } from 'react'
import { base } from '../../../tokens'
import { Polymorphic } from '../../../utils/PolymorphicUtils'
import {
  ResponsiveCSSObject,
  responsiveValue,
} from '../../../utils/ResponsiveUtils'

export type DividerProps = {
  inset?: boolean
  maxWidth: ResponsiveCSSObject<'maxWidth'>
}

export const StackDivider = forwardRef(({ as, maxWidth, ...props }, ref) => {
  const Component = as || 'div'
  return (
    <Component
      css={{
        borderTop: '1px solid',
        borderLeft: '1px solid',
        borderColor: base.colors['grey-200'],
        ...responsiveValue('maxWidth', maxWidth),
      }}
      {...props}
      ref={ref}
    />
  )
}) as Polymorphic<'div', DividerProps>
