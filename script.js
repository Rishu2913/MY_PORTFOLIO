/* ============================================
   RISHU RAJ SINGH — PORTFOLIO SCRIPTS
   ============================================ */

/* ----------- EMBED PROFILE PHOTO ----------- */
(function() {
  const photo = document.getElementById('profilePhoto');
  if (photo) {
    // Replace with your actual photo base64 or URL
    // Photo is embedded via the build process
    photo.onerror = function() {
      this.style.background = 'linear-gradient(135deg, #1a3a6e, #2563eb)';
      this.alt = '';
    };
  }
})();

/* ----------- NAVBAR: Scroll & Active State ----------- */
const navbar = document.getElementById('navbar');
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section[id]');

function updateNavbar() {
  // Scrolled style
  if (window.scrollY > 40) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }

  // Active section highlight
  let current = '';
  sections.forEach(sec => {
    const top = sec.offsetTop - 100;
    if (window.scrollY >= top) {
      current = sec.getAttribute('id');
    }
  });
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + current) {
      link.classList.add('active');
    }
  });
}

window.addEventListener('scroll', updateNavbar, { passive: true });
updateNavbar();

/* ----------- MOBILE HAMBURGER ----------- */
const hamburger = document.getElementById('hamburger');
const navLinksEl = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  navLinksEl.classList.toggle('open');
});

// Close on link click
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    navLinksEl.classList.remove('open');
  });
});

/* ----------- SCROLL REVEAL ANIMATIONS ----------- */
const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      // Stagger delay for sibling cards
      const siblings = [...entry.target.parentElement.children].filter(
        el => el.classList.contains('reveal')
      );
      const index = siblings.indexOf(entry.target);
      entry.target.style.transitionDelay = `${index * 0.08}s`;
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

revealElements.forEach(el => revealObserver.observe(el));

/* ----------- SKILL BAR ANIMATIONS ----------- */
const skillFills = document.querySelectorAll('.skill-fill');

const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const fill = entry.target;
      const width = fill.getAttribute('data-width');
      setTimeout(() => {
        fill.style.width = width + '%';
      }, 200);
      skillObserver.unobserve(fill);
    }
  });
}, { threshold: 0.3 });

skillFills.forEach(fill => skillObserver.observe(fill));

/* ----------- CONTACT FORM ----------- */
const form = document.getElementById('contactForm');
const formNote = document.getElementById('formNote');

if (form) {
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
      formNote.textContent = 'Please fill in all required fields.';
      formNote.style.color = '#ef4444';
      return;
    }

    // Simulate send
    const btn = form.querySelector('button[type="submit"]');
    btn.textContent = 'Sending...';
    btn.disabled = true;

    setTimeout(() => {
      formNote.textContent = '✓ Message sent! I\'ll get back to you soon.';
      formNote.style.color = '#16a34a';
      form.reset();
      btn.textContent = 'Send Message →';
      btn.disabled = false;
      setTimeout(() => { formNote.textContent = ''; }, 5000);
    }, 1200);
  });
}

/* ----------- SMOOTH ANCHOR SCROLL ----------- */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const offset = 76;
      const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

/* ----------- TYPING SUBTITLE EFFECT ----------- */
(function() {
  const subtitleEl = document.querySelector('.hero-subtitle');
  if (!subtitleEl) return;
  const phrases = [
    'AI & ML Student · Java Developer · DSA Enthusiast',
    'Problem Solver · Code Craftsman · Lifelong Learner',
    'Building Intelligent Solutions · One Line at a Time'
  ];
  let phraseIndex = 0;
  let charIndex = 0;
  let deleting = false;
  let paused = false;

  function type() {
    if (paused) return;
    const current = phrases[phraseIndex];

    if (!deleting) {
      subtitleEl.textContent = current.slice(0, charIndex + 1);
      charIndex++;
      if (charIndex === current.length) {
        paused = true;
        setTimeout(() => { deleting = true; paused = false; type(); }, 2800);
        return;
      }
    } else {
      subtitleEl.textContent = current.slice(0, charIndex - 1);
      charIndex--;
      if (charIndex === 0) {
        deleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
      }
    }
    setTimeout(type, deleting ? 38 : 58);
  }

  // Start after initial load animation
  setTimeout(type, 1600);
})();

/* ----------- STATS COUNTER ANIMATION ----------- */
function animateCounter(el, target, suffix = '') {
  const duration = 1400;
  const start = performance.now();
  const isDecimal = target % 1 !== 0;

  function update(now) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const value = eased * target;
    el.textContent = isDecimal ? value.toFixed(2) + suffix : Math.floor(value) + suffix;
    if (progress < 1) requestAnimationFrame(update);
  }
  requestAnimationFrame(update);
}

const statsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const statNums = entry.target.querySelectorAll('.stat-num');
      statNums.forEach(el => {
        const text = el.textContent;
        const num = parseFloat(text.replace(/[^0-9.]/g, ''));
        const suffix = text.includes('+') ? '+' : '';
        animateCounter(el, num, suffix);
      });
      statsObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

const heroStats = document.querySelector('.hero-stats');
if (heroStats) statsObserver.observe(heroStats);

console.log('Portfolio loaded — Rishu Raj Singh 🚀');
