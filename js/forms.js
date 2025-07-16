document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('contactForm');
  const emailError = document.getElementById('email-error');
  const messageError = document.getElementById('message-error');

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    let isValid = true;

    // Validación de email
    const email = form.email;
    if (!email.validity.valid) {
      if (email.validity.valueMissing) {
        emailError.textContent = 'Por favor ingresa tu correo electrónico';
      } else if (email.validity.typeMismatch) {
        emailError.textContent = 'Ingresa un correo electrónico válido';
      } else if (email.validity.tooShort) {
        emailError.textContent = `El correo debe tener al menos ${email.minLength} caracteres`;
      }
      emailError.style.display = 'block';
      isValid = false;
    } else {
      emailError.style.display = 'none';
    }

    // Validación de mensaje
    const message = form.message;
    if (!message.validity.valid) {
      if (message.validity.valueMissing) {
        messageError.textContent = 'Por favor escribe tu mensaje';
      } else if (message.validity.tooShort) {
        messageError.textContent = `El mensaje debe tener al menos ${message.minLength} caracteres`;
      } else if (message.validity.tooLong) {
        messageError.textContent = `El mensaje no debe exceder ${message.maxLength} caracteres`;
      }
      messageError.style.display = 'block';
      isValid = false;
    } else {
      messageError.style.display = 'none';
    }

    // Si todo es válido
    if (isValid) {
      alert('Formulario enviado correctamente');
      form.reset();
    }
  });

  // Validación en tiempo real
  form.email.addEventListener('input', function() {
    if (this.validity.valid) {
      emailError.style.display = 'none';
    }
  });

  form.message.addEventListener('input', function() {
    if (this.validity.valid) {
      messageError.style.display = 'none';
    }
  });
});