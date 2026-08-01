import { useMemo, useState } from 'react'
import { Aurora } from './components/Aurora'
import { Filters } from './components/Filters'
import { ProjectCard } from './components/ProjectCard'
import { QuickLinks } from './components/QuickLinks'
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
          <QuickLinks onResume={() => setResumeOpen(true)} />
        </header>

        <h1 className="hero-title">Farhan Tahmid</h1>
        <p className="stack-line">
          Georgia Tech MS CS (AI Specialization). Formerly a Cloud Support Engineer and Software
          Engineer at AWS. This portfolio showcases production-ready applications I built end to
          end, with live demos, to grow through hands-on experience in full-stack, AI-integrated,
          and real-time systems.
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
          Made with <span aria-hidden="true">❤️</span> by Farhan Tahmid
        </footer>
      </div>

      <ResumeModal open={resumeOpen} onClose={() => setResumeOpen(false)} />
    </>
  )
}
