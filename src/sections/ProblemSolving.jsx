
export default function ProblemSolving() {
  const focusAreas = [
    'Data Structures & Algorithms',
    'Competitive Programming',
    'Algorithmic Problem Solving',
  ]

  return (
    <section className="problem-solving" id="solve">

      {/* SECTION INTRODUCTION */}
      <div className="section-intro">
        <span className="section-number">04 / SOLVE</span>

        <div>
          <p className="section-label">PROBLEM SOLVING</p>

          <h2 className="section-title">
            Problem solving
            <br />
            is how I think.
          </h2>

          <p className="solve-description">
            I practice algorithms and data structures to develop
            stronger reasoning, explore different approaches, and
            write better software.
          </p>
        </div>
      </div>

      {/* PROBLEM SOLVING STATS */}
      <div className="solve-stats">

        <div className="solve-stat">
          <span className="solve-stat-value">600+</span>
          <span className="solve-stat-label">
            PROBLEMS SOLVED
          </span>
        </div>

        <div className="solve-stat">
          <span className="solve-stat-value">DSA</span>
          <span className="solve-stat-label">
            CORE FOCUS
          </span>
        </div>

      </div>

      {/* FOCUS AREAS */}
      <div className="solve-focus">

        <p className="solve-small-label">
          MY PRACTICE
        </p>

        <div className="solve-focus-list">
          {focusAreas.map((area, index) => (
            <div className="solve-focus-item" key={area}>
              <span>
                {String(index + 1).padStart(2, '0')}
              </span>

              <h3>{area}</h3>

              <span aria-hidden="true">↗</span>
            </div>
          ))}
        </div>

      </div>

      {/* CODING PROFILES */}
      <div className="solve-profiles">
        <p className="solve-small-label">
          EXPLORE MY PROFILES
        </p>

        <div className="solve-profile-list">

          <a
            href="https://codeforces.com/profile/rishu_2007"
            target="_blank"
            rel="noopener noreferrer"
            className="solve-profile-link"
          >
            <span>Codeforces</span>
            <span aria-hidden="true">↗</span>
          </a>

          <a
            href="https://leetcode.com/u/Rishu_2007/"
            target="_blank"
            rel="noopener noreferrer"
            className="solve-profile-link"
          >
            <span>LeetCode</span>
            <span aria-hidden="true">↗</span>
          </a>

          <a
            href="https://codolio.com/profile/Rishu_Raj_"
            target="_blank"
            rel="noopener noreferrer"
            className="solve-profile-link"
          >
            <span>Codolio</span>
            <span aria-hidden="true">↗</span>
          </a>

        </div>
      </div>

    </section>


  )

}

