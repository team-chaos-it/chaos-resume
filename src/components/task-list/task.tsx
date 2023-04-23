import React from 'react'

type TaskProps = React.PropsWithChildren & { fade?: boolean }

export const Task = ({ children, fade, ...props }: TaskProps) => {
  return (
    <li {...props}>
      {fade && (
        <div
          css={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            top: 0,
            left: 0,
            background:
              'linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%)',
          }}
        />
      )}
      {children}
    </li>
  )
}
