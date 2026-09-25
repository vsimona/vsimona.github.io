(() => {
  const btn = document.querySelector('.nav__menu');
  const menu = document.getElementById('menu');
  if (!btn || !menu) return;
  const closeBtn = menu.querySelector('.menu__close');
  const open = () => {
    menu.classList.add('is-open');
    btn.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
    closeBtn.focus();
  };
  const close = () => {
    menu.classList.remove('is-open');
    btn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
    btn.focus();
  };
  btn.addEventListener('click', open);
  closeBtn.addEventListener('click', close);
  menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    menu.classList.remove('is-open');
    btn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }));
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && menu.classList.contains('is-open')) close(); });
})();

(() => {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const sel = ['.slabel','.block','.pcard','.chero > .cover','.feat','.pillar','.module','.flow','.kcell','.band','.drow',
               '.stage','.landing','.ld__fig','.bp figure','.two .kcell','.shot--hero','.skill','.tf__cols > .stack','.next a','.teaser__row',
               '.footer__head','.footer__links','.arow > *','.channel','.contact__intro'];
  const els = [...new Set(document.querySelectorAll(sel.join(',')))].filter(el => !el.closest('.hero'));
  if (reduce || !('IntersectionObserver' in window)) return;
  els.forEach(el => {
    el.classList.add('reveal');
    const sibs = [...el.parentElement.children].filter(s => s.matches(sel.join(',')));
    const i = sibs.indexOf(el);
    if (sibs.length > 1 && i > 0) el.style.setProperty('--d', Math.min(i, 4) * 90 + 'ms');
  });
  const io = new IntersectionObserver(entries => entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); }
  }), { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));
})();
