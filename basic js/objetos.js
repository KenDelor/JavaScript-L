// creacion de objetos
var objeto = {
    palabraClave: "valor", //los valores pueden ser palabras o numeors
    palabraClave2: "valor2",
    palabraClave3: "valor3",
    palabraClave4: function(){
        console.log(`Otra ${this.palabraClave2} ${this.Otra}`)
    } //"this" hace referencia al objeto global
};

//acceso a objetos
objeto.palabraClave

//llamar funciones de objetos
objeto.palabraClave4();
