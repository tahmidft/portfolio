interface FiltersProps {
  techs: string[]
  active: string | null
  onChange: (filter: string | null) => void
}

export function Filters({ techs, active, onChange }: FiltersProps) {
  const options = ['All', ...techs]

  return (
    <div className="controls">
      <div className="filters">
        {options.map((t) => (
          <button
            key={t}
            type="button"
            className={`filter-chip${(t === 'All' ? active === null : active === t) ? ' active' : ''}`}
            onClick={() => onChange(t === 'All' ? null : t)}
          >
            {t}
          </button>
        ))}
      </div>
    </div>
  )
}
