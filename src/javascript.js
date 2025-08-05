const valorUnoEl = document.getElementById("valor_uno");
const valorDosEl = document.getElementById("valor_dos");
const sumaEl = document.getElementById("suma");
const restaEl = document.getElementById("resta");
const multiEl = document.getElementById("multi");
const diviEl = document.getElementById("divi");
const resultadoEl = document.getElementById("resultado");


// Asignar eventos a los botones
sumaEl.addEventListener("click", calcular);
restaEl.addEventListener("click", calcular);
multiEl.addEventListener("click", calcular);
diviEl.addEventListener("click", calcular);

// También recalcular al cambiar los inputs
valorUnoEl.addEventListener("input", calcular);
valorDosEl.addEventListener("input", calcular);

function calcular(event) {
    const valorUno = parseFloat(valorUnoEl.value);
    const valorDos = parseFloat(valorDosEl.value);
    let resultado = 0;

    if (isNaN(valorUno) || isNaN(valorDos)) {
        resultadoEl.textContent = "Ingresa números válidos.";
        return;
    }

    const operacion = event?.target?.id; // Obtiene el ID del botón clickeado

    switch (operacion) {
        case "suma":
            resultado = valorUno + valorDos;
            break;
        case "resta":
            resultado = valorUno - valorDos;
            break;
        case "multi":
            resultado = valorUno * valorDos;
            break;
        case "divi":
            if (valorDos === 0) {
                resultadoEl.textContent = "No se puede dividir por cero.";
                return;
            }
            resultado = valorUno / valorDos;
            break;
        default:
            // Si no se clickeó un botón (ej: al escribir en los inputs), no hacer nada.
            return;
    }

    resultadoEl.textContent = `Resultado: ${resultado}`;
}

//-------------------------------------------------------------------------------------------------//

const fondo1El = document.getElementById("fondo1");
const fondo2El = document.getElementById("fondo2");
const fondo3El = document.getElementById("fondo3");

// Cambiar el fondo al hacer clic en los botones de fondo

fondo1El.addEventListener("click", () => {
    document.body.style.backgroundColor = "rgb(245, 158, 11)";
});
fondo2El.addEventListener("click", () => {
    document.body.style.backgroundColor = "rgb(59, 130, 246)";
});
fondo3El.addEventListener("click", () => {
    document.body.style.backgroundColor = "rgb(0, 0, 0)";
});

//-------------------------------------------------------------------------------------------------//

const fechaHoraEl = document.getElementById("fecha-hora");
// Actualizar fecha y hora cada segundo
function actualizarFechaHora() {
    const ahora = new Date();
    const opcionesFecha = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
    const opcionesHora = { hour: '2-digit', minute: '2-digit', second: '2-digit' };

    const fecha = ahora.toLocaleDateString('es-ES', opcionesFecha);
    const hora = ahora.toLocaleTimeString('es-ES', opcionesHora);

    fechaHoraEl.textContent = `${hora} - ${fecha}`;
}

setInterval(actualizarFechaHora, 1000);
actualizarFechaHora(); // Ejecutar inmediatamente