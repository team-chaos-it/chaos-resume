import { graphql, PageProps } from 'gatsby'
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
import { Link } from '../components/shared/link/link'
import { Footer } from '../components/shared/footer/footer'
import { Stack } from '../components/shared/stack/Stack'
import { StackDivider } from '../components/shared/stack/StackDivider'
import { UnderConstruction } from '../components/under-construction/UnderConstruction'
import { profile } from '../data/profile'
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
  const [toolsFilter] = useQueryParamString('tools', '')

  if (profile.useUnderConstructionPage) {
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
          name={profile.personal.name}
          jobTitle={profile.personal.jobTitle}
        />
        <ScreenHeader {...profile.personal} />
        <Stack
          direction={{ sm: 'column', md: 'row' }}
          gap={{ sm: 0, md: '5rem' }}
          css={responsiveValue('paddingInline', { sm: '2rem', md: '4rem' })}
        >
          <Stack direction="column" gap="2rem">
            <Contact contacts={profile.contact} />
            <StackDivider maxWidth={{ sm: '100%', md: '90%' }} />
            <Competencies groups={profile.competencies}></Competencies>
            <StackDivider maxWidth={{ sm: '100%', md: '90%' }} />
            <Education items={profile.education} />
            <StackDivider maxWidth={{ sm: '100%', md: '90%' }} />
            <Certifications items={profile.certifications} />
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
      <Footer>
        <Link to="/imprint">Impressum</Link>
        <Link to="/privacy">Datenschutz</Link>
      </Footer>
    </React.Fragment>
  )
}
export default IndexPage

export const query = graphql`
  {
    files: allMarkdownRemark {
      projects: edges {
        project: node {
          frontmatter {
            role
            title
            sector
            tasks
            tools
            from(formatString: "MM/YYYY")
            to(formatString: "MM/YYYY")
          }
          html
        }
      }
    }
  }
`
