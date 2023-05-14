import { useTranslation } from 'gatsby-plugin-react-i18next'
import { tokens } from '../../tokens'
import { Heading } from '../shared/heading/Heading'
import { Stack } from '../shared/stack/Stack'
import { ContactItem, ContactItemProps } from './ContactItem'

export type ContactProps = {
  contacts: Array<ContactItemProps>
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
          <ContactItem
            key={c.value}
            icon={c.icon}
            type={c.type}
            value={c.value}
          />
        ))}
      </Stack>
    </section>
  )
}
