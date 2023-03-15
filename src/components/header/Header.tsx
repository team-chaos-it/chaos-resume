import * as React from 'react'
import { Heading } from '../shared/heading/Heading'
import { Stack } from '../shared/stack/Stack'
import { base } from '../../tokens'

export type HeaderProps = {
  name: string
  jobTitle: string
  image: string
}

export const Header = ({ name, jobTitle, image }: HeaderProps) => {
  return (
    <React.Fragment>
      <thead
        css={{
          zIndex: 1,
          backgroundColor: '#fff',
          display: 'none',
          '@media print': {
            display: 'table-header-group',
            pageBreakBefore: 'avoid',
          },
        }}
      >
        <Stack
          direction="column"
          gap="1rem"
          css={{
            marginInline: '4rem',
          }}
        >
          <Heading
            as="h1"
            size="lg"
            center
            css={{
              wordSpacing: '100vw',
            }}
          >
            {name}
          </Heading>

          <Stack
            css={{
              marginRight: '5rem',
              borderBlock: '1px solid',
              borderBlockColor: base.colors['grey-200'],
              paddingBlock: '1.25rem',
              width: '100%',
            }}
          >
            <Heading as="h2" size="md" center>
              {jobTitle}
            </Heading>
          </Stack>
        </Stack>
        <div
          css={{
            marginTop: '2.5rem',
            marginBottom: '3rem',
            borderBottom: '7px solid',
            borderBottomColor: base.colors['grey-100'],
          }}
        ></div>
      </thead>
      <div
        css={{
          zIndex: 1,
          backgroundColor: '#ffffff',
          position: 'relative',
          borderBottom: '7px solid',
          borderBottomColor: base.colors['grey-100'],
          paddingTop: '3.5rem',
          paddingBottom: '2.5rem',
          marginBottom: '3rem',
          '@media print': {
            position: 'absolute',
            top: 0,
            paddingTop: 0,
          },
        }}
      >
        <Stack
          direction="column"
          gap="1rem"
          css={{
            marginInline: '4rem',
          }}
        >
          <Heading
            as="h1"
            size="lg"
            css={{
              wordSpacing: '100vw',
            }}
          >
            {name}
          </Heading>

          <Stack
            css={{
              marginRight: '5rem',
              borderBlock: '1px solid',
              borderBlockColor: base.colors['grey-200'],
              paddingBlock: '1.25rem',
            }}
          >
            <Heading as="h2" size="md">
              {jobTitle}
            </Heading>
          </Stack>
        </Stack>

        <img
          css={{
            width: '190px',
            height: '190px',
            position: 'absolute',
            top: '1.25rem',
            right: '2rem',
            border: '1.5rem solid white',
            borderRadius: '100%',
            backgroundColor: 'black',
            '@media print': {
              top: '-1.25rem',
            },
          }}
          src={image}
        />
      </div>
    </React.Fragment>
  )
}
