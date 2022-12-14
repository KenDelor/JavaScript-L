var estudiantes =  ["ricardo", "kenji", "delgado", "ortega"];
function saludarEstudiantes(estudiante){
    console.log(`Hola, ${estudiante}`);
}
for(var estudiante of estudiantes){
    saludarEstudiantes(estudiante);
}

// estructura de 'for of'
//  for (variable 'nombre' of 'variable'){funcion};
// esto se debe de entender como:
//  for (variable singular of variable plural)
// la variable singular se le de el nombre que se le de...
// se tomara en la funcion for of como el singular 
// de la segunda variable que puede ser una array

// por cada 'variable1', que se encuentre en 'variable2'
// se llevara a cabo la funcion