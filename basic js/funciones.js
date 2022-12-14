//conjunto de sentencias que se utilizan para generar acciones a partir de varaibles preestablecidas


function NombredeFuncion(parametro){ //los parametros son lo que la funcion espera que se atienda dentro de la misma
    //aqui va la accion de la funcion
};

NombredeFuncion();

//
var NombreDeFuncion2 = function(parametro){ //los parametros pueden ser cosas que no tengan valores definidos
    //nuevamente otra accion                // puede que los valores se definan hasta que se llame a la funcion
};

NombreDeFuncion2();



// Una función puede recibir tantos parámetros como se deseen, aunque no sería demasiado razonable que una función reciba más de cuatro o cinco parámetros.

//Los parámetros que se le pasan a la función pueden ser:

//a) Valores simples a los que se denomina literales: por ejemplo 554, true ó ‘aldea’.

//b) Variables que contienen un número, un texto o un valor booleano.

//c) Objetos de naturaleza compleja, como arrays y otros tipos de objetos que veremos más adelante.

//Cuando una función recibe un parámetro dicho parámetro funciona como si se tratara de una variable disponible para la función inicializada con el valor que se le pasa a la función.

//Veamos un ejemplo:

function mostrarImporteConImpuestos(importeSinImpuestos) { 

var importeConImpuestos; importeConImpuestos = importeSinImpuestos * 1.21;

msg = 'Importe antes de impuestos: '+ importeSinImpuestos + '\n\n';

alert(msg + 'Importe con impuestos: '+ importeConImpuestos + '\n\n');
};

//Aquí vemos dos cosas de interés: el parámetro que recibe la función no tiene un tipo de datos explícito. El tipo de datos es “inferido” por el intérprete JavaScript.

//Por otro lado, el parámetro está disponible dentro de la función con el valor con el que haya sido invocado. Por ejemplo onclick="mostrarImporteConImpuestos(100)" hará que importeSinImpuestos valga 100 porque ese es el valor con el que se invoca.

//Cuando una función tiene varios parámetros, se debe invocar escribiendo su nombre seguido de los parámetros en el orden adecuado.