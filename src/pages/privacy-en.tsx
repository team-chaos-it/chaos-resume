import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { graphql, Link as GatsbyLink } from 'gatsby'
import { Footer } from '../components/shared/footer/Footer'
import { Heading } from '../components/shared/heading/Heading'
import { Link } from '../components/shared/link/Link'
import { Stack } from '../components/shared/stack/Stack'
import { Text } from '../components/shared/text/Text'
import { contact, profile } from '../data/profile-de'
import { settings } from '../data/settings'
import React from 'react'
import { Helmet } from 'react-helmet'

const Privacy = () => {
  const { name } = profile.personal
  const { address, phone, email } = contact
  return (
    <React.Fragment>
      <Helmet title={`Data protection`} htmlAttributes={{ lang: 'en-GB' }} />
      <Stack
        as="main"
        direction="column"
        justify="space-between"
        gap="16px"
        css={{
          paddingTop: '3rem',
          marginInline: '4rem',
          height: 'calc(100vh - 5.5rem)',
        }}
      >
        <Stack direction="column" gap="16px">
          <Link as={GatsbyLink} to="/">
            <Stack gap="8px" align="center">
              <FontAwesomeIcon size="lg" color="grey" icon={faChevronLeft} />
              <Text css={{ fontSize: '16px' }}>Back</Text>
            </Stack>
          </Link>
          <Heading
            size="md"
            as="h1"
            css={{ fontWeight: 800, fontSize: '20px' }}
          >
            Data Protection
          </Heading>
          <Heading size="md" as="h2" css={{ letterSpacing: '3px' }}>
            1. Data protection overview
          </Heading>
          <Heading size="sm" as="h3">
            General notes
          </Heading>
          <Text>
            The following notices provide a simple overview of what happens to
            your personal data when you visit this website. Personal data is any
            data by which you can be personally identified. For detailed
            information on the subject of data protection, please refer to our
            privacy policy listed below this text.
          </Text>
          <Heading size="sm" as="h3">
            Data collection on this website
          </Heading>
          <Heading size="xs" as="h4">
            Who is responsible for the data collection on this website?
          </Heading>
          <Text>
            Data processing on this website is carried out by the website
            operator. You can find the contact details of the website operator
            in the section &quot;Information about the responsible party&quot;
            in this data protection declaration.
          </Text>
          <Heading size="xs" as="h4">
            How do we collect your data?
          </Heading>
          <Text>
            On the one hand, your data is collected when you provide it to us.
            This can be, for example, data that you enter in a contact form.
          </Text>
          <Text>
            Other data is collected automatically or after your consent when you
            visit the website by our IT systems. This is mainly technical data
            (e.g. Internet browser, operating system or time of page view). The
            collection of this data takes place automatically as soon as you
            enter this website.
          </Text>
          <Heading size="xs" as="h4">
            What do we use your data for?
          </Heading>
          <Text>
            Some of the data is collected to ensure error-free provision of the
            website. Other data may be used to analyze your user behavior.
          </Text>
          <Heading size="xs" as="h4">
            What rights do you have regarding your data?
          </Heading>
          <Text>
            You have the right at any time to receive information free of charge
            about the origin, recipient and purpose of your stored personal
            data. You also have a right to request the correction or deletion of
            this data. If you have given your consent to data processing, you
            can revoke this consent at any time for the future. You also have
            the right to request the restriction of the processing of your
            personal data under certain circumstances. Furthermore, you have the
            right to lodge a complaint with the competent supervisory authority.
          </Text>
          <Text>
            For this purpose, as well as for further questions on the subject of
            data protection, you can contact us at any time.
          </Text>
          <Heading size="md" as="h2" css={{ letterSpacing: '3px' }}>
            2. Hosting
          </Heading>
          <Text>
            We host the content of our website with the following provider:
          </Text>
          <Heading size="sm" as="h3">
            External Hosting
          </Heading>
          <Text>
            This website is hosted externally. The personal data collected on
            this website is stored on the servers of the hoster(s). This may
            include, but is not limited to, IP addresses, contact requests, meta
            and communication data, contractual data, contact details, names,
            website accesses and other data generated via a website.
          </Text>
          <Text>
            External hosting is carried out for the purpose of contract
            fulfillment vis-à-vis our potential and existing customers (Art. 6
            para. 1 lit. b DSGVO) and in the interest of a secure, fast and
            efficient provision of our online offer by a professional provider
            (Art. 6 para. 1 lit. f DSGVO). Insofar as a corresponding consent
            has been requested, the processing is carried out exclusively on the
            basis of Art. 6 para. 1 lit. a DSGVO and § 25 para. 1 TTDSG, insofar
            as the consent includes the storage of cookies or access to
            information in the user`&apos;`s terminal device (e.g. device
            fingerprinting) as defined by the TTDSG. The consent can be revoked
            at any time.
          </Text>
          <Text>
            Our hoster will only process your data to the extent necessary to
            fulfill their service obligations and follow our instructions
            regarding this data.
          </Text>
          <Text>We use the following hoster:</Text>
          <Text>
            GitHub, Inc.
            <br />
            88 Colin P Kelly Jr Street <br />
            San Francisco, CA 94107 <br />
            United States
          </Text>
          <Heading size="md" as="h2" css={{ letterSpacing: '3px' }}>
            3. General notes and mandatory information
          </Heading>
          <Heading size="sm" as="h3">
            Data Protection
          </Heading>
          <Text>
            The operators of these pages take the protection of your personal
            data very seriously. We treat your personal data confidentially and
            in accordance with the statutory data protection regulations and
            this privacy policy.
          </Text>
          <Text>
            When you use this website, various personal data are collected.
            Personal data is data with which you can be personally identified.
            This privacy policy explains what data we collect and what we use it
            for. It also explains how and for what purpose this is done.
          </Text>
          <Text>
            We would like to point out that data transmission on the Internet
            (e.g. when communicating by e-mail) can have security gaps. Complete
            protection of data against access by third parties is not possible.
          </Text>
          <Heading size="sm" as="h3">
            Note on the responsible entity
          </Heading>
          <Text>
            The responsible party for data processing on this website is:
          </Text>
          <Text>
            {name}
            <br />
            {address.street}
            <br />
            {address.zip} {address.city}
          </Text>
          <Text>
            Phone: {phone}
            <br />
            E-mail: {email}
          </Text>
          <Text>
            The responsible party is the natural or legal person who alone or
            jointly with others determines the purposes and means of the
            processing of personal data (e.g. names, e-mail addresses, etc.).
          </Text>
          <Heading size="sm" as="h3">
            Speicherdauer
          </Heading>
          <Text>
            Unless a more specific storage period has been specified within this
            privacy policy, your personal data will remain with us until the
            purpose for data processing no longer applies. If you assert a
            legitimate request for deletion or revoke your consent to data
            processing, your data will be deleted unless we have other legally
            permissible reasons for storing your personal data (e.g. retention
            periods under tax or commercial law); in the latter case, the data
            will be deleted once these reasons no longer apply.
          </Text>
          <Heading size="sm" as="h3">
            General information about the legal basis of data processing on this
            website
          </Heading>
          <Text>
            If you have consented to data processing, we process your personal
            data on the basis of Art. 6 (1) a DSGVO or Art. 9 (2) a DSGVO, if
            special categories of data are processed according to Art. 9 (1)
            DSGVO. In the case of explicit consent to the transfer of personal
            data to third countries, the data processing is also based on Art.
            49 (1) a DSGVO. If you have consented to the storage of cookies or
            to the access to information in your terminal device (e.g. via
            device fingerprinting), the data processing is additionally carried
            out on the basis of Section 25 (1) TTDSG. The consent can be revoked
            at any time. If your data is required for the performance of a
            contract or for the implementation of pre-contractual measures, we
            process your data on the basis of Art. 6 para. 1 lit. b DSGVO.
            Furthermore, if your data is required for the fulfillment of a legal
            obligation, we process it on the basis of Art. 6 para. 1 lit. c
            DSGVO. Furthermore, the data processing may be carried out on the
            basis of our legitimate interest according to Art. 6 para. 1 lit. f
            DSGVO. Information about the relevant legal basis in each individual
            case is provided in the following paragraphs of this privacy policy.
          </Text>
          <Heading size="sm" as="h3">
            Revoking your consent to data processing
          </Heading>
          <Text>
            Many data processing operations are only possible with your express
            consent. You can revoke consent you have already given at any time.
            The legality of the data processing carried out until the revocation
            remains unaffected by the revocation.
          </Text>
          <Heading size="sm" as="h3">
            Right to object to data collection in special cases and to direct
            marketing (Art. 21 DSGVO)
          </Heading>
          <Text>
            IF THE DATA PROCESSING IS CARRIED OUT ON THE BASIS OF ART. 6 ABS. 1
            LIT. E OR F DSGVO, YOU HAVE THE RIGHT TO OBJECT TO THE PROCESSING OF
            YOUR PERSONAL DATA AT ANY TIME FOR REASONS ARISING FROM YOUR
            PARTICULAR SITUATION; THIS ALSO APPLIES TO PROFILING BASED ON THESE
            PROVISIONS. THE RESPECTIVE LEGAL BASIS ON WHICH PROCESSING IS BASED
            CAN BE FOUND IN THIS PRIVACY POLICY. IF YOU OBJECT, WE WILL NO
            LONGER PROCESS YOUR PERSONAL DATA CONCERNED UNLESS WE CAN
            DEMONSTRATE COMPELLING LEGITIMATE GROUNDS FOR THE PROCESSING WHICH
            OVERRIDE YOUR INTERESTS, RIGHTS AND FREEDOMS, OR THE PROCESSING IS
            FOR THE PURPOSE OF ASSERTING, EXERCISING OR DEFENDING LEGAL CLAIMS
            (OBJECTION UNDER ARTICLE 21(1) DSGVO).
          </Text>
          <Text>
            IF YOUR PERSONAL DATA ARE PROCESSED FOR THE PURPOSE OF DIRECT
            MARKETING, YOU HAVE THE RIGHT TO OBJECT AT ANY TIME TO THE
            PROCESSING OF PERSONAL DATA CONCERNING YOU FOR THE PURPOSE OF SUCH
            MARKETING; THIS ALSO APPLIES TO PROFILING INSOFAR AS IT IS RELATED
            TO SUCH DIRECT MARKETING. IF YOU OBJECT, YOUR PERSONAL DATA WILL
            SUBSEQUENTLY NO LONGER BE USED FOR THE PURPOSE OF DIRECT MARKETING
            (OBJECTION PURSUANT TO ARTICLE 21 (2) DSGVO).
          </Text>
          <Heading size="sm" as="h3">
            Right of appeal to the competent supervisory authority
          </Heading>
          <Text>
            In the event of breaches of the GDPR, data subjects shall have a
            right of appeal to a supervisory authority, in particular in the
            Member State of their habitual residence, their place of work or the
            place of the alleged breach. The right of appeal is without
            prejudice to other administrative or judicial remedies.
          </Text>
          <Heading size="sm" as="h3">
            Right to data portability
          </Heading>
          <Text>
            You have the right to have data that we process automatically on the
            basis of your consent or in fulfillment of a contract handed over to
            you or to a third party in a common, machine-readable format. If you
            request the direct transfer of the data to another controller, this
            will only be done insofar as it is technically feasible.
          </Text>
          <Heading size="sm" as="h3">
            Information, correction and deletion
          </Heading>
          <Text>
            Within the framework of the applicable legal provisions, you have
            the right at any time to free information about your stored personal
            data, its origin and recipient and the purpose of data processing
            and, if necessary, a right to correction or deletion of this data.
            For this purpose, as well as for further questions on the subject of
            personal data, you can contact us at any time.
          </Text>
          <Heading size="sm" as="h3">
            Right to restriction of processing
          </Heading>
          <Text>
            You have the right to request the restriction of the processing of
            your personal data. For this purpose, you can contact us at any
            time. The right to restriction of processing exists in the following
            cases:
          </Text>
          <ul>
            <li>
              <Text>
                You have the right to request the restriction of the processing
                of your personal data. For this purpose, you can contact us at
                any time. The right to restriction of processing exists in the
                following cases:
              </Text>
            </li>
            <li>
              <Text>
                If the processing of your personal data happened/is happening
                unlawfully, you may request the restriction of data processing
                instead of erasure.
              </Text>
            </li>
            <li>
              <Text>
                If we no longer need your personal data, but you need it to
                exercise, defend or enforce legal claims, you have the right to
                request restriction of the processing of your personal data
                instead of deletion.
              </Text>
            </li>
            <li>
              <Text>
                If you have lodged an objection pursuant to Art. 21 (1) DSGVO, a
                balancing of your and our interests must be carried out. As long
                as it has not yet been determined whose interests prevail, you
                have the right to request the restriction of the processing of
                your personal data.
              </Text>
            </li>
          </ul>
          <Text>
            If you have restricted the processing of your personal data, this
            data may - apart from being stored - only be processed with your
            consent or for the assertion, exercise or defense of legal claims or
            for the protection of the rights of another natural or legal person
            or for reasons of an important public interest of the European Union
            or a Member State.
          </Text>
          <Heading size="sm" as="h3">
            SSL or TLS encryption
          </Heading>
          <Text>
            This site uses SSL or TLS encryption for security reasons and to
            protect the transmission of confidential content, such as orders or
            requests that you send to us as the site operator. You can recognize
            an encrypted connection by the fact that the address line of the
            browser changes from `&quot;http://`&quot; to `&quot;https://`&quot;
            and by the lock symbol in your browser line.
          </Text>
          <Text>
            If SSL or TLS encryption is activated, the data you transmit to us
            cannot be read by third parties.
          </Text>
          <Text>
            Source:
            <Text as="a" href="https://www.e-recht24.de">
              eRecht24
            </Text>
          </Text>
        </Stack>
        <Footer css={{ marginTop: '2rem', paddingBottom: '2.5rem' }}>
          <Link as={GatsbyLink} to="/">
            CV
          </Link>
          <Link as={GatsbyLink} to="/imprint-en">
            Imprint
          </Link>
          {settings.useLocalization && (
            <Link as={GatsbyLink} to="/privacy-de">
              Deutsche Version
            </Link>
          )}
        </Footer>
      </Stack>
    </React.Fragment>
  )
}

export default Privacy

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
