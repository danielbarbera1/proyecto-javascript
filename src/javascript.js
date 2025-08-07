//llamados del DOM
const valorUnoEl = document.getElementById("valor_uno");
const valorDosEl = document.getElementById("valor_dos");
const sumaEl = document.getElementById("suma");
const restaEl = document.getElementById("resta");
const multiEl = document.getElementById("multi");
const diviEl = document.getElementById("divi");
const resultadoEl = document.getElementById("resultado");

//variables globales


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
    let valor_uno = valorDosEl.value
    let valor_dos = valorDosEl.value

    let result = parseInt(valor_uno) / parseInt(valor_dos)

    resultadoEl.innerText = result
    console.log("se hizo la division")
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