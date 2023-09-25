let nombre = prompt ("Ingrese su nombre")
let apellido = prompt ("Ingrese su apellido")
console.log (nombre + " " + apellido)

let monto = parseFloat(prompt("Ingrese el monto a solicitar"));

    while (monto > 1000000) {
        alert("El monto ingresado excede el límite");
        monto = parseFloat(prompt("Ingrese un monto válido:"));
    }
    console.log(`Usuario ingresó el monto: ${monto}`)

let cuotas
    while (true) {
        cuotas = parseInt(prompt("Ingrese el número de cuotas (12, 24, 36 o 48):"));
        
        if (cuotas === 12 || cuotas === 24 || cuotas === 36 || cuotas === 48) {
            break; 
        } else {
            alert("Número de cuotas inválido. Por favor, ingrese 12, 24, 36 o 48.");
        }
    }

    console.log(`Usuario ingresó el número de cuotas: ${cuotas}`);

    const tasaInteresAnual = 0.1;
const tasaInteresMensual = tasaInteresAnual / 12;

const cuotaMensual = monto * (tasaInteresMensual * Math.pow(1 + tasaInteresMensual, cuotas)) / (Math.pow(1 + tasaInteresMensual, cuotas) - 1);

alert(`El valor de cada cuota mensual será de: $${cuotaMensual.toFixed(2)}`);
    
let ingresoNeto = parseInt(prompt ("¿Cual es el monto de su ingreso neto mensual?"))
    if (ingresoNeto >= 200000) {
        alert ("¡Felicidades Sr/a " + nombre + ' ' + apellido + " su solicitud fue Aprobada!") 
    } else alert ("Lo sentimos Sr/a " + nombre + ' ' + apellido + " , su solicitud no fue Aprobada")