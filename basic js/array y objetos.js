//array con contenido de objetos
var nombreArray_deObjetos = [
    {propiedad1_Objeto: "valorPropiedad_Obj1", propiedad2Objeto: "valorPropiedad2"},
    {propiedad1_Objeto: "valorPropiedad_Obj2", propiedad2Objeto: "valorPropiedad2_obj2"}
];
//funcion para filtrar objetos dentro de un array

//al llamar el array, se obtiene la funcion del array
var objetoArrayFiltrado = nombreArray_deObjetos.filter(function(nombreArray_deObjetos_Singular){
    return nombreArray_deObjetos_Singular.propiedad2Objeto1 = valorFiltrado //no necesariamente es un igual, puede ser una condicionante
});

//segunda funcion de filtracion
var nombreDeArrayFiltrado2 = nombreArray_deObjetos.map(function(nombreArray_deObjetos_Singular){
    return nombreArray_deObjetos.propiedad1_Objeto1
});

//funciones de .find() .forEach() .some()

//la funcion de .find() busca ciertas condiciones
var encuentraNombreArray_deojetos_Singular = nombreArray_deObjetos.find(function(nombreArray_deObjetos_Singular){
    return nombreArray_deObjetos_Singular.propiedad1_Objeto === "valorPropiedad_Obj2" //puede ser cualquier valor de cualquier objeto y propiedad
});

//la funcion de .forEach() se utiliza para desplegar toda la propiedad de los objetos
nombreArray_deObjetos.forEach(function(nombreArray_deObjetos_Singular){
    console.log(nombreArray_deObjetos.propiedad1_Objeto);
});

//la funcion .some() da una funcion de true or false
var nombreArray_deObjetos_PropiedadNueva = nombreArray_deObjetos.some(function(){
    return nombreArray_deObjetos_Singular.propiedad2Objeto = condicional;
});