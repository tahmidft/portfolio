import type { ReactNode } from 'react'

export const projectIcons: Record<string, ReactNode> = {
  flame: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 2c1 3-2 4-2 7a4 4 0 0 0 8 0c0-1-.5-2-1-2.5.5 2-1 3-2 3-1.5 0-2-1.2-1.5-2.5C14 6 15 4 14 2c-1 3-4 4-4 8a6 6 0 0 0 12 0c0-4-3-5-4-8-.5 1.5.5 3-1 4" />
      <path d="M9 14a5 5 0 0 0 10 0c0-2.5-1.5-4-3-5.5" />
    </svg>
  ),
  cour: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 9h18" />
      <path d="M8 5V3M16 5V3" />
      <circle cx="8" cy="14" r="1.4" />
      <circle cx="12" cy="14" r="1.4" />
      <circle cx="16" cy="14" r="1.4" />
    </svg>
  ),
  clearclause: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M7 3h7l5 5v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z" />
      <path d="M14 3v5h5" />
      <path d="M9 13l2 2 4-4" />
    </svg>
  ),
  nexuspm: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="3" y="4" width="5" height="16" rx="1" />
      <rect x="10" y="4" width="5" height="10" rx="1" />
      <rect x="17" y="4" width="4" height="13" rx="1" />
    </svg>
  ),
}
