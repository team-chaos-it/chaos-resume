import { forwardRef } from 'react'
import { Polymorphic } from '../../../utils/PolymorphicUtils'
import { CSSObject } from '@emotion/react'

export type StackProps = {
  align?: CSSObject['alignItems']
  justify?: CSSObject['justifyContent']
  gap?: CSSObject['gap']
  direction?: CSSObject['flexDirection']
  wrap?: CSSObject['flexWrap']
}

export const Stack = forwardRef(
  ({ as, align, justify, gap, direction, wrap, ...props }, ref) => {
    const Component = as || 'div'

    return (
      <Component
        css={[
          {
            display: 'flex',
            gap,
            alignItems: align,
            justifyContent: justify,
            flexDirection: direction,
            flexWrap: wrap,
          },
        ]}
        {...props}
        ref={ref}
      />
    )
  },
) as Polymorphic<'div', StackProps>
