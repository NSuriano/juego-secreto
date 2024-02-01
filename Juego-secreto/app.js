

let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
numeroMaximo = 10;
condicionInicial();

function condicionInicial(){
    let titulo = generarTexto('h1', 'Adivina el número secreto');
    let parrafo = generarTexto('p',`Ingrese un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    return;
}


function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
       
    if(numeroDeUsuario == numeroSecreto){
          generarTexto('p',`GANASTE en ${intentos} ${intentos==1 ? 'vez':'veces'}`);
          habilitarBoton();
          
    }else{
            if(numeroDeUsuario > numeroSecreto){
             generarTexto('p','el número es menor');
            }else{
             generarTexto('p','El número es mayor');
            }    
               
          intentos ++;
          limpiarInput();
    }  
    return;
}

function generarTexto(elemento, texto){ 
    let mensaje = document.querySelector(elemento); 
    mensaje.innerHTML = texto;
    return;
}

    function generarNumeroSecreto() {
        let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1;
        //Si ya sorteamos todos los números
        if (listaNumerosSorteados.length == numeroMaximo) {
            asignarTextoElemento('p','Ya se sortearon todos los números posibles');
        } else {
            //Si el numero generado está incluido en la lista 
            if (listaNumerosSorteados.includes(numeroGenerado)) {
                return generarNumeroSecreto();
            } else {
                listaNumerosSorteados.push(numeroGenerado);
                return numeroGenerado;
            }
        }
    }
    
    


function limpiarInput() {
    return document.getElementById('valorUsuario').value='';
}

function habilitarBoton() {
    return document.getElementById('reiniciar').removeAttribute('disabled');
            
}

function desabilitarBoton(){
    return document.getElementById('reiniciar').setAttribute('disabled','true');
}

function reiniciarJuego(){
    limpiarInput();
    condicionInicial();
    desabilitarBoton();
    return;
}

