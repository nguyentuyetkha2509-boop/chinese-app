function base(props) {
  return { fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round', viewBox: '0 0 24 24', width: 24, height: 24, ...props }
}

export function HomeIcon(props) {
  return (
    <svg {...base(props)}>
      <path d="M3 11.5 12 4l9 7.5" />
      <path d="M5 10v9a1 1 0 0 0 1 1h4v-6h4v6h4a1 1 0 0 0 1-1v-9" />
    </svg>
  )
}

export function BookIcon(props) {
  return (
    <svg {...base(props)}>
      <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v15H6.5A2.5 2.5 0 0 0 4 20.5" />
      <path d="M4 5.5v15A2.5 2.5 0 0 1 6.5 18H20" />
    </svg>
  )
}

export function CardsIcon(props) {
  return (
    <svg {...base(props)}>
      <rect x="4" y="7" width="13" height="14" rx="2" />
      <path d="M8 7V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-2" />
    </svg>
  )
}

export function MicIcon(props) {
  return (
    <svg {...base(props)}>
      <rect x="9" y="2" width="6" height="12" rx="3" />
      <path d="M5 11a7 7 0 0 0 14 0" />
      <path d="M12 18v4M8 22h8" />
    </svg>
  )
}

export function PencilIcon(props) {
  return (
    <svg {...base(props)}>
      <path d="m12 20 9-9 -3-3 -9 9-1 4z" />
      <path d="M15 5 19 9" />
    </svg>
  )
}

export function CheckIcon(props) {
  return (
    <svg {...base(props)}>
      <path d="m5 13 4 4L19 7" />
    </svg>
  )
}

export function FireIcon(props) {
  return (
    <svg {...base(props)}>
      <path d="M12 2s-6 6-6 11a6 6 0 0 0 12 0c0-2-1-3-1-3s0 2-2 2c-1.5 0-2-1.5-1-3 1-1.5 1-3-1-3 0 0 1 2-1 6-1 0-2-1-2-2 0-2 2-5 2-5Z" />
    </svg>
  )
}

export function VolumeIcon(props) {
  return (
    <svg {...base(props)}>
      <path d="M4 9v6h4l5 5V4L8 9H4Z" />
      <path d="M17 8a5 5 0 0 1 0 8" />
    </svg>
  )
}

export function ArrowLeftIcon(props) {
  return (
    <svg {...base(props)}>
      <path d="M19 12H5" />
      <path d="m11 18-6-6 6-6" />
    </svg>
  )
}

export function ArrowRightIcon(props) {
  return (
    <svg {...base(props)}>
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  )
}

export function ZapIcon(props) {
  return (
    <svg {...base(props)}>
      <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" />
    </svg>
  )
}

export function ChatIcon(props) {
  return (
    <svg {...base(props)}>
      <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3h11A2.5 2.5 0 0 1 20 5.5v8a2.5 2.5 0 0 1-2.5 2.5H10l-5 4v-4H6.5A2.5 2.5 0 0 1 4 13.5v-8Z" />
    </svg>
  )
}

export function TopicIcon(props) {
  return (
    <svg {...base(props)}>
      <path d="M11 2 20 11a2 2 0 0 1 0 2.83l-6.17 6.17a2 2 0 0 1-2.83 0L2 11V2h9Z" />
      <circle cx="7" cy="7" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function StoryIcon(props) {
  return (
    <svg {...base(props)}>
      <path d="M12 6c-1.5-1.3-3.5-2-6-2v13c2.5 0 4.5.7 6 2 1.5-1.3 3.5-2 6-2V4c-2.5 0-4.5.7-6 2Z" />
      <path d="M12 6v13" />
    </svg>
  )
}

export function ShuffleIcon(props) {
  return (
    <svg {...base(props)}>
      <polyline points="16 3 21 3 21 8" />
      <line x1="4" y1="20" x2="21" y2="3" />
      <polyline points="21 16 21 21 16 21" />
      <line x1="15" y1="15" x2="21" y2="21" />
      <line x1="4" y1="4" x2="9" y2="9" />
    </svg>
  )
}

export function GrammarIcon(props) {
  return (
    <svg {...base(props)}>
      <path d="M6 4v16" />
      <path d="M18 4v16" />
      <path d="M9 8h2M9 12h6M9 16h4" />
    </svg>
  )
}
