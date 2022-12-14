const h1 = document.querySelector('h1'); 
const input1 = document.querySelector('#calculo1'); //el "#" se coloca para aterrizar un id
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');
const input3 = document.querySelector('#calculo3'); 
const input4 = document.querySelector('#calculo4');
const form = document.querySelector('#form');
const pResult2 = document.querySelector('#result2');

//esta funcion evita que se tenga que escribir codigo o funciones en html

//ParteHTML.addEventListener('NombreEvento', NombreFuncion) 
//el nombre del evento si tiene que ser real en html no un nombre escogido aleatorio
btn.addEventListener('click', btnOnClick); //no son necesarios los parentesis de la funcion en este caso

function btnOnClick(){
    const sumaInput = Number(input1.value) + Number(input2.value); //para que no se concatenen y solo se sumen se utiliza "Number()"
    pResult.innerText = "Resultado: " + sumaInput;
};


//en un formato form se hace como si fuera una encuesta entonces el ultimo boton que encuentra lo toma como un boton de submit
//normalmente despues de un form se recarga la pagina
//el recargar la pagina se evita de la siguiente forma
//en especifico la parte de "event.preventDefault()"
//tambien se puede evitar desde el html estableciendo el tipo de boton a "type=button" y no se convierte preestablecidamente a submit
form.addEventListener('submit', btnOnClick2);

function btnOnClick2(event){
    console.log(event);
    event.preventDefault();
    const sumaInput = Number(input3.value) + Number(input4.value);
    pResult2.innerText = "Resultado: " + sumaInput;
};
