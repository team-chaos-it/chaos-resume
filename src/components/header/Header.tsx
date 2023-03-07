import * as React from 'react'
import { PageProps } from 'gatsby'

export type HeaderProps = PageProps & {
    name: string
    jobTitle: string
}

export const Header = ({name, jobTitle, ...props}: HeaderProps) => {
  return (
    <main>
      <h1
        css={{
          wordSpacing: '100vw',
        }}
      >
          { name }
      </h1>
      <h2>{jobTitle}</h2>
    </main>
  )
}
