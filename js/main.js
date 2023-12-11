'use strict';

// 1. QUERY-SELECTOR: (traigo a JS)

const  input = document.querySelector('.js__input');
const  prueba = document.querySelector('.js__prueba');
const  pista = document.querySelector('.js__pista');
const  intentos = document.querySelector('.js__intentos');

// 2. VARIABLES GLOBALES DE DATOS: 

// Generar número aleatorio: 
const randomNumber = getRandomNumber (100);

// Recuento de IntentoS: 
let count = 0;

//3. Funciones

function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
}

console.log(`Mi número aleatorio es${randomNumber}`);


//eventos

prueba.addEventListener( 'click'   , (event) => {
    event.preventDefault ();
    

    // Recoger el valor del input
    const inputvalue = Number(input.value);

    // condicionales
    if (1 > inputvalue || inputvalue > 100 || isNaN(inputvalue)){
        pista.innerHTML ='El número debe estar entre 1 y 100 ';
    }
    else if (randomNumber === inputvalue){
        pista.innerHTML ='Has ganado campeona!!!';
    }
    else if (randomNumber < inputvalue){
        pista.innerHTML ='Demasiado alto';
    }
    else if (randomNumber > inputvalue){
        pista.innerHTML ='Demasiado bajo';
    }
    else if (randomNumber > inputvalue){
        pista.innerHTML ='Demasiado bajo';
    }
    /* Para verificar si introducen otra cosa que no sea un número, ej. oveja. 
    else if (isNaN(inputvalue)){
        pista.innerHTML ='El número debe estar entre 1 y 100 ';
    }
    Pero en este caso al ser input de tipo number no es necesario. Solo nos deja introducir la "e".
    */

    //intentos

        //función:
    function incrementoIntentos() {
        count++;

    };

    incrementoIntentos();

        //inner 
    intentos.innerHTML = `${count}`;

  });