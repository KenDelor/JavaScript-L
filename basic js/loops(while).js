var estudiantes =  ["ricardo", "kenji", "delgado", "ortega"];
function saludarEstudiantes(estudiante){
    console.log(`Hola, ${estudiante}`);
}
while(estudiantes.length > 0){
console.log(estudiantes);
var estudiante = estudiante.shift();
saludarEstudiantes(estudiante);
}