import { Stack } from '../shared/stack/Stack'
import { Heading } from '../shared/heading/Heading'
import { tokens } from '../../tokens'
import {
  CertificationsItem,
  CertificationsItemProps,
} from './CertificationsItem'

export type CertificationsProps = {
  items: Array<CertificationsItemProps>
}

export const Certifications = ({ items = [] }: CertificationsProps) => {
  return (
    <section>
      <Heading
        size="md"
        css={{ marginBottom: '2rem' }}
        textAlign={{ sm: 'center', md: 'start' }}
      >
        Zertifikate
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
