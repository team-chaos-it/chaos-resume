import { useTranslation } from 'gatsby-plugin-react-i18next'
import { tokens } from '../../tokens'
import { responsiveValue } from '../../utils/ResponsiveUtils'
import { Heading } from '../shared/heading/Heading'
import { Stack } from '../shared/stack/Stack'
import { Project, ProjectProps } from './Project'

export type ProjectsProps = {
  projects: Array<ProjectProps>
}

export const Projects = ({ projects, ...props }: ProjectsProps) => {
  const { t } = useTranslation()
  return (
    <section {...props}>
      <Heading
        size="md"
        textAlign={{ sm: 'center', md: 'start' }}
        css={[
          { marginBottom: '2rem' },
          responsiveValue('marginLeft', { sm: '0', md: '4rem' }),
        ]}
      >
        {t('projects')}
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
