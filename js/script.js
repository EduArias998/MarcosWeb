document.addEventListener('DOMContentLoaded', function() {
  // Animación para las cards (tu código existente)
  const cards = document.querySelectorAll('.card');
  const cardObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        const index = Array.from(cards).indexOf(entry.target);
        entry.target.style.transitionDelay = `${index * 0.1}s`;
        cardObserver.unobserve(entry.target);
      }
    });
  }, { 
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });
  
  cards.forEach(card => {
    cardObserver.observe(card);
  });

  // Nueva animación para la sección de recursos
  const resourceSection = document.querySelector('.resources-section');
  
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        sectionObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });
  
  if (resourceSection) {
    sectionObserver.observe(resourceSection);
  }
});