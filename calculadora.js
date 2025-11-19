function sumar(a, b) {
    return a + b;
}
function restar(a, b) {
    return a - b;
}
function multiplicar(a, b) {
    return a * b;
}
function dividir(a, b) {
    if (b === 0) {
        throw new Error("No se puede dividir por cero");
    }
    return a / b;
}
let resultadoSuma = sumar(10, 3);
console.log("Suma: " + resultadoSuma);
let resultadoResta = restar(10, 4);
console.log("Resta: " + resultadoResta);
let resultadoMultiplicacion = multiplicar(8, 5);
console.log("Multiplicación: " + resultadoMultiplicacion);
let resultadoDivision = dividir(6, 2);
console.log("División: " + resultadoDivision);
