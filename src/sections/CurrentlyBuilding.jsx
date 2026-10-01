import TiltCard from '../components/TiltCard'
export default function CurrentlyBuilding() {
  return (
    <section className="currently-building" id="work">

      <div className="section-intro">
        <span className="section-number">02 / NOW</span>

        <div>
          <p className="section-label">CURRENTLY BUILDING</p>

          <h2 className="section-title">
            Ideas I'm turning
            <br />
            into working software.
          </h2>
        </div>
      </div>

      <article className="current-project">
      <TiltCard>
            <div className="project-heading">
              <span className="project-type">CURRENT PROJECT</span>

              <span className="project-arrow" aria-hidden="true">
                ↗
              </span>
            </div>
        </TiltCard>      
        <div className="project-main">

          <div className="project-name-area">
            <h3>ResumeAI</h3>

            <p>
              An intelligent resume analysis and job recommendation
              platform designed to help candidates understand where
              they stand and what they should improve.
            </p>
          </div>

          <div className="project-details">

            <div className="project-detail">
              <span>STATUS</span>

              <p className="project-status">
                <span className="status-dot"></span>
                In development
              </p>
            </div>

            <div className="project-detail">
              <span>FOCUS</span>

              <ul>
                <li>Resume Analysis</li>
                <li>Job Matching</li>
                <li>AI / ML</li>
              </ul>
            </div>

          </div>

        </div>

        <div className="project-footer">
          <span>SOFTWARE / AI</span>
          <span>2026 / PRESENT</span>
        </div>

      </article>

    </section>
  )
}