import Reveal from '../components/Reveal'
export default function About() {
  return (
    <section className="about" id="about">

      {/* SECTION INTRO */}
      <div className="section-intro">
        <span className="section-number">06 / ABOUT</span>

        <div>
          <p className="section-label">A LITTLE ABOUT ME</p>

          <h2 className="section-title">
            More than
            <br />
            just the code.
          </h2>
        </div>
      </div>

      {/* ABOUT CONTENT */}
      <Reveal>
      <div className="about-content">

        <div className="about-side">
          <span className="about-side-label">
            THE PERSON BEHIND THE PROJECTS
          </span>

          <span className="about-side-index">
            R / 06
          </span>
        </div>

        <div className="about-main">

          <p className="about-lead">
            I'm Rishu, a Computer Science student
            interested in the space where
            <span> problem solving meets software development.</span>
          </p>

          <div className="about-paragraphs">
            <p>
              I enjoy understanding how things work, breaking
              complicated problems into smaller pieces, and
              turning ideas into functional applications.
            </p>

            <p>
              Competitive programming helps me strengthen my
              reasoning, while building projects teaches me
              how those ideas translate into real software.
            </p>

            <p>
              I'm also exploring artificial intelligence and
              machine learning, with a focus on developing
              practical skills through continuous learning
              and experimentation.
            </p>
          </div>

          <div className="about-philosophy">
            <span>MY APPROACH</span>

            <p>
              Learn the fundamentals.
              <br />
              Solve the problem.
              <br />
              Build something useful.
              <br />
              Keep improving.
            </p>
          </div>

        </div>

      </div>
      </Reveal>

    </section>
  )
}
