type TaskListProps = { tasks: string[] }

export const TaskList = ({ tasks, ...props }: TaskListProps) => {
  return (
    <ul {...props}>
      {tasks.map((value, index) => (
        <li key={index}>{value}</li>
      ))}
    </ul>
  )
}
