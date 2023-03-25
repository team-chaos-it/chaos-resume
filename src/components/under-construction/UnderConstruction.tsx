import { faPersonDigging } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useTranslation } from 'gatsby-plugin-react-i18next'
import { base } from '../../tokens'
import { Heading } from '../shared/heading/Heading'
import { Stack } from '../shared/stack/Stack'

export type UnderConstructionProps = Record<string, never>

export const UnderConstruction = (props: UnderConstructionProps) => {
  const { t } = useTranslation()
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
          {t('underConstrunction.heading')}
        </Heading>
        <Heading size="md" textAlign="center" css={{ textTransform: 'none' }}>
          {t('underConstrunction.text')}
        </Heading>
      </Stack>
    </Stack>
  )
}
