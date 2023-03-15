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
      <Heading size="md" css={{ marginBottom: '2rem' }}>
        Zertifikate
      </Heading>
      <Stack
        direction="column"
        gap="3rem"
        css={{ color: tokens.text.font.color }}
      >
        {items.map((itemProps) => (
          <CertificationsItem {...itemProps} />
        ))}
      </Stack>
    </section>
  )
}
