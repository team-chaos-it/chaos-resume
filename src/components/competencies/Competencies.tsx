import { tokens } from '../../tokens'
import { Heading } from '../shared/heading/Heading'
import { Stack } from '../shared/stack/Stack'
import { CompetenciesItem, CompetenciesItemProps } from './CompetenciesItem'

export type CompetenciesProps = {
  groups: Record<string, Array<CompetenciesItemProps>>
}

export const Competencies = ({ groups = {} }: CompetenciesProps) => {
  return (
    <section>
      <Heading size="md" css={{ marginBottom: '2rem' }}>
        Kompetenzen
      </Heading>
      <Stack direction="column" gap="3rem">
        {Object.keys(groups).map((group) => (
          <Stack
            key={group}
            direction="column"
            gap="0.5rem"
            css={{
              pageBreakInside: 'avoid',
            }}
          >
            <Heading size="sm">{group}</Heading>
            <Stack
              direction="column"
              gap="1rem"
              css={{ color: tokens.text.font.color }}
            >
              {groups[group].map((itemProps) => (
                <CompetenciesItem key={itemProps.title} {...itemProps} />
              ))}
            </Stack>
          </Stack>
        ))}
      </Stack>
    </section>
  )
}
