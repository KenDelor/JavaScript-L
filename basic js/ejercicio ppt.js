var piedra = "Piedra";
var papel = "Papel";
var tijera = "Tijera";

var resultado = function(user, cpu) 
   {if (user != cpu){
    {    
        if (user === piedra && cpu === papel); 
        else if (user === papel && cpu === tijera);
        else if (user === tijera && cpu === piedra);
                console.log ("El usuario ha perdido");}
    {                
        if (cpu === piedra && user === papel);
        else if (cpu === papel && user === tijera);
        else if (cpu === tijera && user === piedra);
                console.log ("El usuario ha ganado");}
    if (cpu = user) 
        {
            console.log("Empate");
        }
    }
        };
