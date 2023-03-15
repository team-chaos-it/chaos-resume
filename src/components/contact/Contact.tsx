import { Stack } from '../shared/stack/Stack'
import { Heading } from '../shared/heading/Heading'
import {
  faPhone,
  faEnvelope,
  faLocationDot,
} from '@fortawesome/free-solid-svg-icons'
import { tokens } from '../../tokens'
import { faXing } from '@fortawesome/free-brands-svg-icons'
import { ContactItem } from './ContactItem'

export type ContactProps = {
  phone: string
  email: string
  xing: string
  city: string
}

export const Contact = ({ phone, email, xing, city }: ContactProps) => {
  return (
    <section>
      <Heading size="md" css={{ marginBottom: '2rem' }}>
        Kontakt
      </Heading>
      <Stack
        direction="column"
        gap="0.75rem"
        css={{ color: tokens.text.font.color }}
      >
        <ContactItem icon={faPhone}>{phone}</ContactItem>
        <ContactItem icon={faEnvelope}>{email}</ContactItem>
        <ContactItem icon={faXing}>{xing}</ContactItem>
        <ContactItem icon={faLocationDot}>{city}</ContactItem>
      </Stack>
    </section>
  )
}
