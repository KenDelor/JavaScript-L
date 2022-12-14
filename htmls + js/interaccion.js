const h1 = document.querySelector('h1'); 
const input1 = document.querySelector('#calculo1'); //el "#" se coloca para aterrizar un id
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');

function btnOnClick(){
    const sumaInput = Number(input1.value) + Number(input2.value); //para que no se concatenen y solo se sumen se utiliza "Number()"
    pResult.innerText = "Resultado: " + sumaInput;
};//esto hace alusion a la parte del html que dice onClick
