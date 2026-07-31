import { skillCategories } from '../data/projects'

export function Skills() {
  return (
    <section className="skills-section">
      <div className="section-label">Skills</div>
      <div className="skills-grid">
        {skillCategories.map((cat) => (
          <div key={cat.title} className="skill-cat" style={{ ['--c' as string]: cat.color }}>
            <div className="skill-cat-head">
              <span className="skill-cat-dot" />
              <h4>{cat.title}</h4>
            </div>
            <div className="skill-chips">
              {cat.skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
