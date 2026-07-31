export type ProjectColor = 'green' | 'amber' | 'blue' | 'purple'

export interface Project {
  key: string
  repo: string
  title: string
  year: string
  color: ProjectColor
  desc: string
  tech: string[]
  live: string | null
  github: string
}

export const projects: Project[] = [
  {
    key: 'flame',
    repo: 'tahmidft/realtime-fire-alarm-detector',
    title: 'Flame Sentinel',
    year: '2025',
    color: 'green',
    desc: 'Embedded fire alarm detector on a Raspberry Pi. C++ FFT pipeline hits sub-500ms detection latency.',
    tech: ['C++17', 'FFTW3', 'ALSA', 'Flask', 'React'],
    live: null,
    github: 'https://github.com/tahmidft/realtime-fire-alarm-detector',
  },
  {
    key: 'cour',
    repo: 'tahmidft/cour',
    title: 'COUR',
    year: '2026',
    color: 'amber',
    desc: 'Anime tracker with custom search ranking, a recommendation engine, and cron-driven email alerts on top of AniList.',
    tech: ['React', 'Vercel Functions', 'Supabase', 'AniList GraphQL', 'Resend'],
    live: 'https://cour-anime.vercel.app',
    github: 'https://github.com/tahmidft/cour',
  },
  {
    key: 'clearclause',
    repo: 'tahmidft/clear-clause',
    title: 'ClearClause',
    year: '2026',
    color: 'blue',
    desc: 'AI contract analyzer. Uploads are parsed and scored by Gemini behind a FastAPI backend with per-user rate limits.',
    tech: ['React', 'FastAPI', 'Gemini', 'Supabase Postgres'],
    live: 'https://clearclause.vercel.app',
    github: 'https://github.com/tahmidft/clear-clause',
  },
  {
    key: 'nexuspm',
    repo: 'tahmidft/nexus-pm',
    title: 'Nexus PM',
    year: '2026',
    color: 'purple',
    desc: 'Multi-tenant project workspace: RBAC, Kanban, WBS, CPM/Gantt scheduling, earned-value metrics, and a compliance-grade audit trail.',
    tech: ['NestJS', 'Angular', 'TypeORM', 'Neon Postgres'],
    live: 'https://nexus-pm-five.vercel.app',
    github: 'https://github.com/tahmidft/nexus-pm',
  },
]

export interface SkillCategory {
  title: string
  color: string
  skills: string[]
}

export const skillCategories: SkillCategory[] = [
  {
    title: 'Languages',
    color: 'var(--blue)',
    skills: ['TypeScript', 'JavaScript', 'Python', 'C++', 'SQL'],
  },
  {
    title: 'Frontend',
    color: 'var(--green)',
    skills: ['React', 'Angular', 'React Native Web', 'Tailwind CSS', 'Vite'],
  },
  {
    title: 'Backend',
    color: 'var(--amber)',
    skills: ['NestJS', 'FastAPI', 'Node.js', 'REST APIs'],
  },
  {
    title: 'Cloud & DevOps',
    color: 'var(--purple)',
    skills: ['AWS', 'Vercel', 'Render', 'Docker', 'GitHub Actions'],
  },
  {
    title: 'Data & Auth',
    color: 'var(--blue)',
    skills: ['PostgreSQL', 'Supabase', 'TypeORM', 'Neon'],
  },
  {
    title: 'AI / ML',
    color: 'var(--teal)',
    skills: ['Gemini API', 'Applied AI (Georgia Tech)', 'Prompt Engineering'],
  },
]
