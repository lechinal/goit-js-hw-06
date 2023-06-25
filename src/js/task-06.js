"use strict"

// Scrie un script care, atunci când focalizarea este pierdută de pe un input (evenimentul blur), verifică dacă numărul de caractere introduse este corect.

// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Please enter 6 symbols"
// />

var inputElement = document.getElementById('validation-input');

    function validateInput() {
      const inputValue = inputElement.value;
      const requiredLength = parseInt(inputElement.getAttribute('data-length'));

      if (inputValue.length === requiredLength) {
        inputElement.classList.remove('invalid');
        inputElement.classList.add('valid');
      } else {
        inputElement.classList.remove('valid');
        inputElement.classList.add('invalid');
      }
    }

    inputElement.addEventListener('blur', validateInput);