import { base } from '../../../tokens'

export type DividerProps = {
  inset?: boolean
}

export const StackDivider = ({ inset = false, ...props }: DividerProps) => {
  return (
    <div
      css={{
        borderTop: '1px solid',
        borderLeft: '1px solid',
        borderColor: base.colors['grey-200'],
        maxWidth: inset ? '90%' : undefined,
      }}
      {...props}
    />
  )
}
