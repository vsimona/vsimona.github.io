(() => {
  const g = document.querySelector('.gal'); if (!g) return;
  const imgs = [...g.querySelectorAll('img')], links = [...document.querySelectorAll('.gal__index a')];
  let i = 0, t;
  const show = n => { i = n; imgs.forEach((im, k) => im.classList.toggle('on', k === n)); links.forEach((a, k) => a.classList.toggle('on', k === n)); };
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const play = () => { clearInterval(t); t = setInterval(() => show((i + 1) % imgs.length), 3400); };
  links.forEach((a, k) => a.addEventListener('mouseenter', () => { clearInterval(t); show(k); }));
  document.querySelector('.gal__index').addEventListener('mouseleave', play);
  play();
})();
