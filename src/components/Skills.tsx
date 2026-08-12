import { useRef, type MouseEvent } from 'react'
import { skillCategories } from '../data/projects'
import { skillLinks } from '../data/skillLinks'

function SkillCard({
  title,
  color,
  skills,
}: {
  title: string
  color: string
  skills: string[]
}) {
  const ref = useRef<HTMLDivElement>(null)

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width
    const y = (e.clientY - rect.top) / rect.height
    const rotateY = (x - 0.5) * 10
    const rotateX = (0.5 - y) * 10
    el.style.setProperty('--rx', `${rotateX.toFixed(2)}deg`)
    el.style.setProperty('--ry', `${rotateY.toFixed(2)}deg`)
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
      className="skill-cat"
      style={{ ['--c' as string]: color }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      <div className="skill-cat-glow" aria-hidden="true" />
      <div className="skill-cat-head">
        <span className="skill-cat-dot" />
        <h4>{title}</h4>
      </div>
      <div className="skill-chips">
        {skills.map((skill) => {
          const href = skillLinks[skill]
          if (!href) return <span key={skill}>{skill}</span>
          return (
            <a
              key={skill}
              href={href}
              target="_blank"
              rel="noreferrer"
              title={`Learn more about ${skill}`}
            >
              {skill}
            </a>
          )
        })}
      </div>
    </div>
  )
}

export function Skills() {
  return (
    <section className="skills-section">
      <div className="section-label">Skills</div>
      <div className="skills-grid">
        {skillCategories.map((cat) => (
          <SkillCard key={cat.title} title={cat.title} color={cat.color} skills={cat.skills} />
        ))}
      </div>
    </section>
  )
}
