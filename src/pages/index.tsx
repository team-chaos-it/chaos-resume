import { graphql, Link as GatsbyLink, PageProps } from 'gatsby'
import {
  I18nextContext,
  Link as GatsbyLinkI18n,
  useI18next,
  useTranslation,
} from 'gatsby-plugin-react-i18next'
import * as React from 'react'
import { useQueryParamString } from 'react-use-query-param-string'
import { Certifications } from '../components/certifications/Certifications'
import { Competencies } from '../components/competencies/Competencies'
import { Contact } from '../components/contact/Contact'
import { Education } from '../components/education/Education'
import { PrintHeader } from '../components/header/PrintHeader'
import { ScreenHeader } from '../components/header/ScreenHeader'
import { ProjectProps } from '../components/projects/Project'
import { Projects } from '../components/projects/Projects'
import { Footer } from '../components/shared/footer/footer'
import { Link } from '../components/shared/link/link'
import { Stack } from '../components/shared/stack/Stack'
import { StackDivider } from '../components/shared/stack/StackDivider'
import { UnderConstruction } from '../components/under-construction/UnderConstruction'
import { profile as profileDe } from '../data/profile-de'
import { profile as profileEn } from '../data/profile-en'
import { responsiveValue } from '../utils/ResponsiveUtils'

type DataProps = {
  files: {
    projects: Array<{
      project: {
        frontmatter: {
          title: string
          role: string
          sector: string
          from: string
          to: string
          tasks: Array<string>
          tools: Array<string>
        }
        html: string
      }
    }>
  }
}

const IndexPage = ({ data }: PageProps<DataProps>) => {
  const { languages, originalPath } = useI18next()
  type Language = 'de' | 'en'

  const currentLanguage = React.useContext(I18nextContext).language as Language
  const { t } = useTranslation()
  const [toolsFilter] = useQueryParamString('tools', '')
  const profile = { de: profileDe, en: profileEn }

  if (profile[currentLanguage].useUnderConstructionPage) {
    return <UnderConstruction />
  }

  const normalizedForFilter = (input: string) =>
    input.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
  const matchesFilter = (project: ProjectProps) => {
    if (!toolsFilter || toolsFilter.length === 0) {
      return true
    }

    return project.tools?.some((toolInProject) =>
      toolsFilter
        .split(',')
        .some(
          (toolInFilter) =>
            normalizedForFilter(toolInFilter) ===
            normalizedForFilter(toolInProject),
        ),
    )
  }

  const projects = data.files.projects
    .map((p) => ({
      ...p.project.frontmatter,
      html: p.project.html,
    }))
    .filter(matchesFilter)

  return (
    <React.Fragment>
      <table
        css={{
          '@media screen': {
            marginBottom: '2.5rem',
          },
        }}
      >
        <PrintHeader
          name={profile[currentLanguage].personal.name}
          jobTitle={profile[currentLanguage].personal.jobTitle}
        />
        <ScreenHeader {...profile[currentLanguage].personal} />
        <Stack
          direction={{ sm: 'column', md: 'row' }}
          gap={{ sm: 0, md: '5rem' }}
          css={responsiveValue('paddingInline', { sm: '2rem', md: '4rem' })}
        >
          <Stack direction="column" gap="2rem">
            <Contact contacts={profile[currentLanguage].contact} />
            <StackDivider maxWidth={{ sm: '100%', md: '90%' }} />
            <Competencies groups={profile[currentLanguage].competencies} />
            <StackDivider maxWidth={{ sm: '100%', md: '90%' }} />
            <Education items={profile[currentLanguage].education} />
            <StackDivider maxWidth={{ sm: '100%', md: '90%' }} />
            <Certifications items={profile[currentLanguage].certifications} />
          </Stack>
          <StackDivider
            maxWidth={'100%'}
            css={[
              { marginTop: '2rem', marginBottom: '2rem' },
              responsiveValue('display', { sm: 'block', md: 'none' }),
            ]}
          />
          <Projects projects={[...projects]} />
        </Stack>
      </table>
      <Footer css={{ paddingTop: '20px', paddingBottom: '10px' }}>
        <Link as={GatsbyLink} to={`/imprint-${currentLanguage}`}>
          {t('imprint')}
        </Link>
        <Link as={GatsbyLink} to={`/privacy-${currentLanguage}`}>
          {t('privacy')}
        </Link>
        <Link
          as={GatsbyLinkI18n}
          to={originalPath}
          language={
            languages.filter((language) => language !== currentLanguage)[0]
          }
        >
          {t(
            `${
              languages.filter((language) => language !== currentLanguage)[0]
            }`,
          )}
        </Link>
      </Footer>
    </React.Fragment>
  )
}
export default IndexPage

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
    files: allFile(filter: { sourceInstanceName: { eq: $language } }) {
      projects: nodes {
        project: childMarkdownRemark {
          frontmatter {
            role
            sector
            tasks
            title
            tools
            from(formatString: "MM/YYYY")
            to(formatString: "MM/YYYY")
          }
        }
      }
    }
  }
`
