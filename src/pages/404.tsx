import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link as GatsbyLink } from 'gatsby'
import { Heading } from '../components/shared/heading/Heading'
import { Link } from '../components/shared/link/Link'
import { Stack } from '../components/shared/stack/Stack'
import { Text } from '../components/shared/text/Text'
import React from 'react'
import { Helmet } from 'react-helmet'

export default () => {
  return (
    <React.Fragment>
      <Helmet title={`404 not found`} htmlAttributes={{ lang: 'en-GB' }} />
      <Stack
        direction="column"
        justify="center"
        align="center"
        gap="3rem"
        css={{
          height: '100vh',
          width: '100vw',
        }}
      >
        <Stack direction="column" gap="1.5rem" align="center">
          <Heading size="lg" textAlign="center">
            This page does not exist
          </Heading>
          <Heading size="md" textAlign="center" css={{ textTransform: 'none' }}>
            ¯\_(ツ)_/¯
          </Heading>
          <Link as={GatsbyLink} to="/">
            <Stack gap="8px" align="center">
              <FontAwesomeIcon size="lg" color="grey" icon={faChevronLeft} />
              <Text css={{ fontSize: '16px' }}>Take me back</Text>
            </Stack>
          </Link>
        </Stack>
      </Stack>
    </React.Fragment>
  )
}
