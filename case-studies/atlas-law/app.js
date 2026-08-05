/* Atlas Law Firm — interactions */
(function () {
  const header = document.getElementById('header');
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');

  /* Sticky header shadow on scroll */
  const onScroll = () => {
    if (window.scrollY > 40) header.classList.add('scrolled');
    else header.classList.remove('scrolled');
  };
  window.addEventListener('scroll', onScroll);
  onScroll();

  /* Mobile menu */
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    navToggle.textContent = navLinks.classList.contains('open') ? '✕' : '☰';
  });
  navLinks.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      navLinks.classList.remove('open');
      navToggle.textContent = '☰';
    });
  });

  /* Scroll-spy: highlight active nav link */
  const sections = ['home', 'about', 'services', 'blog', 'contact']
    .map(id => document.getElementById(id))
    .filter(Boolean);
  const links = navLinks.querySelectorAll('a');
  const spy = () => {
    let current = 'home';
    const y = window.scrollY + 120;
    sections.forEach(sec => { if (sec.offsetTop <= y) current = sec.id; });
    links.forEach(l => {
      l.classList.toggle('active', l.getAttribute('href') === '#' + current);
    });
  };
  window.addEventListener('scroll', spy);
  spy();

  /* Reveal on scroll */
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach((el, i) => {
    el.style.transitionDelay = (i % 4) * 0.08 + 's';
    io.observe(el);
  });

  /* Contact form (demo) */
  const form = document.getElementById('contactForm');
  const note = document.getElementById('formNote');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      note.textContent = '✓ Thank you! Your request has been received (demo).';
      note.style.color = '#C9A24B';
      form.reset();
      setTimeout(() => {
        note.textContent = 'This is a portfolio demo — no data is submitted.';
        note.style.color = '';
      }, 4000);
    });
  }
})();
