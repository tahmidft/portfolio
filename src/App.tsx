import { useMemo, useState } from 'react'
import { Aurora } from './components/Aurora'
import { Filters } from './components/Filters'
import { ProjectCard } from './components/ProjectCard'
import { ResumeModal } from './components/ResumeModal'
import { Skills } from './components/Skills'
import { projects } from './data/projects'
import './App.css'

export default function App() {
  const [activeFilter, setActiveFilter] = useState<string | null>(null)
  const [resumeOpen, setResumeOpen] = useState(false)

  const allTech = useMemo(
    () => [...new Set(projects.flatMap((p) => p.tech))].sort(),
    [],
  )

  return (
    <>
      <Aurora />

      <div className="wrap">
        <header className="top">
          <div>
            <div className="role">Full-Stack Software Engineer · AI-Integrated Systems</div>
          </div>
          <nav className="quicklinks">
            <a
              href="#resume"
              onClick={(e) => {
                e.preventDefault()
                setResumeOpen(true)
              }}
            >
              Resume
            </a>
            <a href="https://github.com/tahmidft" target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href="https://linkedin.com/in/farhantahmid" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href="mailto:farhantahmid007@gmail.com">Email</a>
          </nav>
        </header>

        <h1 className="hero-title">Farhan Tahmid</h1>
        <p className="stack-line">
          Georgia Tech MS CS, AI Specialization — formerly an AWS Cloud Support Engineer, now
          building full-stack, AI-integrated, and real-time systems end to end.
        </p>

        <Skills />

        <Filters techs={allTech} active={activeFilter} onChange={setActiveFilter} />

        <div className="grid">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.key}
              project={project}
              index={index}
              hidden={!!activeFilter && !project.tech.includes(activeFilter)}
            />
          ))}
        </div>

        <footer>
          Commit timestamps fetched live from the GitHub API on page load. Source of this page is on{' '}
          <a href="https://github.com/tahmidft" target="_blank" rel="noreferrer">
            GitHub
          </a>
          .
        </footer>
      </div>

      <ResumeModal open={resumeOpen} onClose={() => setResumeOpen(false)} />
    </>
  )
}
