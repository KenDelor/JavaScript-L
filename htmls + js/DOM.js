//lo mejor es hacer variables para cada elemento del html
//son funciones para establecer relacion entre un documento html y uno js

const h1 = document.querySelector('h1'); 
const p = document.querySelector('p'); //este engloba a todos los <p></p>
const parrafito = document.getElementsByClassName('.parrafito');
const pid = document.getElementById('pid');
const input = document.querySelector('input');

console.log(input.value); //lo que va despues del punto del elemento, es una caracteristica que tiene intrinsecamente el elemento

console.log({
    h1,
    p,
    parrafito,
    pid,
    input,
});

h1.innerHTML = 'Patito <br> Feo'; //en este caso lo que se agregue lo va a tomar como codigo html
h1.innerText = 'Otro <br> elemento'; //en este caso solamente se interpreta como texto no como codigo html
//con otros codigos puedes obtener o modificar atributos de partes del html
h1.getAttribute('class'); //puede ser otro tipo, no necesariamente class
h1.setAttribute('class', 'rojo'); //se establece el tipo, y despues el cambio

h1.classList.add('rojo');
h1.classList.remove('verde');

input.value = "12345" //con .value se puede modificar y preestablecer los valores de una parte del html

const img = document.createElement('img'); //crear elementos
img.setAttribute('src', 'https://e1.pngegg.com/pngimages/298/527/png-clipart-snoopy.png');
console.log(img);

pid.append(img); //para colocar una variable dentro de un elemento de html


