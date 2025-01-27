import { useId } from 'react'
import clsx from 'clsx'

export function Logomark({ invert = false, filled = false, ...props }) {
  let id = useId()

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      {/* This rect handles the hover fill animation */}
      <rect
        clipPath={`url(#${id}-clip)`}
        className={clsx(
          'h-8 transition-all duration-300',
          invert ? 'fill-white' : 'fill-neutral-950',
          filled ? 'w-8' : 'w-0 group-hover/logo:w-8',
        )}
      />
      {/* Outlined stroke version of the logo */}
      <use
        href={`#${id}-path`}
        className={invert ? 'stroke-white' : 'stroke-neutral-950'}
        fill="none"
        strokeWidth="1.5"
      />
      <defs>
        {/* The new, adjusted Elixir logo path */}
        <path
          id={`${id}-path`}
          d="M19.793 16.575c0 3.752 -2.927 7.426 -7.743 7.426 -5.249 0 -7.843 -3.71 -7.843 -8.29 0 -5.21 3.892 -12.952 8 -15.647a0.397 0.397 0 0 1 0.61 0.371 9.716 9.716 0 0 0 1.694 6.518c0.522 0.795 1.092 1.478 1.763 2.352 0.94 1.227 1.637 1.906 2.644 3.842l0.015 0.028a7.107 7.107 0 0 1 0.86 3.4z"
          transform="scale(1, 0.9)"
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
      viewBox="0 0 250 32"
      aria-hidden="true"
      className={clsx(fillOnHover && 'group/logo', className)}
      {...props}
    >
      {/* The logo mark with hover and inversion logic */}
      <Logomark
        preserveAspectRatio="xMinYMid meet"
        invert={invert}
        filled={filled}
      />

      {/* Text accompanying the logo */}
      <text
        x="40" // Adjust for spacing
        y="20" // Adjust for centering
        fontFamily="Helvetica, sans-serif"
        fontSize="18"
        fontWeight="bold"
        fill={invert ? 'white' : '#1a1a1a'}
      >
        ELIXR VENTURES
      </text>
    </svg>
  )
}
