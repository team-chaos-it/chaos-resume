import { Stack } from '../shared/stack/Stack'
import { Heading } from '../shared/heading/Heading'
import { Text } from '../shared/text/Text'
import { tokens } from '../../tokens'
import { responsiveValue } from '../../utils/ResponsiveUtils'

export type ProjectProps = {
  title: string
  role: string
  sector: string
  from: string
  to?: string
  tasks?: Array<string>
  tools?: Array<string>
  html: string
}

export const Project = ({
  title,
  role,
  sector,
  from,
  to,
  tasks,
  tools,
  html,
  ...props
}: ProjectProps) => {
  return (
    <Stack
      direction="column"
      css={{
        pageBreakInside: 'avoid',
        position: 'relative',
        paddingBlock: '2rem',
        gap: '1rem',
        ...responsiveValue('marginLeft', { sm: '2rem', md: '4rem' }),
      }}
      {...props}
    >
      <div
        css={{
          position: 'absolute',
          border: '1px solid',
          borderColor: tokens.stack.divider.color,
          backgroundColor: '#ffffff',
          borderRadius: '100%',
          width: '15px',
          height: '15px',
          ...responsiveValue('left', {
            sm: 'calc(-2rem - 9px)',
            md: 'calc(-4rem - 9px)',
          }),
        }}
      />

      <Stack direction="column" gap="2px">
        <Heading size="sm">
          {role} - {title}
        </Heading>
        <Heading size="xs">
          {sector} | {to ? `${from} - ${to}` : `seit ${from}`}
        </Heading>
      </Stack>
      <Stack
        direction="column"
        gap="1rem"
        css={{
          ...tokens.text.font,
          p: {
            margin: 0,
          },
          ul: {
            paddingLeft: '1rem',
            li: {
              marginBlock: '3px',
            },
          },
          '* :last-child': {
            paddingBottom: 0,
            marginBottom: 0,
          },
        }}
      >
        <div dangerouslySetInnerHTML={{ __html: html }} />
        {tasks && (
          <div>
            <Text bold>Aufgaben</Text>
            <ul>
              {tasks.map((value) => (
                <li key={value}>{value}</li>
              ))}
            </ul>
          </div>
        )}
        {tools && (
          <div>
            <Text bold>Methoden & Werkzeuge</Text>
            <Text>{tools?.join(' | ')}</Text>
          </div>
        )}
      </Stack>
    </Stack>
  )
}
