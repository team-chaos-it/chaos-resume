import { base } from '../../tokens'
import { responsiveValue } from '../../utils/ResponsiveUtils'
import { Heading } from '../shared/heading/Heading'
import { Stack } from '../shared/stack/Stack'

export type ScreenHeaderProps = {
  name: string
  jobTitle: string
  image: string
}

export const ScreenHeader = ({
  name,
  jobTitle,
  image,
  ...props
}: ScreenHeaderProps) => {
  return (
    <thead
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
        ...responsiveValue('display', { sm: 'none', md: 'block' }),
      }}
      {...props}
    >
      <Stack
        as="tr"
        direction="column"
        gap="1rem"
        css={{
          marginInline: '4rem',
        }}
      >
        <th>
          <Heading
            as="h1"
            size="lg"
            css={{
              wordSpacing: '100vw',
              textAlign: 'start',
            }}
          >
            {name}
          </Heading>
        </th>
        <td>
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
        </td>
      </Stack>

      <tr>
        <td>
          <img
            alt={`Black and white portrait of ${name}}`}
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
        </td>
      </tr>
    </thead>
  )
}
