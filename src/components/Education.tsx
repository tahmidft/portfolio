import { education } from '../data/experience'

export function Education() {
  return (
    <section className="education-section">
      <div className="section-label">Education</div>
      <div className="education-grid">
        {education.map((entry) => {
          const year = entry.dates.match(/20\d{2}/)?.[0] ?? ''
          const tag = entry.dates.includes('Expected') ? 'Expected' : 'Graduated'
          return (
            <article
              key={entry.degree}
              className="edu-card"
              style={{ ['--c' as string]: entry.color }}
            >
              <div className="edu-year" title={entry.dates}>
                <span className="edu-year-tag">{tag}</span>
                <span className="edu-year-num">{year}</span>
              </div>
              <div className="edu-body">
                <div className="edu-card-head">
                  <h3>{entry.degree}</h3>
                </div>
                <p className="edu-school">{entry.school}</p>
                <p className="edu-detail">{entry.detail}</p>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
