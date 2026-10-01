
export default function Learning() {
  const skillGroups = [
    {
      number: '01',
      title: 'BUILD WITH',
      description: 'Technologies I use to develop applications.',
      skills: [
        'JavaScript',
        'React',
        'Node.js',
        'Express.js',
        'MongoDB',
        'HTML & CSS',
      ],
    },
    {
      number: '02',
      title: 'SOLVE WITH',
      description: 'Languages and concepts I use for problem solving.',
      skills: [
        'C++',
        'Java',
        'Python',
        'Data Structures',
        'Algorithms',
        'OOP',
      ],
    },
    {
      number: '03',
      title: 'EXPLORE WITH',
      description: 'Areas I am studying and developing my knowledge in.',
      skills: [
        'Artificial Intelligence',
        'Machine Learning',
        'Database Management',
        'Software Engineering',
      ],
    },
  ]

  return (
    <section className="learning" id="learn">

      {/* SECTION INTRO */}
      <div className="section-intro">
        <span className="section-number">05 / LEARN</span>

        <div>
          <p className="section-label">CONTINUOUS LEARNING</p>

          <h2 className="section-title">
            Always curious.
            <br />
            Always improving.
          </h2>

          <p className="learning-description">
            I believe good software starts with understanding
            the fundamentals. I keep learning through coursework,
            problem solving, and building real projects.
          </p>
        </div>
      </div>

      {/* EDUCATION */}
      <div className="learning-education">

        <div className="learning-education-label">
          <span>EDUCATION</span>
          <span>01 / FOUNDATION</span>
        </div>

        <div className="learning-education-content">
          <h3>B.Tech in Computer Science</h3>

          <p className="learning-degree">
            Specialization in Artificial Intelligence
            &amp; Machine Learning
          </p>

          <div className="learning-education-meta">
            <span>Galgotias University</span>
            <span>2024 — Present</span>
          </div>
        </div>

      </div>

      {/* SKILL GROUPS */}
      <div className="learning-skills">

        <p className="learning-small-label">
          MY TECHNICAL TOOLKIT
        </p>

        {skillGroups.map((group) => (
          <div className="learning-skill-group" key={group.number}>

            <span className="learning-group-number">
              {group.number}
            </span>

            <div className="learning-group-content">
              <h3>{group.title}</h3>
              <p>{group.description}</p>

              <div className="learning-skill-tags">
                {group.skills.map((skill) => (
                  <span key={skill} className="learning-skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

          </div>
        ))}

      </div>

    </section>
  )
}
