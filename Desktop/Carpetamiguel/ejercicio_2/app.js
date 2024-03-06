const PagoCompleto = 7000000
const PagoEn2Cuotas = 3500000
const PagoEn3Cuotas = 2333333
const Completo = 1 
const En2Cuotas = 2
const En3cuotas = 3



let costoUnitario
let dinero


let opcionSeleccionada = parseInt(prompt ("seleccione el tipo de pago que usara: \n1. PagoCompleto ($7000000 c/u) \n2. Pagoa2Cuotas ($3500000 c/u) \n3. Pagoa3Cuotas (2333333 c/u) "))
if (opcionSeleccionada === 1) {
    costoUnitario = Completo
    dinero= parseInt (prompt("ingrese la cantidad de dinero 7000000 : "))
    alert(PagoCompleto - (PagoCompleto* 0.05))
}else if (opcionSeleccionada === 2) {
    costoUnitario === En2Cuotas
    dinero = parseInt (prompt("ingrese la cantidad de dinero 3500000"))

}else if (opcionSeleccionada === 3) {
    costoUnitario === En3cuotas
    dinero = parseInt (prompt ("ingrese la cantidad de dinero 2333333"))

}else{
    console.log("opcion Invalida")
    opcionSeleccionada = parseInt(prompt ("por favor colocar otra opcion"))
}

if (dinero <2333333 || dinero >7000000){
    console.log("cantidad de dinero invalido")
    alert ("cantidad de dinero invalido")
}