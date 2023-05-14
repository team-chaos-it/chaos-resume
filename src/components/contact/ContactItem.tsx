import { IconDefinition } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { tokens } from '../../tokens'
import { Stack } from '../shared/stack/Stack'
import { Text } from '../shared/text/Text'

export type ContactItemProps = {
  icon: IconDefinition
  value: string
  type?: string
}

export const ContactItem = ({
  icon,
  type,
  value,
  ...props
}: ContactItemProps) => {
  return (
    <Stack gap="1.25rem" align="center">
      <FontAwesomeIcon
        icon={icon}
        color={tokens.text.font.color}
        css={{ width: '1rem', height: '1rem' }}
      />
      {type === 'link' ? (
        <Text
          as="a"
          href={'https://' + value}
          target="_blank"
          css={{
            '@media print': {
              textDecoration: 'none',
            },
          }}
          {...props}
        >
          {value}
        </Text>
      ) : (
        <Text {...props}>{value}</Text>
      )}
    </Stack>
  )
}
