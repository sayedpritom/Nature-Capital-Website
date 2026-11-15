// Nature Capital — loader sequencing + gentle reveal-on-scroll.
// The page is fully usable without JavaScript (the "js" class is only added by the inline head script).
(function () {
  var root = document.documentElement;

  function startReveals() {
    var items = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window)) {
      items.forEach(function (el) { el.classList.add('is-visible'); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -4% 0px' });
    items.forEach(function (el) { io.observe(el); });
  }

  if (!root.classList.contains('loading')) { startReveals(); return; }

  // Branded intro: wait for the page (and a minimum time so the logo animation can finish), then lift the curtain.
  var started = performance.now(), finished = false, MIN = 1900;
  function finish() {
    if (finished) return;
    finished = true;
    root.classList.add('loaded');
    startReveals();
    try { sessionStorage.setItem('nc-intro', '1'); } catch (e) {}
    setTimeout(function () { root.classList.remove('loading', 'loaded'); }, 1400);
  }
  function ready() { setTimeout(finish, Math.max(0, MIN - (performance.now() - started))); }
  if (document.readyState === 'complete') ready(); else window.addEventListener('load', ready);
  setTimeout(finish, 7000);
})();
