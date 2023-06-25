"use strict"

// Scrie un script care răspunde la modificarea valorii din input#font-size-control (evenimentul input) și modifică stilurile inline al span#text prin actualizarea proprietății font-size. Ca rezultat, atunci când glisați scrollbar-ul, dimensiunea textului se va schimba.

// <input id="font-size-control" type="range" min="16" max="96" />
// <br />
// <span id="text">Abracadabra!</span>


const fontSizeControl = document.getElementById("font-size-control");
    const textSpan = document.getElementById("text");

    fontSizeControl.addEventListener("input", function() {
      const fontSize = fontSizeControl.value;
      textSpan.style.fontSize = fontSize + "px";
    });