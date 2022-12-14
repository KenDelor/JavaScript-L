//Crear la funcion para agregar de forma mas sencilla los objetos o propiedades nuevas de un objeto general
function nombreFuncion(propiedad1, propiedad2, propiedad3) {
    this.PalabraClavepropiedad1 = propiedad1; //this como referencia a la funcion constructora
    this.PalabraClavepropiedad2 = propiedad2;
    this.PalabraClavepropiedad3 = propiedad3;
}
//Agregar un objeto o nueva propiedad al objeto
var nuevaParteDeObjeto = new nombreFuncion("CorrespondientePropiedad1", "CorrespondientePropiedad2", "CorrespondientePropiedad3");
//los Correspondientes son analogos a los valores correspondientes a las propiedades
nuevaParteDeObjeto

var nuevaParteDeObjeto2 = new nombreFuncion("1", "2", "3");



