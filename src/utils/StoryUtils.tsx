export type StoryPlaceholderProps = JSX.IntrinsicElements['div'] & {
  width?: string | number
  height?: string | number
  border?: boolean
}

export const StoryPlaceholder = ({
  width,
  height,
  ...props
}: StoryPlaceholderProps) => {
  return (
    <div
      className="bxg-white"
      style={{
        minWidth: width,
        minHeight: height,
        maxWidth: width,
        maxHeight: height,
      }}
      {...props}
    >
      <svg
        className="h-full w-full border-2 border-dashed border-gray-300 bg-white text-gray-200"
        preserveAspectRatio="none"
        stroke="currentColor"
        fill="none"
        viewBox="0 0 200 200"
        aria-hidden="true"
      >
        <path
          vectorEffect="non-scaling-stroke"
          strokeWidth="2"
          d="M0 0l200 200M0 200L200 0"
        ></path>
      </svg>
    </div>
  )
}
