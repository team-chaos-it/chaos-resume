import { Stack } from '../shared/stack/Stack'
import { Heading } from '../shared/heading/Heading'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPersonDigging } from '@fortawesome/free-solid-svg-icons'
import { base } from '../../tokens'

export type UnderConstructionProps = Record<string, never>

export const UnderConstruction = (props: UnderConstructionProps) => {
  return (
    <Stack
      direction="column"
      justify="center"
      align="center"
      gap="3rem"
      css={{
        height: '100vh',
        width: '100vw',
      }}
      {...props}
    >
      <FontAwesomeIcon
        icon={faPersonDigging}
        size="10x"
        color={base.colors['grey-100']}
      />

      <Stack direction="column" gap="1.5rem">
        <Heading size="lg" textAlign="center">
          Under Construction
        </Heading>
        <Heading size="md" textAlign="center" css={{ textTransform: 'none' }}>
          Diese Seite befindet sich gerade im Aufbau
        </Heading>
      </Stack>
    </Stack>
  )
}
