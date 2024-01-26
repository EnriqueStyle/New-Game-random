let numeroSecreto = 0;
let Intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

console.log(numeroSecreto);
function asignarTextoElemento(elemento, texto) {
    let ElementoHTML = document.querySelector(elemento);
    ElementoHTML.innerHTML = texto;
    return;

}
function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p',`Acertaste el Numero en ${Intentos} ${(Intentos === 1) ? 'Vez' : 'veces'}`);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else {
        //El usuario no acerto.
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p','El numero Secreto es Menor');
        } else {
            asignarTextoElemento('p','El numero Secreto es Mayor');
        }
        Intentos++;
        limpiarCaja();
    }

    return;
}

function limpiarCaja() {
    document.querySelector("#valorUsuario").value = "";

}
    
function GenerarNumeroSecreto() {

    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //Si ya sorteamos todos los numeros
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p', 'Ya se sortearon todos los numeros posibles')
    } else {

        //Si el numero generado esta incluido en la lista hacemos una operacion
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return GenerarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }    
}

function condicionesIniciales() {
    asignarTextoElemento("h1", "Juego del Numero Secreto!");
    asignarTextoElemento("p", `Indica un Numero del 1 al ${numeroMaximo}`);
    numeroSecreto = GenerarNumeroSecreto();
    Intentos = 1;
}

function reiniciarJuego() {
    //Restar de cero, limpiar caja
    limpiarCaja();
    //Indicar mensaje de intervalos de numeros
    //Generar numero aleatorio
    //Inicializar el numero de intentos
    condicionesIniciales();
    //Deshabilitar del boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

condicionesIniciales();

