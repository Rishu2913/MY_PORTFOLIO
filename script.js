/* === SCROLL REVEAL === */
const selectors = [
  '.hero-text','.hero-photo-col',
  '.about-left','.about-right',
  '.skill-group','.proj-card','.cert-card','.contact-card',
  '.achievement','.edu-card',
];
selectors.forEach(s => document.querySelectorAll(s).forEach(el => el.classList.add('reveal')));

const obs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      setTimeout(() => e.target.classList.add('visible'), 60);
      obs.unobserve(e.target);
    }
  });
}, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });

document.querySelectorAll('.reveal').forEach((el, i) => {
  el.style.transitionDelay = (i % 6) * 80 + 'ms';
  obs.observe(el);
});

/* === TYPEWRITER === */
const roles = [
  'B.Tech CSE (AI & ML) · Problem Solver · Builder',
  'Java Developer · Web Enthusiast · DSA Practitioner',
  'ML Engineer in the Making 🧠',
  'Open to Internships & Collaborations 🚀',
];
const target = document.getElementById('typeTarget');
let rIdx = 0, cIdx = 0, deleting = false;

function type() {
  const cur = roles[rIdx];
  target.textContent = cur.slice(0, cIdx + (deleting ? 0 : 1));
  if (!deleting) {
    cIdx++;
    if (cIdx === cur.length) { deleting = true; setTimeout(type, 2200); return; }
    setTimeout(type, 40);
  } else {
    cIdx--;
    target.textContent = cur.slice(0, cIdx);
    if (cIdx === 0) { deleting = false; rIdx = (rIdx + 1) % roles.length; }
    setTimeout(type, 20);
  }
}
setTimeout(type, 900);

/* === ACTIVE NAV === */
const sections = document.querySelectorAll('section[id]');
const navAs = document.querySelectorAll('.nav-links a');
new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      const id = e.target.id;
      navAs.forEach(a => {
        a.style.color = a.getAttribute('href') === '#' + id ? 'var(--purple-l)' : '';
      });
    }
  });
}, { threshold: 0.45 }).observe && sections.forEach(s =>
  new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        navAs.forEach(a => {
          a.style.color = a.getAttribute('href') === '#' + e.target.id ? 'var(--purple-l)' : '';
        });
      }
    });
  }, { threshold: 0.45 }).observe(s)
);

/* === SMOOTH NAV === */
navAs.forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();
    const t = document.querySelector(a.getAttribute('href'));
    if (t) t.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

/* === PHOTO TILT === */
const pw = document.querySelector('.photo-frame');
if (pw) {
  pw.addEventListener('mousemove', e => {
    const r = pw.getBoundingClientRect();
    const x = (e.clientX - r.left - r.width/2) / (r.width/2);
    const y = (e.clientY - r.top - r.height/2) / (r.height/2);
    pw.style.transform = `perspective(600px) rotateY(${x*8}deg) rotateX(${-y*8}deg)`;
  });
  pw.addEventListener('mouseleave', () => {
    pw.style.transform = 'perspective(600px) rotateY(0) rotateX(0)';
  });
}

/* === CONSOLE EASTER EGG === */
console.log(
  '%c Rishu Raj Singh | Portfolio \n%c B.Tech CSE (AI & ML) · Galgotias University\n%c rishu.raj.singh1918@gmail.com | +91 9973994437',
  'color:#a78bfa;font-size:16px;font-weight:bold;',
  'color:#8b88b0;font-size:12px;',
  'color:#22d3ee;font-size:12px;'
);
