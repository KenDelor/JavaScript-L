//un ciclo hace que se repita un bloque de codigo hasta que se rompa una condicion
//se tiene que establecer la variable antes de utilizar while o do while



//while (se realiza la validacion antes de llevar a cabo el ciclo)


//for (automaticamente obliga a definir lo que pasa al inicio y al final de cada ejecucion de cada cilco)
//se debe indicar cuando debe de acabar
for (let variable = valor; i > "condicion o validacion"; i "sucecion o consecuencia";){
    console.log("El valor de i es: " + i);
}

//do while (primero ejecuta el codio y despues hace la validacion)


//un ciclo infinito es cuando nunca se va a cumplir la condicion de la funcion, y esto dana al programa y computadora



//ejemplo:
//la funcion promt se utiliza para que el usuario pueda "responder algo" y esa respuesta se queda grabada en la variable establecida
while (respuesta != `4`){ //si el condicional se cumple, entonces se ejecuta el ciclo, por eso se utiliza "!=" para establecer "es diferente a"
    let pregunta = promt(`cuanto es 2 + 2 ?`);
    respuesta = pregunta;
};
