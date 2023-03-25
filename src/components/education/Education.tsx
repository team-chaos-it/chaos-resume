import { useTranslation } from 'gatsby-plugin-react-i18next'
import { tokens } from '../../tokens'
import { Heading } from '../shared/heading/Heading'
import { Stack } from '../shared/stack/Stack'
import { EducationItem, EducationItemProps } from './EducationItem'

export type EducationProps = {
  items: Array<EducationItemProps>
}

export const Education = ({ items = [] }: EducationProps) => {
  const { t } = useTranslation()
  return (
    <section>
      <Heading
        size="md"
        css={{ marginBottom: '2rem' }}
        textAlign={{ sm: 'center', md: 'start' }}
      >
        {t('education')}
      </Heading>
      <Stack
        direction="column"
        gap="3rem"
        css={{ color: tokens.text.font.color }}
      >
        {items.map((itemProps) => (
          <EducationItem key={itemProps.title} {...itemProps} />
        ))}
      </Stack>
    </section>
  )
}
