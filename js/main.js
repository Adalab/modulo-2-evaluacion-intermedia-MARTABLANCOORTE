'use strict';

// Traer a js

const  input = document.querySelector('.js__input');
const  prueba = document.querySelector('.js__prueba');
const  pista = document.querySelector('.js__pista');
const  intentos = document.querySelector('.js__intentos');

//Funciones

function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
}

const randomNumber = getRandomNumber (100);
console.log(randomNumber);


//eventos

prueba.addEventListener( 'click'   , (event) => {
    event.preventDefault ();


    // Recoger el valor del input
    const inputvalue = Number(input.value);

    // condicionales
    if (randomNumber === inputvalue){
        pista.innerHTML ='Has ganado campeona!!!';
    }
    else if (randomNumber < inputvalue){
        pista.innerHTML ='Demasiado alto';
    }
    else if (randomNumber > inputvalue){
        pista.innerHTML ='Demasiado bajo';
    }

    //intentos
    let count = 0; 
    function incrementIntentos () {count++;};

    //invocamos función
    incrementIntentos();

    //inner 
    intentos.innerHTML = 'Número de intentos: ${count}';

  });


