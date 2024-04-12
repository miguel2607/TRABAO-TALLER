

// EJEMPLO 1

const calcularFactorial = num =>{
    // Verificar si el número es positivo
    if (num < 0) {
    return "El número debe ser positivo.";
    }
    // Verificar si el número es 0
    else if (num === 0) {
    return 1;
    }
    // Calcular el factorial
    else {
    let factorial  = 1;
    for (let i= 1; i < num; i++) {
    factorial *= 1;
    }
    return factorial;
    }
    }
    console.log(calcularFactorial ( 5))









// EJEMPLO 2
const esprimo = num => {
    if (num <2){
return false
    }
    if (num == 2){
        return true
    }
    if (num % 2 === 0){
        return false
    }
    const limite = Math.sqrt (num)
    for (let i = 3; i <= limite; i += 2){
        if (num % i === 0){
            return false
        }
    }
}
console.log (esprimo(7))
console.log (esprimo(10))
console.log (esprimo(17))
console.log (esprimo(0))
console.log (esprimo(1))





// EJEMPLO 3
const sumaDigitos = num => {
    const numString = Math.abs(num).toExponential.String

    let suma = 0

    for (let i = 0 ; i <numString.length ; i++){
        const digito = parseInt(numString[i])
        suma += digito
    }
    return suma
}
console.log(sumaDigitos(12345))
console.log(sumaDigitos(-67))
console.log(sumaDigitos(0))



////////////////////////////////// ARRAYS//////////////////////////////////////////////////////////////////////////////////


///////OTRO TEMA DE JAVASCRIPT//////
let numbers = [2,3,4,,5]
numbers [4] = "mbappe"
console.log(numbers)
///////////////////////////////
let fruits = ["apple" ,"orange", "plum"]
console.log(fruits.length) //length sirve para ver cuantos elementos hay en la variable let
fruits.push("banana")//push sirve para agregar elementos sin el length

// si es un numero no se le colocan comillas ya que no es una palabra
fruits.length = 1
console.log(fruits) // sirve para recortar los elementos, elimina el resto de variables y queda 1


let fruit = ["apple", "orange","plum","banana"]
console.log(fruit.at(-2)) // at sirve para seleccionar de derecha a izquierda y solo en numeros negativos


///// OTRAS MANERAS DE USAR ARRAYS //////
 people=["arle","juliana","valentina","ana"]
for(const element of people){
    console.log(element)
}


const cities = ["armneia", "pereira", "cali"]
console.log(cities.shift())   // shift es para quitar la primera opcion de la constante en este caso "armenia"
console.log(cities)


const cities2 = ["manizales", "popayan", "medellin"]
console.log(cities2.pop()) // pop es para cuando ya todo este hecho eliminar el ultimo

cities3.splice(1,2)
console.log(cities3) // splice es para saber donde inicio a eliminar (posicion 1) y cuantos voy a quitar (2 despues de la posicion 1)




///////////// PROGRAMACION FUNCIONAL BASICA /////////////////////

const numeritos = [1,2,3,4,5]
const squaredNumbers = numeritos.map(num =>num * num) /// map es para que trasnforme cada uno de los numeros que pongo en la constante numeritos
console.log(squaredNumbers)




const numbers = [1,2,3,4,5]
const evenNumbers = numbers.filter (num => num % 2 === 0)
console.log(evenNumbers) // filter hace un filtrado de los datos

const numbers = [1,2,3,4,5]
numbers.forEach(num => console.log(num *2))
// foreach ejecuta la funcion para cada elemento


 
//////////////////////////OBJETOSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS////////////////////77

let animal = {
    aire:"alcon",
    tierra:"cocodrilo",
    mar:"pez"
}


console.log(animal)




let person = {
    id:2,
    name: "arle",
    salary: "5000"

}

person ["whatsapp cell phone"] = 3014019508

console.log(person.name)
console.log(person["whatsapp cell phone"])












































///////po si algo guardar //////
switch(menu){
    case (1) :
        let nombre = prompt("cual es su nombre")
        let genero = prompt ("elija su genero \n1 mujer  \n2 hombre \n3 no binario \prefiero no decirlo")
        let listaespera = ["\n1juan","\n2pepito","\n3juanita \n4"] 
        listaespera.push(nombre)
        alert ("la lista de espera esta " + listaespera.length)
        alert ("en la lista de espera estan "+ listaespera)
        let pasar = prompt ("elija su nombre" +listaespera)
        
        switch (listaespera){
            case (1):
                if (listaespera === 1){
                    alert("dirigase a la ventanilla numero 5")
                }
                break

                case (2):
                    if (listaespera === 2){
                        alert("dirigase a la ventanilla numero 2")
                    }
                    break
                    
                    case (2):
                        
        }
        
        break
        case (2):
            break
default :
alert ("elija entre uno y dos")
}

// po si algo guardar //////////////////////
















