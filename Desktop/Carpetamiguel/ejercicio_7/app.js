const general = 50000;
const preferencial = 150000;
const VIP = 300000;
let boletas;
let tipodepago
let costoTotal = "0"
let total;
let cargo = 5000;
let opcionSeleccionada;
let impuestos = 0.010;
opcionSeleccionada = parseInt(prompt("Elija el tipo de boleta que desea:   \n1 General 50000  \n2 Preferencial 150000  \n3 VIP 300000"));
if(opcionSeleccionada < 1 || opcionSeleccionada > 3){
    alert("Esa zona del concierto no se encuentra. Elija un número diferente.");
} else {
    boletas = parseInt(prompt("¿Cuántas boletas desea?"));
    if(boletas < 1 || boletas > 5){
        alert("Solo se pueden comprar entre 1 o 5 boletas");
    } else {
        switch(opcionSeleccionada){
            case 1:
                costoTotal = (general * boletas) + cargo + (general * boletas * impuestos);
                break;
            case 2:
                costoTotal = (preferencial * boletas) + cargo + (preferencial * boletas * impuestos);
                break;
            case 3:
                costoTotal = (VIP * boletas) + cargo + (VIP * boletas * impuestos);
                break;
            
        }

        alert("Su compra es de :"+ opcionSeleccionada+  "\Impuestos 500  \el cargo de el concierto que es 5000" )
       
       
        alert("El costo total es $: " + costoTotal);

        tipodepago = parseInt(prompt("Que metodo de pago usara: \n1 Tarjeta \n2 Efectivo"))
        if (tipodepago <1 || tipodepago > 2){
            alert ("metodo de pago rechazado")
        }
    }
}

    
