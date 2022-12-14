var estudiantes =  ["ricardo", "kenji", "delgado", "ortega"];
function saludarEstudiantes(estudiante){
    console.log(`Hola, ${estudiante}`);
}
for(var i = 0; i < estudiantes.length; i++){
    saludarEstudiantes(estudiantes[i]);
}

//estructura de for
// "for ('paso 1; paso 2; paso 3')" --
    //paso 1 ('variable i' y su definicion, variable que sera tomada en cuenta;)
    //paso 2 ('statement', lo que se tiene que cumplir "mientras" sea verdad se creara un loop;)
    //paso 3 ('consecuencia', la consecuencia  en la variable si se cumple el paso 2;)

