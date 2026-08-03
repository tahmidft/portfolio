import { education } from '../data/experience'

export function Education() {
  return (
    <section className="education-section">
      <div className="section-label">Education</div>
      <div className="education-grid">
        {education.map((entry) => (
          <article
            key={entry.degree}
            className="edu-card"
            style={{ ['--c' as string]: entry.color }}
          >
            <div className="edu-card-head">
              <span className="skill-cat-dot" />
              <h3>{entry.degree}</h3>
            </div>
            <p className="edu-school">{entry.school}</p>
            <p className="edu-detail">{entry.detail}</p>
            <span className="edu-dates">{entry.dates}</span>
          </article>
        ))}
      </div>
    </section>
  )
}
