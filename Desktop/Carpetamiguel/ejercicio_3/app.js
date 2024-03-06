const Clasicos = 500000
const Running = 800000
const Basketball = 1000000

let opcionSeleccionada = ''
let talla = ''
let cantidad = ''
let descuento = 0

let total = 0

let dinero
let costoUnitario

opcionSeleccionada = parseInt(prompt("Elija el tipo de zapatos que desea \n1. Clasicos 500000 \n2.Runnig 800000 \n3. Basketball 1000000"))

if(opcionSeleccionada < 1 || opcionSeleccionada > 3){
    alert("Elija una opcion entre 1 y 3")
}else{
    console.log(opcionSeleccionada)

    talla = parseInt(prompt("Elija una talla entre 35 y 44"))
    
    if(talla < 35 || talla > 44 ){
        alert("Solo tenemos tallas entre 35 a 44")   
    }else{
        console.log(talla)
    
    cantidad = parseInt(prompt("Elija cantidad"))
    
    if(cantidad < 1 || cantidad > 5){
        alert("puedes comprar o 1 o 5 pares no mas")
    }else{
        console.log( cantidad)
    
    //Calculo si hay descuento
    if(cantidad >= 3){
        
        descuento = 0.1 
    }
    
    
    if(opcionSeleccionada === 1){
        if(descuento == 0.1){
            total = (Clasicos * cantidad) - (Clasicos * cantidad * descuento)      
        }else{
    
            total = Clasicos * cantidad
        }
    }
    
    if(opcionSeleccionada === 2){
        if(descuento == 0.1){
            total = (Running * cantidad) - (Running * cantidad * descuento)    
        }else{
    
            total = Running * cantidad
        }
    }
    
    if(opcionSeleccionada === 3){
        if(descuento == 0.1){
            total = (Basketball * cantidad)  - (Basketball * cantidad * descuento)    
        }else{
    
            total = Basketball * cantidad
        }
    }
    
    console.log(total)
    }
    
    
    }
}









