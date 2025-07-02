document.addEventListener('DOMContentLoaded', function() {
  const cards = document.querySelectorAll('.card');
  
  const cardObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        
        // Opcional: retraso escalonado entre cards
        const index = Array.from(cards).indexOf(entry.target);
        entry.target.style.transitionDelay = `${index * 0.1}s`;
        
        cardObserver.unobserve(entry.target);
      }
    });
  }, { 
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px' // Activa cuando el 10% del elemento es visible
  });
  
  // Observar cada card
  cards.forEach(card => {
    cardObserver.observe(card);
  });
});