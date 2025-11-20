let operacion = prompt("Ingrese la operación a realizar (1: sumar, 2: restar, 3: multiplicar, 4: dividir)");
let a = parseFloat(prompt("Ingrese el primer número:"));
let b = parseFloat(prompt("Ingrese el segundo número:"));
let response = 0;

function sumar(a, b) {
    let response = a + b;
    return response;
}
function restar(a, b) {
    let response = a - b;
    return response;
}
function multiplicar(a, b) {
    let response = a * b;
    return response;
}
function dividir(a, b) {
    if (b === 0) {
        throw new Error("No se puede dividir por cero");
    }
    return a / b;
}

if (operacion === "1") {
    response =  a + b;
} else if (operacion === "2") {
    response = a - b;
} else if (operacion === "3") {
    response = a * b;
} else if (operacion === "4") {
     response = a / b;
} else {
    throw new Error("Operación no válida");
}alert("El resultado es: " + response);