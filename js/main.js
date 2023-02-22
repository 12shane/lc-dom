'use strict';


//h1
// const element = document.querySelector('h1');
// //bottone cambia colore
// const buttonChangeColor = document.getElementById('change-color');

// console.log({element});
// console.log(element.className);
//  console.log(element.classList)
// element.className = 'sottotitolo';

// console.log(element.className);

// element.className += element.className + ' grassetto';

// console.log(element.innerHTML);

// element.innerHTML = '<span>Nuovo titolo</span>';

// const testoCheVoglioAggiungere = 'Testo aggiunto';

// element.append(testoCheVoglioAggiungere);
// element.prepend('testo che viene prima');

// element.classList.add('container', 'nuovaclasse');
// element.classList.remove('titolo', 'paperino');

// element.classList.toggle('rosso');

// console.log('prima evento');




// buttonChangeColor.addEventListener('click', 
// function() {
//     // console.log('sono qui?');
//     // alert('bottone cliccato');

//     // element.classList.remove('red');
//     // element.classList.add('green');

//     element.classList.toggle('green');
//     element.innerHTML = 'Nuovo testo';
// }
// );

// console.log('dopo evento');

//esempio hamburger menu
const hamburgerButton = document.getElementById('hamburger-button');
const hamburgerIcon = document.querySelector('.hamburger');
const navMenu = document.querySelector('nav.main-menu');

//esempio input
const inputElement = document.getElementById('input-nome');
const inputButton = document.getElementById('cambia-testo');


hamburgerButton.addEventListener('click', 
function(){
    //cambio icona
    hamburgerIcon.classList.toggle('fa-grip-lines');
    hamburgerIcon.classList.toggle('fa-xmark');
    //mostro/nascondo menu
    navMenu.classList.toggle('show');
});




console.log(typeof inputElement.value);



inputButton.addEventListener('click', 
    function() {
        inputElement.value = 'contenuto dopo click';

    }
)




//fa-grip-lines
//fa-xmark


