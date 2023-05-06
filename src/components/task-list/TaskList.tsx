import { Task } from './task'

type TaskListProps = { tasks: string[]; hideAfterLines?: number }

export const TaskList = ({
  tasks,
  hideAfterLines,
  ...props
}: TaskListProps) => {
  return (
    <ul
      css={{
        position: 'relative',
        margin:0,
      }}
      {...props}
    >
      {tasks.map((value, index) => (
        <Task
          css={{
            '@media screen': {
              display: hideAfterLines
                ? index >= hideAfterLines
                  ? 'none'
                  : 'block,'
                : 'block',
            },
          }}
          fade={hideAfterLines ? index === hideAfterLines - 1 : false}
          key={value}
        >
          {value}
        </Task>
      ))}
    </ul>
  )
}
