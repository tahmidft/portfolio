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
    key: 'clearclause',
    repo: 'tahmidft/clear-clause',
    title: 'ClearClause',
    year: '2026',
    color: 'blue',
    desc: 'AI contract analyzer for freelancers. Upload a PDF or DOCX and get plain-English clause summaries, preference-weighted guidance, and scam-risk signals powered by Gemini and FastAPI, with Supabase for auth and storage.',
    tech: ['React', 'TypeScript', 'FastAPI', 'Gemini', 'Supabase', 'Render'],
    live: 'https://clearclause.vercel.app',
    github: 'https://github.com/tahmidft/clear-clause',
  },
  {
    key: 'nexuspm',
    repo: 'tahmidft/nexus-pm',
    title: 'Nexus PM',
    year: '2026',
    color: 'purple',
    desc: 'Multi-tenant project workspace with RBAC, Kanban boards, WBS, critical-path scheduling, earned-value metrics, and a full audit trail. Built as a NestJS and Angular monorepo on Neon Postgres.',
    tech: ['NestJS', 'Angular', 'TypeORM', 'Neon', 'Docker', 'JWT'],
    live: 'https://nexus-pm-five.vercel.app',
    github: 'https://github.com/tahmidft/nexus-pm',
  },
  {
    key: 'cour',
    repo: 'tahmidft/cour',
    title: 'COUR',
    year: '2026',
    color: 'amber',
    desc: 'Anime tracker with custom search ranking, personalized recommendations, and cron-driven email alerts on top of AniList. React and Vite on Vercel, with Supabase for auth and Resend for mail.',
    tech: ['React', 'Vite', 'Vercel', 'Supabase', 'AniList GraphQL', 'Resend'],
    live: 'https://cour-anime.vercel.app',
    github: 'https://github.com/tahmidft/cour',
  },
  {
    key: 'flame',
    repo: 'tahmidft/realtime-fire-alarm-detector',
    title: 'Flame Sentinel',
    year: '2025',
    color: 'green',
    desc: 'Fire alarm detector running on a Raspberry Pi. A C++ FFT pipeline with ALSA and FFTW3 catches alarms in under 500ms, backed by a Flask API and React dashboard for live monitoring.',
    tech: ['C++17', 'FFTW3', 'ALSA', 'Flask', 'React', 'Raspberry Pi'],
    live: null,
    github: 'https://github.com/tahmidft/realtime-fire-alarm-detector',
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
    skills: ['React', 'Angular', 'Vite', 'Tailwind CSS', 'TanStack Query'],
  },
  {
    title: 'Backend',
    color: 'var(--amber)',
    skills: ['NestJS', 'FastAPI', 'Flask', 'Node.js', 'REST APIs'],
  },
  {
    title: 'Cloud & DevOps',
    color: 'var(--purple)',
    skills: ['AWS', 'Vercel', 'Render', 'Docker', 'GitHub Actions', 'Raspberry Pi'],
  },
  {
    title: 'Data & Auth',
    color: 'var(--blue)',
    skills: ['PostgreSQL', 'Supabase', 'TypeORM', 'Neon', 'JWT'],
  },
  {
    title: 'AI / Systems',
    color: 'var(--teal)',
    skills: ['Gemini API', 'FFTW3', 'ALSA', 'Socket.io', 'Resend', 'AniList GraphQL'],
  },
]

/** Accent colors cycled across filter chips for hover/active motion */
export const filterAccents = [
  'var(--green)',
  'var(--amber)',
  'var(--blue)',
  'var(--purple)',
  'var(--teal)',
] as const
