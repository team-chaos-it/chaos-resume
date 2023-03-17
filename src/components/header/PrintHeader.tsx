import { base } from '../../tokens'
import { responsiveValue } from '../../utils/ResponsiveUtils'
import { Heading } from '../shared/heading/Heading'
import { Stack } from '../shared/stack/Stack'

export type PrintHeaderProps = {
  name: string
  jobTitle: string
}

export const PrintHeader = ({ name, jobTitle, ...props }: PrintHeaderProps) => {
  return (
    <thead
      css={{
        zIndex: 1,
        backgroundColor: '#fff',
        ...responsiveValue('display', { sm: 'block', md: 'none' }),
        '@media print': {
          display: 'table-header-group',
          pageBreakBefore: 'avoid',
        },
      }}
      {...props}
    >
      <Stack
        direction="column"
        gap={{ sm: '2rem', md: '1rem' }}
        css={[
          responsiveValue('marginInline', { sm: '2rem', md: '4rem' }),
          responsiveValue('marginTop', { sm: '3rem', md: '0' }),
          responsiveValue('marginBottom', { sm: '2rem', md: '0' }),
        ]}
      >
        <Heading
          as="h1"
          size="lg"
          textAlign="center"
          css={{
            wordSpacing: '100vw',
          }}
        >
          {name}
        </Heading>

        <Stack
          css={{
            borderBlock: '1px solid',
            borderBlockColor: base.colors['grey-200'],
            paddingBlock: '1.25rem',
            width: '100%',
          }}
        >
          <Heading as="h2" size="md" textAlign="center">
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
          ...responsiveValue('display', { sm: 'none', md: 'block' }),
        }}
      />
    </thead>
  )
}
