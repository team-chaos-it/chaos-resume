import { Stack } from '../shared/stack/Stack'
import { Project, ProjectProps } from './Project'
import { tokens } from '../../tokens'
import { Heading } from '../shared/heading/Heading'

export type ProjectsProps = {
  projects: Array<ProjectProps>
}

export const Projects = ({ projects, ...props }: ProjectsProps) => {
  return (
    <section {...props}>
      <Heading size="md" css={{ marginBottom: '2rem', marginLeft: '4rem' }}>
        Projekte
      </Heading>
      <Stack
        direction="column"
        css={{
          borderLeft: '1px solid',
          borderColor: tokens.stack.divider.color,

          '>div:first-of-type': {
            marginTop: '-2rem',
          },
          '>div:last-of-type': {
            marginBottom: '-2rem',
          },
        }}
      >
        {projects.map((p) => (
          <Project key={p.title} {...p} />
        ))}
      </Stack>
    </section>
  )
}
