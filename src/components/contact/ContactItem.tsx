import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Stack } from '../shared/stack/Stack'
import { Text } from '../shared/text/Text'
import { PropsWithChildren } from 'react'
import { IconDefinition } from '@fortawesome/free-brands-svg-icons'
import { tokens } from '../../tokens'

export type ContactItemProps = PropsWithChildren & {
  icon: IconDefinition
}

export const ContactItem = ({ icon, ...props }: ContactItemProps) => {
  return (
    <Stack gap="1.25rem" align="center">
      <FontAwesomeIcon
        icon={icon}
        color={tokens.text.font.color}
        css={{ width: '1rem', height: '1rem' }}
      />
      <Text {...props} />
    </Stack>
  )
}
