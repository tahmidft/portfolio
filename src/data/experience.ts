export interface ExperienceRole {
  title: string
  color: string
  highlights: string[]
  tech: string[]
}

export interface ExperienceEntry {
  company: string
  role: string
  dates: string
  location?: string
  summary: string
  roles: ExperienceRole[]
}

export const awsExperience: ExperienceEntry = {
  company: 'Amazon Web Services',
  role: 'Cloud Support Engineer I',
  dates: 'Feb 2023 – Feb 2025',
  summary:
    'Built internal software on an SDE internship track and supported enterprise customers on serverless AWS services, from Sev1 incidents to production API design.',
  roles: [
    {
      title: 'Internal SDE Internship',
      color: 'var(--amber)',
      tech: ['Python', 'AWS Bedrock', 'LangChain', 'Neptune', 'Lambda', 'CDK', 'TypeScript', 'S3'],
      highlights: [
        'Built a RAG+LLM knowledge extraction pipeline with Bedrock, LangChain, and Neptune; ingested 1,000+ documents, cutting manual review time by 60% and lifting retrieval accuracy by 70%.',
        'Designed a Lambda API service with Python, Smithy IDL, and S3, including error handling, throttling, and request validation for concurrent production workloads.',
        'Implemented entity disambiguation with Bedrock reasoning to deduplicate LLM-extracted entities against Neptune, with human-in-the-loop review for novel entries.',
        'Shipped infrastructure as code with CDK (TypeScript), cutting deployment times from hours to minutes and fixing a critical defect in Smithy IDL tooling.',
      ],
    },
    {
      title: 'Cloud Support Engineering',
      color: 'var(--blue)',
      tech: ['Lambda', 'API Gateway', 'Cognito', 'AppSync', 'Step Functions', 'IAM', 'VPC'],
      highlights: [
        'Resolved 500+ enterprise support cases across Lambda, API Gateway, Cognito, and AppSync, reducing incident response time by 80%.',
        'Diagnosed complex serverless failures (cold starts, VPC timeouts, IAM permission boundaries, Step Functions) under SLA-bound response windows.',
        'Managed Sev1–Sev5 production incidents, authored root cause analyses, and delivered post-incident reports to drive service improvements.',
      ],
    },
  ],
}

export interface EducationEntry {
  degree: string
  school: string
  detail: string
  dates: string
  color: string
}

export const education: EducationEntry[] = [
  {
    degree: 'M.S. in Computer Science',
    school: 'Georgia Institute of Technology (OMSCS)',
    detail: 'AI Specialization',
    dates: 'Expected Spring 2028',
    color: 'var(--purple)',
  },
  {
    degree: 'B.S. in Computer Science',
    school: 'University of Texas at Dallas',
    detail: 'Richardson, TX',
    dates: 'Graduated Fall 2022',
    color: 'var(--teal)',
  },
]
