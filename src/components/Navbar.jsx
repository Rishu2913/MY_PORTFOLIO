import { useState, useEffect } from 'react'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Close mobile menu on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsMenuOpen(false)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className="site-header">
      <div className="site-header-inner">
        <a href="#" className="brand-logo" onClick={closeMenu}>
          RISHU<span className="brand-dot">.</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="desktop-nav" aria-label="Primary navigation">
          <ul className="nav-links-list">
            <li>
              <a href="#work" className="nav-link">Work</a>
            </li>
            <li>
              <a href="#solve" className="nav-link">Solve</a>
            </li>
            <li>
              <a href="#about" className="nav-link">About</a>
            </li>
          </ul>

          <a href="#contact" className="nav-cta-link">
            <span>Let&apos;s Talk</span>
            <span className="cta-arrow" aria-hidden="true">↗</span>
          </a>
        </nav>

        {/* Mobile Menu Toggle Button */}
        <button
          type="button"
          className={`mobile-menu-toggle ${isMenuOpen ? 'is-active' : ''}`}
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-controls="mobile-navigation"
        >
          <span className="toggle-bar"></span>
          <span className="toggle-bar"></span>
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      <div
        id="mobile-navigation"
        className={`mobile-drawer ${isMenuOpen ? 'is-open' : ''}`}
        aria-hidden={!isMenuOpen}
      >
        <div className="mobile-drawer-content">
          <nav className="mobile-nav" aria-label="Mobile navigation">
            <a href="#work" className="mobile-nav-link" onClick={closeMenu}>
              <span>Work</span>
              <span className="mobile-link-sub">01</span>
            </a>
            <a href="#solve" className="mobile-nav-link" onClick={closeMenu}>
              <span>Solve</span>
              <span className="mobile-link-sub">02</span>
            </a>
            <a href="#about" className="mobile-nav-link" onClick={closeMenu}>
              <span>About</span>
              <span className="mobile-link-sub">03</span>
            </a>
            <div className="mobile-cta-wrapper">
              <a href="#contact" className="mobile-cta-link" onClick={closeMenu}>
                <span>Let&apos;s Talk</span>
                <span className="cta-arrow" aria-hidden="true">↗</span>
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}
