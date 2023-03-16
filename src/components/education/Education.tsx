import { Stack } from '../shared/stack/Stack'
import { Heading } from '../shared/heading/Heading'
import { tokens } from '../../tokens'
import { EducationItem, EducationItemProps } from './EducationItem'

export type EducationProps = {
  items: Array<EducationItemProps>
}

export const Education = ({ items = [] }: EducationProps) => {
  return (
    <section>
      <Heading size="md" css={{ marginBottom: '2rem' }}>
        Ausbildung
      </Heading>
      <Stack
        direction="column"
        gap="3rem"
        css={{ color: tokens.text.font.color }}
      >
        {items.map((itemProps) => (
          <EducationItem key={itemProps.title} {...itemProps} />
        ))}
      </Stack>
    </section>
  )
}
