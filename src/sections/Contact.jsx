
export default function Contact() {
  return (
    <>
      <section className="contact" id="contact">
        <div className="section-intro">
          <span className="section-number">07 / CONTACT</span>

          <div>
            <p className="section-label">HAVE SOMETHING IN MIND?</p>

            <h2 className="contact-title">
              Let's build
              <br />
              something
              <br />
              <span>meaningful.</span>
            </h2>

            <p className="contact-description">
              Open to conversations about software,
              interesting projects, and opportunities
              to learn and collaborate.
            </p>

            <a
              href="mailto:rishu.raj.singh1918@gmail.com"
              className="contact-cta"
            >
              GET IN TOUCH
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-inner">
          <a href="#" className="footer-brand">
            RISHU.
          </a>

          <div className="footer-links">
            <a
              href="https://github.com/Rishu2913"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub ↗
            </a>
            <a
              href="https://www.linkedin.com/in/rishu-raj-singh-10647b3ab/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn ↗
            </a>
            <a href="mailto:rishu.raj.singh1918@gmail.com">
              Email ↗
            </a>
          </div>

          <p className="footer-copyright">
            © 2026 Rishu Raj Singh
          </p>
        </div>
      </footer>
    </>
  )
}
