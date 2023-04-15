import { CSSObject } from '@emotion/react'

const sizes = ['sm', 'md', 'lg']
const breakpoints = [0, 790, 1200]

type Sizes = 'sm' | 'md' | 'lg'

type CSSValue = keyof CSSObject

type PartialBreakpointMap<T extends CSSValue> = Partial<
  Record<Sizes, CSSObject[T]>
>

export type ResponsiveCSSObject<T extends CSSValue> =
  | CSSObject[T]
  | PartialBreakpointMap<T>

const isBreakpointsMap = <T extends CSSValue>(value: ResponsiveCSSObject<T>) =>
  typeof value === 'object' && value != null && !Array.isArray(value)

export const responsiveValue = <T extends CSSValue>(
  propertyName: T,
  propertyValue: ResponsiveCSSObject<T>,
) => {
  if (!isBreakpointsMap<T>(propertyValue)) {
    return { [propertyName]: propertyValue }
  }

  const responsiveValues: Record<
    string,
    Record<CSSValue, ResponsiveCSSObject<CSSValue>>
  > = {}

  breakpoints.map(
    (breakpoint, index) =>
      (responsiveValues[`@media (min-width: ${breakpoint}px)`] = {
        [propertyName]: (propertyValue as PartialBreakpointMap<T>)[
          sizes[index] as Sizes
        ],
      }),
  )
  return responsiveValues
}
