import { useRef, type MouseEvent } from 'react'
import { filterAccents } from '../data/projects'

interface FiltersProps {
  techs: string[]
  active: string | null
  onChange: (filter: string | null) => void
}

export function Filters({ techs, active, onChange }: FiltersProps) {
  const options = ['All', ...techs]
  const ref = useRef<HTMLDivElement>(null)

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100
    el.style.setProperty('--fx', `${x.toFixed(1)}%`)
    el.style.setProperty('--fy', `${y.toFixed(1)}%`)
  }

  return (
    <div className="controls">
      <div className="section-label">Projects</div>
      <div
        ref={ref}
        className="filters"
        onMouseMove={onMove}
        onMouseLeave={() => {
          const el = ref.current
          if (!el) return
          el.style.setProperty('--fx', '50%')
          el.style.setProperty('--fy', '50%')
        }}
      >
        <div className="filters-glow" aria-hidden="true" />
        {options.map((t, i) => {
          const isActive = t === 'All' ? active === null : active === t
          const accent = filterAccents[i % filterAccents.length]
          return (
            <button
              key={t}
              type="button"
              className={`filter-chip${isActive ? ' active' : ''}`}
              style={{
                ['--chip-c' as string]: accent,
                animationDelay: `${i * 35}ms`,
              }}
              onClick={() => onChange(t === 'All' ? null : t)}
            >
              {t}
            </button>
          )
        })}
      </div>
    </div>
  )
}
