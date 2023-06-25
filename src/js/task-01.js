"use strict";
const categoriesList= document.querySelector('#categories');
const categoryItems = categoriesList.querySelectorAll('li.item');
console.log( 'Number of categories: ' + categoryItems.length);

categoryItems.forEach(function(item){
    const titleElement=item.querySelector('h2');
    const elements= item.querySelectorAll('ul li');
    console.log('Category:' + titleElement.textContent);
    console.log('Element:' + elements.length);
});