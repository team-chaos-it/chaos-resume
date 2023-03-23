import { useTranslation } from 'react-i18next'
import { tokens } from '../../tokens'
import { Heading } from '../shared/heading/Heading'
import { Stack } from '../shared/stack/Stack'
import { CompetenciesItem, CompetenciesItemProps } from './CompetenciesItem'

export type CompetenciesProps = {
  groups: Record<string, Array<CompetenciesItemProps>>
}

export const Competencies = ({ groups = {} }: CompetenciesProps) => {
  const { t } = useTranslation()
  return (
    <section>
      <Heading
        size="md"
        textAlign={{ sm: 'center', md: 'start' }}
        css={{ marginBottom: '2rem' }}
      >
        {t('competencies')}
      </Heading>
      <Stack
        direction="column"
        gap="3rem"
        align={{ sm: 'center', md: 'start' }}
      >
        {Object.keys(groups).map((group) => (
          <Stack
            key={group}
            direction="column"
            gap="0.5rem"
            css={{
              pageBreakInside: 'avoid',
            }}
          >
            <Heading size="sm" textAlign={{ sm: 'center', md: 'start' }}>
              {group}
            </Heading>
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
