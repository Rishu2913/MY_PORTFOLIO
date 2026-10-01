import Reveal from '../components/Reveal'
export default function FeaturedWork() {
  return (
    <section className="featured-work">

      {/* SECTION HEADING */}
      <div className="section-intro">
        <span className="section-number">03 / WORK</span>

        <div>
          <p className="section-label">SELECTED PROJECTS</p>

          <h2 className="section-title">
            Things I've built
            <br />
            and learned from.
          </h2>
        </div>
      </div>


      {/* PROJECT 01 — EDUNA */}
      <Reveal>
      <article className="featured-project">

        <div className="featured-project-number">
          01
        </div>

        <div className="featured-project-content">

          <div className="featured-project-header">
            <div>
              <p className="featured-project-label">
                VIRTUAL CAMPUS PLATFORM
              </p>

              <h3>EDUNA</h3>
            </div>

            <span className="featured-project-year">
              2026
            </span>
          </div>

          <p className="featured-project-description">
            A virtual campus platform where I worked on the coding
            space and leaderboard backend, including code submissions,
            remote execution and performance tracking.
          </p>

          <div className="featured-project-info">

            <div>
              <span>MY ROLE</span>
              <p>Coding Space &amp; Leaderboard Backend</p>
            </div>

            <div>
              <span>TECH</span>
              <p>
                React / Node.js / Express.js /
                MongoDB / Socket.IO
              </p>
            </div>

          </div>

          <div className="featured-project-built">
            <span>WHAT I BUILT</span>

            <ul>
              <li>Code submission and result management</li>
              <li>Judge0 remote code execution integration</li>
              <li>Leaderboard scoring and ranking</li>
              <li>REST APIs for coding and submission modules</li>
            </ul>
          </div>

          <div className="featured-project-links">
            <a
              href="https://github.com/Rishu2913/EDUNA"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub ↗
            </a>

            <a
              href="https://xyz-beta-eight.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Project ↗
            </a>
          </div>

        </div>

      </article>
</Reveal>

      {/* PROJECT 02 — CARBON FOOTPRINT CALCULATOR */}
      <Reveal delay={150}>
      <article className="featured-project">

        <div className="featured-project-number">
          02
        </div>

        <div className="featured-project-content">

          <div className="featured-project-header">
            <div>
              <p className="featured-project-label">
                SUSTAINABILITY TOOL
              </p>

              <h3>Carbon Footprint Calculator</h3>
            </div>

            <span className="featured-project-year">
              2026
            </span>
          </div>

          <p className="featured-project-description">
            An interactive web application that estimates weekly
            carbon emissions from everyday activities and helps users
            understand their major emission sources.
          </p>

          <div className="featured-project-info">

            <div>
              <span>TECH</span>
              <p>HTML / CSS / JavaScript / Chart.js</p>
            </div>

            <div>
              <span>FOCUS</span>
              <p>
                Emission calculations / Data visualization /
                Personalized recommendations
              </p>
            </div>

          </div>

          <div className="featured-project-built">
            <span>WHAT I BUILT</span>

            <ul>
              <li>JavaScript-based emission calculations</li>
              <li>Category-wise charts and visualizations</li>
              <li>Personalized reduction recommendations</li>
            </ul>
          </div>

          <div className="featured-project-links">
            <a
              href="https://github.com/Rishu2913/Carbon-Footprint-Calculator"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub ↗
            </a>
          </div>

        </div>

      </article>
    </Reveal>
    </section>
  )
}
