import { faCircleCheck, faCopy } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useTranslation } from 'gatsby-plugin-react-i18next'
import * as React from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { contact } from '../../data/profile-de'
import { base } from '../../tokens'
import { Polymorphic } from '../../utils/PolymorphicUtils'
import { Stack } from '../shared/stack/Stack'
import { Text } from '../shared/text/Text'

export const Banner = React.forwardRef(({ as, ...props }, ref) => {
  const [copied, setCopied] = React.useState(false)

  const { t } = useTranslation()
  return (
    <Stack
      align="center"
      justify="center"
      direction="column"
      gap="4px"
      css={{
        position: 'sticky',
        bottom: 0,
        paddingInline: '25px',
        borderRadius: '4px',
        backgroundColor: 'white',
        paddingBlock: '25px',
        boxShadow:
          '0px 0px 2px 0px rgba(0, 0, 0, 0.04), 0px 2px 4px 0px rgba(0, 0, 0, 0.04), 0px 4px 8px 0px rgba(0, 0, 0, 0.04), 0px 8px 16px 0px rgba(0, 0, 0, 0.04), 0px 16px 32px 0px rgba(0, 0, 0, 0.04)',
        filter:
          'drop-shadow(0px 0px 2px rgba(0, 0, 0, 0.04)) drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.04)) drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.04)) drop-shadow(0px 8px 16px rgba(0, 0, 0, 0.04)) drop-shadow(0px 16px 32px rgba(0, 0, 0, 0.04))',
      }}
      ref={ref}
      {...props}
    >
      <Text> {t('getFullCv')}</Text>
      <CopyToClipboard
        text={contact.email}
        onCopy={() => setCopied(true)}
        css={{ cursor: 'pointer' }}
      >
        <Stack
          css={[
            {
              color: base.colors.highlight,
              position: 'relative',
            },
            !copied && {
              transition: `600ms cubic-bezier(0.22, 1, 0.36, 1)`,
              filter: `contrast(0.96) brightness(1.04)`,
              ':active': {
                transform: `scale(1.02)`,
              },
            },
          ]}
        >
          <Text css={{ color: 'inherit', paddingRight: '16px' }}>
            {contact.email}
          </Text>
          {!copied && (
            <FontAwesomeIcon
              size="sm"
              icon={faCopy}
              css={{ position: 'absolute', right: 0, bottom: 0 }}
            />
          )}
          {copied && (
            <FontAwesomeIcon
              size="sm"
              icon={faCircleCheck}
              css={{ position: 'absolute', top: 3, right: 0, bottom: 0 }}
            />
          )}
        </Stack>
      </CopyToClipboard>
    </Stack>
  )
}) as Polymorphic<'div'>
