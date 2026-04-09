// NAV scroll
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('nav--scrolled', window.scrollY > 40);
}, { passive: true });

// Burger
const burger = document.getElementById('burger');
const links  = document.querySelector('.nav__links');
burger && burger.addEventListener('click', () => {
  const open = links.classList.toggle('open');
  document.body.style.overflow = open ? 'hidden' : '';
});
links && links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  links.classList.remove('open');
  document.body.style.overflow = '';
}));

// Scroll reveal
const obs = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); obs.unobserve(e.target); } });
}, { threshold: 0.1 });
document.querySelectorAll('.kcard, .gen-card, .gallery__item, .breed__inner, .contact__inner, .stats__item')
  .forEach((el, i) => {
    el.classList.add('reveal');
    el.style.transitionDelay = (i % 4) * 0.08 + 's';
    obs.observe(el);
  });

// Form
const form = document.querySelector('.contact__form');
form && form.addEventListener('submit', e => {
  e.preventDefault();
  const btn = form.querySelector('.btn-submit');
  btn.textContent = 'Заявка отправлена ✓';
  btn.style.background = 'rgba(0,212,255,0.15)';
  btn.style.color = 'var(--cyan)';
  btn.style.boxShadow = 'none';
  btn.disabled = true;
});
