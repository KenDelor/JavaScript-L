var numero = x;

switch (true) { //esto indica "si es ... (valores, numeros, etc), entonces"
    case 1:
        console.log("Soy uno")
        break;
    case 10:
        console.log("Soy un diez")
        break; //cuando se establece el break se acaba la funcion switch

    default:
        console/log("Nada")

        break;
}

//es una forma de genrar condiciones por pasos
//si un caso es verdad, entonces pasa eso
//se pasa al siguiente si el anterior no es verdad
//si no se cumple ningun caso, entonces se llega a default