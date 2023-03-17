import { CSSObject } from '@emotion/react'

const sizes = ['sm', 'md', 'lg']
const breakpoints = [0, 600, 1200]

type Sizes = (typeof sizes)[number]

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

  const responsiveValues: PartialBreakpointMap<T> = {}

  breakpoints.map(
    (breakpoint, index) =>
      (responsiveValues[`@media (min-width: ${breakpoint}px)`] = {
        [propertyName]: (propertyValue as PartialBreakpointMap<T>)[
          sizes[index]
        ],
      }),
  )
  return responsiveValues
}
