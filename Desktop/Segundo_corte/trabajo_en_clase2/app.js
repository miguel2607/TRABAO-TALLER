function agregar (){
    listaespera.push()
}




alert("bienvenido a nuestro banco jijijij ")

let menu = parseInt(prompt("elija una de las opcciones \n1 lista de espera \n2 atentido"))

switch (menu) {
    case 1:
        let nombre = prompt("¿Cuál es su nombre?");
        let genero = prompt("Elija su género:\n1. Mujer\n2. Hombre\n3. No binario\n4. Prefiero no decirlo");
        let listaespera = ["\n1juan", "\n2pepito", "\n3juanita \n4"];
        listaespera.push(nombre);
        alert("La lista de espera tiene " + listaespera.length + " personas.");
        alert("En la lista de espera están: " + listaespera);
        let pasar = prompt("Elija su nombre" + listaespera);

        switch (pasar) {
            case "juan":
                alert("Diríjase a la ventanilla número 3");
                break;
            case "pepito":
                alert("Diríjase a la ventanilla número 2");
                break;
            case "juanita":
               alert ("dirijase a la ventanilla numero 4")
                break;
                case nombre :
                    alert("dirijase a la ventanilla numero 1")
                break
            default:
                alert("Nombre no reconocido, haga su registro");
                break;
        }

        break;
    case 2:
        alert("atendido")
        break;
    default:
        alert("Elija entre las opciones 1 y 2");
        break;
}