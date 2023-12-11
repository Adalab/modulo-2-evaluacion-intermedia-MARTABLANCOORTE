#Cosas corregidas: 

##En HTML: 

Había creado bien los spans para "pista" y "intentos", pero luego el js se lo puse a la clase del parrafo, en vez de a los spans. 

Con lo cual se me borraba el texto, asi que lo he quitado y se lo he puesto a cada uno de los spans.

##En JS: 

He añadido a los condicionales //
    if (1 > inputvalue || inputvalue > 100 || isNaN(inputvalue)){
        pista.innerHTML ='El número debe estar entre 1 y 100 ';
    } 

    /* Para verificar si introducen otra cosa que no sea un número, ej. oveja. 
    else if (isNaN(inputvalue)){
        pista.innerHTML ='El número debe estar entre 1 y 100 ';
    }
    Pero en este caso al ser input de tipo number no es necesario. Solo nos deja introducir la "e".
    */

He cambiado el contador, porque no me dio tiempo a terminarlo, puse la formula rapidamente, pero no la revisé y salía ${count] como texto al hacer el evento. 

He cambiado las comillas francesas y el error, ya se ha corregido. 

Además he puesto los variables globales arriba: 
    2. VARIABLES GLOBALES DE DATOS:
    // Generar número aleatorio:
    const randomNumber = getRandomNumber (100);
    // Recuento de IntentoS:
    let count = 0;

Y creo que eso es todo... Gracias por vuestra paciencia 😅
