import { useRef, type MouseEvent, type ReactNode } from 'react'

interface QuickLink {
  label: string
  href: string
  accent: string
  external?: boolean
  onClick?: () => void
  icon: ReactNode
}

const icons = {
  resume: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
      <path d="M7 3h7l5 5v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z" />
      <path d="M14 3v5h5" />
      <path d="M9 13h6M9 17h4" />
    </svg>
  ),
  github: (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.52 2.87 8.35 6.84 9.7.5.1.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.55-1.14-4.55-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.27 2.75 1.05A9.3 9.3 0 0 1 12 6.8c.85 0 1.7.12 2.5.34 1.9-1.32 2.74-1.05 2.74-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .26.18.59.69.48A10.04 10.04 0 0 0 22 12.26C22 6.58 17.52 2 12 2z" />
    </svg>
  ),
  linkedin: (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M6.94 8.5H3.75V20h3.19V8.5zM5.34 7.05a1.85 1.85 0 1 0 0-3.7 1.85 1.85 0 0 0 0 3.7zM20.25 20h-3.18v-5.6c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94V20H9.9V8.5h3.05v1.57h.04c.42-.8 1.46-1.65 3-1.65 3.21 0 3.8 2.11 3.8 4.86V20z" />
    </svg>
  ),
  email: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  ),
}

interface QuickLinksProps {
  onResume: () => void
}

export function QuickLinks({ onResume }: QuickLinksProps) {
  const ref = useRef<HTMLElement>(null)

  const links: QuickLink[] = [
    {
      label: 'Resume',
      href: '#resume',
      accent: 'var(--green)',
      onClick: onResume,
      icon: icons.resume,
    },
    {
      label: 'GitHub',
      href: 'https://github.com/tahmidft',
      accent: 'var(--amber)',
      external: true,
      icon: icons.github,
    },
    {
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/farhantahmid',
      accent: 'var(--blue)',
      external: true,
      icon: icons.linkedin,
    },
    {
      label: 'Email',
      href: 'mailto:farhantahmid007@gmail.com',
      accent: 'var(--purple)',
      icon: icons.email,
    },
  ]

  const onMove = (e: MouseEvent<HTMLElement>) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    el.style.setProperty('--qx', `${(((e.clientX - rect.left) / rect.width) * 100).toFixed(1)}%`)
    el.style.setProperty('--qy', `${(((e.clientY - rect.top) / rect.height) * 100).toFixed(1)}%`)
  }

  return (
    <nav
      ref={ref}
      className="quicklinks"
      onMouseMove={onMove}
      onMouseLeave={() => {
        const el = ref.current
        if (!el) return
        el.style.setProperty('--qx', '50%')
        el.style.setProperty('--qy', '50%')
      }}
    >
      <div className="quicklinks-glow" aria-hidden="true" />
      {links.map((link, i) => (
        <a
          key={link.label}
          href={link.href}
          className="quicklink"
          style={{
            ['--link-c' as string]: link.accent,
            animationDelay: `${i * 60}ms`,
          }}
          target={link.external ? '_blank' : undefined}
          rel={link.external ? 'noreferrer' : undefined}
          onClick={
            link.onClick
              ? (e) => {
                  e.preventDefault()
                  link.onClick?.()
                }
              : undefined
          }
        >
          <span className="quicklink-icon">{link.icon}</span>
          <span>{link.label}</span>
        </a>
      ))}
    </nav>
  )
}
