/* ================================================
   GenAI Summer Lab — JavaScript
   ================================================ */

/* ======== SIDEBAR ACCORDION ======== */
function toggleAcc(header) {
  const item = header.parentElement;
  item.classList.toggle('open');
}

/* ======== HERO CAROUSEL ======== */
let heroIndex = 0;
const totalSlides = 3;
let heroTimer;

function heroRender() {
  document.getElementById('heroTrack').style.transform = `translateX(-${heroIndex * 100}%)`;
  document.querySelectorAll('.carousel-dot').forEach((dot, i) => {
    dot.classList.toggle('active', i === heroIndex);
  });
  document.getElementById('heroCarousel').setAttribute('data-slide', heroIndex + 1);
}

function heroMove(dir) {
  heroIndex = (heroIndex + dir + totalSlides) % totalSlides;
  heroRender();
  resetHeroTimer();
}

function heroGoto(i) {
  heroIndex = i;
  heroRender();
  resetHeroTimer();
}

function resetHeroTimer() {
  clearInterval(heroTimer);
  heroTimer = setInterval(() => heroMove(1), 6000);
}

/* Start auto-play on page load */
heroTimer = setInterval(() => heroMove(1), 6000);
