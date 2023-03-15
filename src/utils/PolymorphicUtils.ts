import {
  ComponentPropsWithoutRef,
  ComponentPropsWithRef,
  ElementType,
  ForwardRefExoticComponent,
  PropsWithChildren,
  ReactElement,
} from 'react'

type AsProp<TElement extends ElementType> = {
  as?: TElement
}

export type PolymorphicComponentProp<
  TElement extends ElementType,
  TProps = object,
> = PropsWithChildren<TProps & AsProp<TElement>> &
  Omit<ComponentPropsWithoutRef<TElement>, keyof (AsProp<TElement> & TProps)>

export type PolymorphicRef<TElement extends ElementType> =
  ComponentPropsWithRef<TElement>['ref']

export type PolymorphicComponentPropWithRef<
  TElement extends ElementType,
  TProps = object,
> = PolymorphicComponentProp<TElement, TProps> & {
  ref?: PolymorphicRef<TElement>
}

export interface Polymorphic<
  IntrinsicElementString extends ElementType,
  // eslint-disable-next-line @typescript-eslint/ban-types
  OwnProps = {},
> extends ForwardRefExoticComponent<
    PolymorphicComponentPropWithRef<IntrinsicElementString, OwnProps>
  > {
  <As extends ElementType = IntrinsicElementString>(
    props: PolymorphicComponentPropWithRef<As, OwnProps>,
  ): ReactElement | null
}