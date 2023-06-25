"use strict"

// Scrie un script care răspunde la modificarea valorii din input#font-size-control (evenimentul input) și modifică stilurile inline al span#text prin actualizarea proprietății font-size. Ca rezultat, atunci când glisați scrollbar-ul, dimensiunea textului se va schimba.

// <input id="font-size-control" type="range" min="16" max="96" />
// <br />
// <span id="text">Abracadabra!</span>


document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.querySelector('.login-form');

    loginForm.addEventListener('submit', function(event) {
      event.preventDefault(); 

      const emailInput = loginForm.elements.email;
      const passwordInput = loginForm.elements.password;

      if (emailInput.value === '' || passwordInput.value === '') {
        alert('Toate câmpurile trebuie completate!');
      } else {
        const formData = {
          email: emailInput.value,
          password: passwordInput.value
        };

        console.log(formData);
        loginForm.reset();
      }
    });
  });


