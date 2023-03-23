import { IconDefinition } from '@fortawesome/free-brands-svg-icons'
import { useTranslation } from 'react-i18next'
import { tokens } from '../../tokens'
import { Heading } from '../shared/heading/Heading'
import { Stack } from '../shared/stack/Stack'
import { ContactItem } from './ContactItem'

type ContactInformation = {
  icon: IconDefinition
  value: string
}

export type ContactProps = {
  contacts: Array<ContactInformation>
}

export const Contact = ({ contacts }: ContactProps) => {
  const { t } = useTranslation()
  return (
    <section>
      <Heading
        size="md"
        textAlign={{ sm: 'center', md: 'start' }}
        css={[{ marginBottom: '2rem' }]}
      >
        {t('contact')}
      </Heading>
      <Stack
        direction="column"
        gap="0.75rem"
        align={{ sm: 'center', md: 'start' }}
        css={{ color: tokens.text.font.color }}
      >
        {contacts.map((c) => (
          <ContactItem key={c.value} icon={c.icon}>
            {c.value}
          </ContactItem>
        ))}
      </Stack>
    </section>
  )
}
