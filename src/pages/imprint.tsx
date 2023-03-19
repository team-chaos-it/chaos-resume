import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from '../components/shared/link/link'
import { Footer } from '../components/shared/footer/footer'
import { Heading } from '../components/shared/heading/Heading'
import { Stack } from '../components/shared/stack/Stack'
import { Text } from '../components/shared/text/Text'
import { contact, profile } from '../data/profile'

const Imprint = () => {
  const { name, insurance, company, vatId } = profile.personal
  const { address, phone, email } = contact
  return (
    <Stack
      direction="column"
      gap="16px"
      css={{ paddingTop: '3rem', marginInline: '4rem', marginBottom: '2.5rem' }}
    >
      <Link to="/">
        <Stack gap="8px" align="center">
          <FontAwesomeIcon size="lg" color="grey" icon={faChevronLeft} />
          <Text css={{ fontSize: '16px' }}>Zurück</Text>
        </Stack>
      </Link>
      <Heading size="md" as="h1" css={{ fontWeight: 800, fontSize: '20px' }}>
        Impressum
      </Heading>

      <Heading size="sm" as="h2">
        Angaben gem&auml;&szlig; &sect; 5 TMG
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
        Kontakt
      </Heading>
      <Text>
        {phone}
        <br />
        {email}
      </Text>
      <Heading size="sm" as="h2">
        Umsatzsteuer-ID
      </Heading>
      <Text>
        Umsatzsteuer-Identifikationsnummer gem&auml;&szlig; &sect; 27 a
        Umsatzsteuergesetz:
        <br />
        {vatId}
      </Text>
      <Heading size="sm" as="h2">
        Angaben zur Berufs&shy;haftpflicht&shy;versicherung
      </Heading>
      <Text>
        <strong>Name und Sitz des Versicherers:</strong>
        <br />
        {insurance.name}
        <br />
        {insurance.address.street}
        <br />
        {insurance.address.city}
      </Text>
      <Text>
        <strong>Geltungsraum der Versicherung:</strong>
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
        EU-Streitschlichtung
      </Heading>
      <Text>
        Die Europ&auml;ische Kommission stellt eine Plattform zur
        Online-Streitbeilegung (OS) bereit:
        <Text
          as="a"
          href="https://ec.europa.eu/consumers/odr/"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://ec.europa.eu/consumers/odr/
        </Text>
        .<br /> Unsere E-Mail-Adresse finden Sie oben im Impressum.
      </Text>
      <Heading size="sm" as="h2">
        Verbraucher&shy;streit&shy;beilegung/Universal&shy;schlichtungs&shy;stelle
      </Heading>
      <Text>
        Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren
        vor einer Verbraucherschlichtungsstelle teilzunehmen.
      </Text>
      <Text>
        Quelle:
        <Text as="a" href="https://www.e-recht24.de">
          eRecht24
        </Text>
      </Text>
      <Footer css={{ marginTop: '2rem' }}>
        <Link to="/">CV</Link>
        <Link to="/privacy">Datenschutz</Link>
      </Footer>
    </Stack>
  )
}
export default Imprint
