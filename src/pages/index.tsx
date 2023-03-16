import * as React from 'react'
import type { PageProps } from 'gatsby'
import { Header } from '../components/header/Header'
import { Contact } from '../components/contact/Contact'
import { Stack } from '../components/shared/stack/Stack'
import { StackDivider } from '../components/shared/stack/StackDivider'
import { Competencies } from '../components/competencies/Competencies'
import { Projects } from '../components/projects/Projects'
import { graphql } from 'gatsby'
import { Education } from '../components/education/Education'
import { Certifications } from '../components/certifications/Certifications'
import { profile } from '../data/profile'
import { useQueryParamString } from 'react-use-query-param-string';
import {ProjectProps} from "../components/projects/Project";

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

const IndexPage = ({ data, ...props }: PageProps<DataProps>) => {
  const [toolsFilter] = useQueryParamString('tools', '');

  const normalizedForFilter = (input: string) => input.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
  const matchesFilter = (project: ProjectProps) => {
    if(!toolsFilter || toolsFilter.length === 0) {
      return true
    }

    return project.tools
        ?.some(toolInProject => toolsFilter
          .split(',')
          .some((toolInFilter) => normalizedForFilter(toolInFilter) === normalizedForFilter(toolInProject))
        )
  }

  const projects = data.files.projects.map((p) => ({
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
        <Header {...profile.personal} />

        <Stack
          direction="row"
          gap="5rem"
          css={{
            paddingInline: '4rem',
          }}
        >
          <Stack direction="column" gap="2rem">
            <Contact {...profile.contact} />
            <StackDivider inset />
            <Competencies groups={profile.competencies}></Competencies>
            <StackDivider inset />
            <Education items={profile.education} />
            <StackDivider inset />
            <Certifications items={profile.certifications} />
          </Stack>

          <Projects projects={[...projects]} />
        </Stack>
      </table>
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
