import { base } from '../../../tokens'
import {
  ResponsiveCSSObject,
  responsiveValue,
} from '../../../utils/ResponsiveUtils'

export type DividerProps = {
  inset?: boolean
  maxWidth: ResponsiveCSSObject<'maxWidth'>
}

export const StackDivider = ({ maxWidth, ...props }: DividerProps) => {
  return (
    <div
      css={{
        borderTop: '1px solid',
        borderLeft: '1px solid',
        borderColor: base.colors['grey-200'],
        ...responsiveValue('maxWidth', maxWidth),
      }}
      {...props}
    />
  )
}
