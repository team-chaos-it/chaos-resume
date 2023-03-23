import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { graphql, Link as GatsbyLink } from 'gatsby'
import { Footer } from '../components/shared/footer/footer'
import { Heading } from '../components/shared/heading/Heading'
import { Link } from '../components/shared/link/link'
import { Stack } from '../components/shared/stack/Stack'
import { Text } from '../components/shared/text/Text'
import { contact, profile } from '../data/profile-de'

const Imprint = () => {
  const { name, insurance, company, vatId } = profile.personal
  const { address, phone, email } = contact
  return (
    <Stack
      direction="column"
      gap="16px"
      css={{ paddingTop: '3rem', marginInline: '4rem', marginBottom: '2.5rem' }}
    >
      <Link as={GatsbyLink} to="/">
        <Stack gap="8px" align="center">
          <FontAwesomeIcon size="lg" color="grey" icon={faChevronLeft} />
          <Text css={{ fontSize: '16px' }}>Zurück</Text>
        </Stack>
      </Link>
      <Heading size="md" as="h1" css={{ fontWeight: 800, fontSize: '20px' }}>
        Imprint
      </Heading>

      <Heading size="sm" as="h2">
        Information according to &sect; 5 TMG
      </Heading>
      <Text>
        {name}
        <br />
        {company}
        <br />
        {address.street}
        <br />
        {address.city}
      </Text>
      <Heading size="sm" as="h2">
        Contact
      </Heading>
      <Text>
        {phone}
        <br />
        {email}
      </Text>
      <Heading size="sm" as="h2">
        VAT ID
      </Heading>
      <Text>
        VAT identification number according to &sect; 27 a Value Added Tax Act:
        <br />
        {vatId}
      </Text>
      <Heading size="sm" as="h2">
        Details of professional liability insurance
      </Heading>
      <Text>
        <strong>Name and registered office of the insurer:</strong>
        <br />
        {insurance.name}
        <br />
        {insurance.address.street}
        <br />
        {insurance.address.city}
      </Text>
      <Text>
        <strong>Area of validity of the insurance:</strong>
        <br />
        {insurance.scope}
      </Text>
      <Heading size="sm" as="h2">
        Redaktionell verantwortlich
      </Heading>
      <Text>
        {name}
        <br />
        {address.street}
        <br />
        {address.city}
      </Text>
      <Heading size="sm" as="h2">
        EU Dispute Settlement
      </Heading>
      <Text>
        The European Commission provides a platform for the Online Dispute
        Resolution (ODR):
        <Text
          as="a"
          href="https://ec.europa.eu/consumers/odr/"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://ec.europa.eu/consumers/odr/
        </Text>
        .<br /> You can find our e-mail address in the imprint above.
      </Text>
      <Heading size="sm" as="h2">
        Consumer dispute resolution / Universal arbitration board
      </Heading>
      <Text>
        We are not willing or obligated to participate in dispute resolution
        proceedings before a consumer arbitration board.
      </Text>
      <Text>
        Source:
        <Text as="a" href="https://www.e-recht24.de">
          eRecht24
        </Text>
      </Text>
      <Footer css={{ marginTop: '2rem' }}>
        <Link as={GatsbyLink} to="/">
          CV
        </Link>
        <Link as={GatsbyLink} to={`/privacy-en`}>
          Privacy
        </Link>
        <Link as={GatsbyLink} to="/imprint-de">
          Deutsche Version
        </Link>
      </Footer>
    </Stack>
  )
}
export default Imprint

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`
