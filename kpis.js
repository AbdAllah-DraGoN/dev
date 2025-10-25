//  KPIs
window.addEventListener("load", function () {
  function startKpiCounter(selector, duration, targetNumber, suffix) {
    const el = document.querySelector(selector);
    if (!el) return;

    let started = false;

    function animate() {
      let start = 0;
      const startTime = performance.now();

      function easeOutQuad(t) {
        return t * (2 - t);
      }

      function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = easeOutQuad(progress);
        const current = Math.round(start + (targetNumber - start) * eased);
        el.textContent = current + suffix;

        if (progress < 1) {
          requestAnimationFrame(update);
        } else {
          el.textContent = targetNumber + suffix;
        }
      }

      requestAnimationFrame(update);
    }

    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started) {
            started = true;
            animate();
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    observer.observe(el);
  }

  // استخدام الـ IDs الجديدة
  startKpiCounter("#kpi-9", 3000, 9, "M");
  startKpiCounter("#kpi-150", 6000, 150, "K");
  startKpiCounter("#kpi-60", 4000, 60, "+");
});

