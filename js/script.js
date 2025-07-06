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

  // ===== NUEVO CÓDIGO PARA TESTIMONIOS =====
  const testimonialCards = document.querySelectorAll('.testimonial-card');
  const track = document.querySelector('.carousel-track');
  const prevBtn = document.querySelector('.carousel-arrow.prev');
  const nextBtn = document.querySelector('.carousel-arrow.next');
  
  // Solo inicializar si existen elementos del carrusel
  if (testimonialCards.length > 0) {
    const cardWidth = testimonialCards[0].offsetWidth + 20; // Ancho + gap

    // Flechas del carrusel
    prevBtn?.addEventListener('click', () => {
      track.scrollBy({ left: -cardWidth, behavior: 'smooth' });
    });

    nextBtn?.addEventListener('click', () => {
      track.scrollBy({ left: cardWidth, behavior: 'smooth' });
    });

    // Efecto hover para testimonios
    testimonialCards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px)';
        card.style.boxShadow = '0 15px 30px rgba(0,0,0,0.15)';
      });
      
      card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
        card.style.boxShadow = '0 3px 10px rgba(0,0,0,0.1)';
      });
    });

    // Animación de aparición para la sección
    const testimonialsSection = document.querySelector('.testimonials-section');
    const testimonialObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          testimonialObserver.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });
    
    if (testimonialsSection) {
      testimonialObserver.observe(testimonialsSection);
    }
  }
});


