let variable_caso = 2;
var nombre = "Nino";
var edad = 10;

switch (variable_caso){
    case 1: 
        console.log("Cuando la variable es 1");
        break;
    case 2: 
        console.log("Cuando la veriable es 2");
        break;
    case 0:
        console.log("Cuando la variable es 0");
        break;
    default:
        console.log("Cuando la variable no esta en el caso por defecto(default)");
}

// switch (nombre) {
//     case "Johnson":
//         console.log("Hola " + nombre);
//         break;
//     case "Juan":
//         console.log("Hola " + nombre);
//         break;
//     case "Alix":
//         console.log("Hola " + nombre);
//         break;
//     default:
//         console.log("No esta dentro de la variable case");
//         break;
// }


switch (edad ) {
    case 20:
        console.log("Hola tu edad es igual o mayor a " + edad);
        break;
    case 25:
        console.log("Hola tu edad es igual o mayor a  " + edad);
        break;
    case 30:
        console.log("Hola tu edad es igual o mayor a  " + edad);
        break;
    default:
        console.log("No esta dentro de los casos mencionados (default)");
        break;
        
}



