import { useId } from 'react'
import clsx from 'clsx'

export function Logomark({ invert = false, filled = false, ...props }) {
  let id = useId()
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" {...props}>
      <rect
        clipPath={`url(#${id}-clip)`}
        className={clsx(
          'h-8 transition-all duration-300',
          invert ? 'fill-white' : 'fill-neutral-950',
          filled ? 'w-8' : 'w-0 group-hover/logo:w-8',
        )}
      />
      <use
        href={`#${id}-path`}
        className={invert ? 'stroke-white' : 'stroke-neutral-950'}
        fill="none"
        strokeWidth="1.5"
      />
      <defs>
        {/* Adjusted SVG path to match the curved style */}
        <path
          id={`${id}-path`}
          d="M9.875,0.625C4.697,0.625,0.5,4.822,0.5,10s4.197,9.375,9.375,9.375S19.25,15.178,19.25,10S15.053,0.625,9.875,0.625" // Example path, adjust as needed
        />
        <clipPath id={`${id}-clip`}>
          <use href={`#${id}-path`} />
        </clipPath>
      </defs>
    </svg>
  )
}

export function Logo({
  className,
  invert = false,
  filled = false,
  fillOnHover = false,
  ...props
}) {
  return (
    <svg
      viewBox="0 0 210 32"
      aria-hidden="true"
      className={clsx(fillOnHover && 'group/logo', className)}
      {...props}
    >
      <Logomark
        preserveAspectRatio="xMinYMid meet"
        invert={invert}
        filled={filled}
      />
      <text
        x="40" // Adjust x position for visual alignment
        y="20" // Adjust y position to center the text
        fontFamily="Helvetica, sans-serif"
        fontSize="18" // Fine-tune font size
        fontWeight="bold" // Ensure bold weight for a closer match
        fill={invert ? 'white' : '#1a1a1a'} // Text color setting
      >
        ELIXR VENTURES
      </text>
    </svg>
  )
}
