"use strict";
let counterValue = 0;

    
    const decrementButton = document.querySelector('[data-action="decrement"]');
    const incrementButton = document.querySelector('[data-action="increment"]');
    const valueSpan = document.getElementById("value");

    function updateCounterValue() {
      valueSpan.textContent = counterValue;
    }

    decrementButton.addEventListener("click", function() {
      counterValue--;
      updateCounterValue();
    });

    incrementButton.addEventListener("click", function() {
      counterValue++;
      updateCounterValue();
    });

    updateCounterValue();