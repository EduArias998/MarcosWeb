const cursor = document.querySelector('.cursor-dot');
const portafolioSection = document.querySelector('#portafolio');
const cardsSection = document.querySelector('.portfolio-cards');

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
updateCursorSize(); // Esto fuerza una verificación en la carga

document.addEventListener('mousemove', (e) => {
  cursor.style.left = `${e.clientX}px`;
  cursor.style.top = `${e.clientY}px`;
});

let animationPlaying = false;

function handleScroll() {
  const portafolioSection = document.querySelector('.portafolio-section');
  const rect = portafolioSection.getBoundingClientRect();
  const isVisible = (rect.top <= window.innerHeight / 2) && 
                   (rect.bottom >= window.innerHeight / 2);

  if (isVisible && !animationPlaying) {
    animationPlaying = true;
    const squares = document.querySelectorAll('.animated-square');
    
    squares.forEach(square => {
      square.style.animation = 'none';
      void square.offsetWidth; // Trigger reflow
      square.style.animation = '';
    });
    
    setTimeout(() => {
      animationPlaying = false;
    }, 3000); // Duración de la animación
  }
}

window.addEventListener('scroll', handleScroll);

document.addEventListener('DOMContentLoaded', function() {
    // Podemos añadir interacciones adicionales aquí si es necesario
    const cards = document.querySelectorAll('.portfolio-card');
    
    cards.forEach(card => {
        // Reiniciar animaciones al salir del hover
        card.addEventListener('mouseleave', function() {
            const title = this.querySelector('.card-title');
            const subtitle = this.querySelector('.card-subtitle');
            
            title.style.animation = 'none';
            subtitle.style.animation = 'none';
            
            // Pequeño retraso para reiniciar
            setTimeout(() => {
                title.style.animation = '';
                subtitle.style.animation = '';
            }, 10);
        });
    });
});

