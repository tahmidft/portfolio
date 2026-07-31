import { useEffect, useRef, useState } from 'react'
import type { Project, ProjectColor } from '../data/projects'
import { projectIcons } from '../data/icons'
import { timeAgo } from '../utils/timeAgo'

interface ProjectCardProps {
  project: Project
  index: number
  hidden: boolean
}

function setBlobBoost(color: ProjectColor, boosted: boolean) {
  document.getElementById(`blob-${color}`)?.classList.toggle('boosted', boosted)
}

export function ProjectCard({ project, index, hidden }: ProjectCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  const [updated, setUpdated] = useState<string | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setVisible(true)
        })
      },
      { threshold: 0.15 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    let cancelled = false
    fetch(`https://api.github.com/repos/${project.repo}`)
      .then((r) => (r.ok ? r.json() : null))
      .then((json: { pushed_at?: string } | null) => {
        if (cancelled || !json?.pushed_at) return
        setUpdated(timeAgo(json.pushed_at))
      })
      .catch(() => {})
    return () => {
      cancelled = true
    }
  }, [project.repo])

  return (
    <article
      ref={ref}
      className={`card${visible ? ' visible' : ''}${hidden ? ' hidden-filtered' : ''}`}
      data-color={project.color}
      style={{ transitionDelay: `${index * 70}ms` }}
      onMouseEnter={() => setBlobBoost(project.color, true)}
      onMouseLeave={() => setBlobBoost(project.color, false)}
    >
      <div className="card-icon">{projectIcons[project.key]}</div>
      <div className="card-head">
        <h3>{project.title}</h3>
        <div className="card-meta">
          {updated ? (
            <>
              <span className="pulse-dot" />
              <span>updated {updated}</span>
            </>
          ) : (
            <span>{project.year}</span>
          )}
        </div>
      </div>
      <p>{project.desc}</p>
      <div className="tech">
        {project.tech.map((t) => (
          <span key={t}>{t}</span>
        ))}
      </div>
      <div className="card-links">
        {project.live && (
          <a href={project.live} target="_blank" rel="noreferrer">
            Live
          </a>
        )}
        <a href={project.github} target="_blank" rel="noreferrer">
          GitHub
        </a>
      </div>
    </article>
  )
}
