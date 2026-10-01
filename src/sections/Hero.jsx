import Reveal from '../components/Reveal'
import profileImage from '../assets/images/profile.jpeg'
export default function Hero() {
  return (
    <main className="hero">
      <div className="hero-main">

        {/* Left side */}
        <Reveal delay={100}>
        <div className="hero-content">

          <p className="hero-eyebrow">
            SOFTWARE DEVELOPER / AI-ML
          </p>

          <h1 className="hero-title">
            I solve problems.
            <br />
            I build things that
            <br />
            actually <span>work.</span>
          </h1>

          <p className="hero-description">
            Computer Science student exploring software engineering,
            algorithms and intelligent systems.
          </p>

          <a href="#work" className="hero-cta">
            Explore my work
            <span aria-hidden="true">↘</span>
          </a>

        </div>

        </Reveal>

        {/* Right side */}
        <Reveal delay={250}>
        <div className="hero-visual">

          <div className="hero-photo">
            <div className="photo-placeholder">
              <img
                src={profileImage}
                alt="Rishu Raj Singh"
                className="profile-image"
              />
            </div>

            <span className="photo-index">R / 01</span>
          </div>

          <div className="hero-current">
            <span className="current-label">CURRENTLY</span>

            <div className="current-status">
              <span className="status-dot"></span>
              <span>Building &amp; learning</span>
            </div>
          </div>

        </div>
        </Reveal>
      </div>

      {/* Three identity areas */}
      <div className="hero-paths">

        <a href="#solve" className="hero-path">
          <div className="path-top">
            <span>01</span>
            <span>↗</span>
          </div>

          <h2>SOLVE</h2>
          <p>Algorithms &amp; DSA</p>
        </a>

        <a href="#work" className="hero-path">
          <div className="path-top">
            <span>02</span>
            <span>↗</span>
          </div>

          <h2>BUILD</h2>
          <p>Products &amp; Projects</p>
        </a>

        <a href="#learn" className="hero-path">
          <div className="path-top">
            <span>03</span>
            <span>↗</span>
          </div>

          <h2>LEARN</h2>
          <p>AI / ML &amp; CS</p>
        </a>

      </div>
    </main>
  )
}