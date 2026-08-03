import { useRef, type MouseEvent } from 'react'
import { awsExperience } from '../data/experience'

function RoleBlock({
  title,
  color,
  highlights,
  tech,
}: {
  title: string
  color: string
  highlights: string[]
  tech: string[]
}) {
  const ref = useRef<HTMLDivElement>(null)

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width
    const y = (e.clientY - rect.top) / rect.height
    el.style.setProperty('--rx', `${((0.5 - y) * 6).toFixed(2)}deg`)
    el.style.setProperty('--ry', `${((x - 0.5) * 6).toFixed(2)}deg`)
    el.style.setProperty('--mx', `${(x * 100).toFixed(1)}%`)
    el.style.setProperty('--my', `${(y * 100).toFixed(1)}%`)
  }

  const onLeave = () => {
    const el = ref.current
    if (!el) return
    el.style.setProperty('--rx', '0deg')
    el.style.setProperty('--ry', '0deg')
  }

  return (
    <div
      ref={ref}
      className="exp-role"
      style={{ ['--c' as string]: color }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      <div className="exp-role-glow" aria-hidden="true" />
      <div className="exp-role-head">
        <span className="skill-cat-dot" />
        <h4>{title}</h4>
      </div>
      <ul className="exp-bullets">
        {highlights.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <div className="tech">
        {tech.map((t) => (
          <span key={t}>{t}</span>
        ))}
      </div>
    </div>
  )
}

export function Experience() {
  const { company, role, dates, summary, roles } = awsExperience

  return (
    <section className="experience-section">
      <div className="section-label">Experience</div>
      <div className="exp-company">
        <div className="exp-company-top">
          <div>
            <h3 className="exp-company-name">{company}</h3>
            <p className="exp-company-role">{role}</p>
          </div>
          <span className="exp-dates">{dates}</span>
        </div>
        <p className="exp-summary">{summary}</p>
        <div className="exp-roles">
          {roles.map((r) => (
            <RoleBlock
              key={r.title}
              title={r.title}
              color={r.color}
              highlights={r.highlights}
              tech={r.tech}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
