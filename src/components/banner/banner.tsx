import {
  faCircleCheck,
  faCopy,
  faXmark,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { motion } from 'framer-motion'
import { useTranslation } from 'gatsby-plugin-react-i18next'
import * as React from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { contact } from '../../data/profile-de'
import { base } from '../../tokens'
import { Polymorphic } from '../../utils/PolymorphicUtils'
import { Stack } from '../shared/stack/Stack'
import { Text } from '../shared/text/Text'

export type BannerProps = React.PropsWithChildren & {
  onButtonClose: () => void
}

export const Banner = React.forwardRef(
  ({ as, onButtonClose, ...props }, ref) => {
    const [copied, setCopied] = React.useState(false)
    const Component = as || 'div'

    const { t } = useTranslation()
    return (
      <Component
        css={{
          justifyContent: 'space-between',
          alignItems: 'center',
          position: 'sticky',
          bottom: 0,
          paddingInline: '25px',
          borderRadius: '4px',
          backgroundColor: 'white',
          boxShadow:
            '0px 0px 2px 0px rgba(0, 0, 0, 0.04), 0px 2px 4px 0px rgba(0, 0, 0, 0.04), 0px 4px 8px 0px rgba(0, 0, 0, 0.04), 0px 8px 16px 0px rgba(0, 0, 0, 0.04), 0px 16px 32px 0px rgba(0, 0, 0, 0.04)',
          filter:
            'drop-shadow(0px 0px 2px rgba(0, 0, 0, 0.04)) drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.04)) drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.04)) drop-shadow(0px 8px 16px rgba(0, 0, 0, 0.04)) drop-shadow(0px 16px 32px rgba(0, 0, 0, 0.04))',
        }}
        ref={ref}
        {...props}
      >
        <div />
        <Stack
          align="center"
          direction="column"
          css={{ gap: '4px' }}
          as={motion.div}
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
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
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          css={{
            display: 'flex',
            alignItems: 'center',
            height: '10px',
            width: 'fit-content',
            paddingBlock: '8px',
            paddingInline: '8px',
            borderRadius: '99px',
            ':hover': { backgroundColor: base.colors['grey-100'] },
            transition: `background-color 300ms cubic-bezier(0.22, 1, 0.36, 1)`,
          }}
        >
          <FontAwesomeIcon
            color="grey"
            icon={faXmark}
            onClick={() => onButtonClose()}
          />
        </motion.div>
      </Component>
    )
  },
) as Polymorphic<'div', BannerProps>
