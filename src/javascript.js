//-------llamados del DOM-------//
const valorUnoEl = document.getElementById("valor_uno");
const valorDosEl = document.getElementById("valor_dos");
const sumaEl = document.getElementById("suma");
const restaEl = document.getElementById("resta");
const multiEl = document.getElementById("multi");
const diviEl = document.getElementById("divi");
const resultadoEl = document.getElementById("resultado");
const fondo1El = document.getElementById("fondo1")
const fondo2El = document.getElementById("fondo2")
const fondo3El = document.getElementById("fondo3")
const fechaYhoraEL = document.getElementById("fecha-hora")
//------variables globales--------//


//------EVENTO LOAD----------//
addEventListener("DOMContentLoaded", () => {
//funciones que se activan en la carga de la pagina

})


//-----FUNCIONES-----//

//funcion para sumar 
function sumarDatos() {
    let valueOne = valorUnoEl.value
    let valueTwo = valorDosEl.value

    let result = parseInt(valueOne) + parseInt(valueTwo)

    resultadoEl.innerText = result
    console.log("se hizo la suma")
}

//funcion para restar 
function restarDatos() {
    let valueOne = valorUnoEl.value
    let valueTwo = valorDosEl.value

    let result = parseInt(valueOne) - parseInt(valueTwo)

    resultadoEl.innerText = result
    console.log("se hizo la resta")
}

//funcion para multiplicar
function multiDatos() {
    let valor_uno = valorUnoEl.value
    let valor_dos = valorDosEl.value

    let result = parseInt(valor_uno) * parseInt(valor_dos)

    resultadoEl.innerText = result
    console.log("se hizo la multiplicacion")
}

//funcion de division
function diviDatos() {
    let valor_uno = valorUnoEl.value
    let valor_dos = valorDosEl.value

    let result = parseInt(valor_uno) / parseInt(valor_dos)

    resultadoEl.innerText = result
    console.log("se hizo la division")
}

//funcion de fondo 1
function fondo1() {
    console.log("se cambio de fondo a 1")
    document.body.style.backgroundColor = "oklch(82.8% 0.189 84.429)"
}

//funcion de fondo 2
function fondo2() {
    console.log("se cambio de fondo a 2")
    document.body.style.backgroundColor = " oklch(62.3% 0.214 259.815)"
}

//funcion de fondo 3
function fondo3() {
    console.log("se cambio de fondo a 3")
    document.body.style.backgroundColor = "#000"
}

//funcion de fecha y hora automatico
function fechaHora() {
    let fecha = new Date();
    let horaYminutos = fecha.toLocaleTimeString('es-ES');
    let fechaYhora = fecha.toLocaleDateString('es-ES');
    fechaYhoraEL.innerText = fechaYhora + " - " + horaYminutos;
}

//---------EVENTOS----------//

//evento de la suma 
sumaEl.addEventListener("click", () => {
    console.log("hice clic")
    sumarDatos()
})

//evento de la resta
restaEl.addEventListener("click", () => {
    console.log("hice click")
    restarDatos()
})

//evento de la multiplicacion
multiEl.addEventListener("click", () => {
    console.log("hice click")
    multiDatos()
})

//evento de la division
diviEl.addEventListener("click", () => {
    console.log("hice click")
    diviDatos()
})

//evento de cambio de fondo 1
fondo1El.addEventListener("click", () => {
    console.log("cambio de fondo 1")
    fondo1()
})

//evento de cambio de fondo 2
fondo2El.addEventListener("click", () => {
    console.log("cambio de fondo 2")
    fondo2()
})

//evento de cambio de fondo 3
fondo3El.addEventListener("click", () => {
    console.log("cambio de fondo 3")
    fondo3()
})

//evento de fecha y hora 
fechaYhoraEL.addEventListener("click", () => {
    console.log("se muestra la fecha y hora")
    fechaHora()
})