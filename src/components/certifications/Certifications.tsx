import { useTranslation } from 'react-i18next'
import { tokens } from '../../tokens'
import { Heading } from '../shared/heading/Heading'
import { Stack } from '../shared/stack/Stack'
import {
  CertificationsItem,
  CertificationsItemProps,
} from './CertificationsItem'

export type CertificationsProps = {
  items: Array<CertificationsItemProps>
}

export const Certifications = ({ items = [] }: CertificationsProps) => {
  const { t } = useTranslation()
  return (
    <section>
      <Heading
        size="md"
        css={{ marginBottom: '2rem' }}
        textAlign={{ sm: 'center', md: 'start' }}
      >
        {t('certificates')}
      </Heading>
      <Stack
        direction="column"
        gap="3rem"
        css={{ color: tokens.text.font.color }}
      >
        {items.map((itemProps) => (
          <CertificationsItem key={itemProps.title} {...itemProps} />
        ))}
      </Stack>
    </section>
  )
}
