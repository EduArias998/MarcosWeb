const cursor = document.querySelector('.cursor-dot');
const portafolioSection = document.querySelector('#portafolio');
const cardsSection = document.querySelector('.portfolio-cards');
const expandingCircle = document.querySelector('.expanding-circle');

// Cursor dinámico (más grande en la primera sección)
function updateCursorSize() {
  const portafolioRect = portafolioSection.getBoundingClientRect();
  const cardsRect = cardsSection.getBoundingClientRect();

  const inPortafolio = portafolioRect.top <= window.innerHeight && portafolioRect.bottom >= 0;
  const inCards = cardsRect.top <= window.innerHeight && cardsRect.bottom >= 0;

  if (inPortafolio && !inCards) {
    cursor.classList.add('big');
  } else {
    cursor.classList.remove('big');
  }
}

document.addEventListener('scroll', updateCursorSize);
updateCursorSize();

document.addEventListener('mousemove', (e) => {
  cursor.style.left = `${e.clientX}px`;
  cursor.style.top = `${e.clientY}px`;
});

// Reproducción de animaciones al hacer scroll en portafolio
let animationPlaying = false;
function handleScroll() {
  const portafolioSectionScroll = document.querySelector('.portafolio-section');
  const rect = portafolioSectionScroll.getBoundingClientRect();
  const isVisible = (rect.top <= window.innerHeight / 2) &&
                    (rect.bottom >= window.innerHeight / 2);

  if (isVisible && !animationPlaying) {
    animationPlaying = true;
    const squares = document.querySelectorAll('.animated-square');

    squares.forEach(square => {
      square.style.animation = 'none';
      void square.offsetWidth;
      square.style.animation = '';
    });

    setTimeout(() => {
      animationPlaying = false;
    }, 3000);
  }
}

window.addEventListener('scroll', handleScroll);

// Reiniciar animaciones al salir del hover en las cards
document.addEventListener('DOMContentLoaded', function () {
  const cards = document.querySelectorAll('.portfolio-card');

  cards.forEach(card => {
    card.addEventListener('mouseleave', function () {
      const title = this.querySelector('.card-title');
      const subtitle = this.querySelector('.card-subtitle');

      title.style.animation = 'none';
      subtitle.style.animation = 'none';

      setTimeout(() => {
        title.style.animation = '';
        subtitle.style.animation = '';
      }, 10);
    });
  });
});

// Expansión de círculo negro al hacer scroll en portfolio-cards
function animateCircle() {
  const scrollY = window.scrollY;
  const windowHeight = window.innerHeight;
  const docHeight = document.body.scrollHeight;

  const scrollProgress = scrollY / (docHeight - windowHeight);

  // Tamaño del círculo: de 100px hasta cubrir pantalla (2x diagonal)
  const maxSize = Math.sqrt(window.innerWidth ** 2 + window.innerHeight ** 2) * 2;
  const size = 100 + (maxSize - 100) * scrollProgress;

  expandingCircle.style.width = `${size}px`;
  expandingCircle.style.height = `${size}px`;

  // Ocultamos al principio y al final
  if (scrollProgress < 0.05 || scrollProgress > 0.95) {
    expandingCircle.classList.add('hidden');
  } else {
    expandingCircle.classList.remove('hidden');
  }
}

window.addEventListener('scroll', animateCircle);
