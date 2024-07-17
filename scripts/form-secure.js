// ? Delete event default for all forms
const forms = document.querySelectorAll('form');
forms.forEach(function(form) {
  form.addEventListener('submit', function(event) {
    event.preventDefault();
  });
});

// ? You can add diferent validations for each form
function validateForm(formulario) {
  let inputs = formulario.querySelectorAll('input, textarea, checkbox');
  let isValid = true;

  inputs.forEach(function(input) {
    input.classList.remove('error');
      if (input.name === 'email' && !isValidEmail(input.value)) {
          isValid = false;
          input.classList.add('error');
          notify.warning('El correo electrónico no es válido', 3000);
      } else if (input.type === 'checkbox' && !input.checked) {
          isValid = false;
          notify.warning('Debes aceptar los términos y condiciones', 3000);
      } else if (input.name === 'name' && (input.value.length < 3 || input.value.length > 50)) {
          isValid = false;
          input.classList.add('error');
          notify.warning('El nombre debe tener entre 3 y 50 caracteres', 3000);
      } else if (input.name === 'last-names' && (input.value.length < 8 || input.value.length > 90)) {
          isValid = false;
          input.classList.add('error');
          notify.warning('Los apellidos deben tener entre 8 y 90 caracteres', 3000);
      } else if (input.type === 'textarea' && input.value.length < 10) {
          isValid = false;
          input.classList.add('error');
          notify.warning('La descripción debe tener al menos 10 caracteres', 3000);
      } else if (input.name === 'phone' && !isValidPhone(input.value)) {
          isValid = false;
          input.classList.add('error');
          notify.warning('El número de teléfono no es válido', 3000);
      }
  });
  return isValid;
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidPhone(phone) {
  return /^\d{10}$/.test(phone);
}