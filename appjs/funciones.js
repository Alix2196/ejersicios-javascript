// function saludar() {

//     console.log("hola mundo");

// }
// saludar();


// function sumar(numero1:string, numero2:string, numero3:string) {
//     console.log(numero1 + numero2 + numero3);
// }

// sumar(true,true,false);

//Funcion que indique cual es el numero mayor y el nummero menor



function menorMayorNumero(num1,num2){

    if(num1 > num2){
        console.log("mayor: "+num1);
        console.log("menor: "+num2);
    }else if(num1 < num2){
        console.log(" menor:"+num1);
        console.log("mayor:"+num2);
    }else{
        console.log("De lo contrario son iguales");
    }
    
}
menorMayorNumero(5,5);