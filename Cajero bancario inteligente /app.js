// Aquí creo el vector donde se van a guardar todos los movimientos
// (depósitos y retiros)

let movimientos = [];


// Aquí creo la variable del saldo y empieza en 0
// porque la cuenta inicia sin dinero

let saldo = 0;


// Esta función sirve para registrar un depósito o un retiro
function registrarOperacion() {

    // Obtengo el monto que escribe el usuario
    let monto = Number(document.getElementById("monto").value);

    // Obtengo la operación que el usuario seleccionó
    let operacion = document.getElementById("operacion").value;


    // Verifico que el monto sea mayor que 0
    if (monto <= 0) {

        // Muestro un mensaje si el monto no es válido
        alert("Ingrese un monto válido.");

        // Salgo de la función para que no continúe
        return;

    }


    // Si la operación es un depósito
    if (operacion == "deposito") {

        // Sumo el monto al saldo
        saldo = saldo + monto;

        // Guardo el depósito dentro del vector
        movimientos.push({

            tipo: "Depósito",
            monto: monto

        });

    }

    // Si no es depósito, entonces es un retiro
    else {

        // Verifico que haya suficiente saldo
        if (monto > saldo) {

            // Muestro un mensaje si no alcanza el dinero
            alert("Saldo insuficiente.");

            // Termino la función
            return;

        }

        // Resto el monto al saldo
        saldo = saldo - monto;

        // Guardo el retiro dentro del vector
        movimientos.push({

            tipo: "Retiro",
            monto: monto

        });

    }

    // Muestro nuevamente los movimientos
    mostrarMovimientos();

    // Limpio la caja de texto
    document.getElementById("monto").value = "";

}


// Esta función muestra todos los movimientos realizados
function mostrarMovimientos() {

    // Variable donde voy formando el texto
    let texto = "";

    // Recorro el vector usando un for
    for (let i = 0; i < movimientos.length; i++) {

        // Agrego cada movimiento al texto
        texto = texto + movimientos[i].tipo + " : $" + movimientos[i].monto + "<br>";

    }

    // Muestro todos los movimientos en la página
    document.getElementById("listaMovimientos").innerHTML = texto;

}


// Esta función calcula el resumen final
function mostrarResumen() {

    // Variable para sumar todos los depósitos
    let totalDepositos = 0;

    // Variable para sumar todos los retiros
    let totalRetiros = 0;

    // Recorro el vector usando un for
    for (let i = 0; i < movimientos.length; i++) {

        // Si el movimiento es un depósito
        if (movimientos[i].tipo == "Depósito") {

            // Lo sumo al total de depósitos
            totalDepositos = totalDepositos + movimientos[i].monto;

        }

        // Si no, significa que es un retiro
        else {

            // Lo sumo al total de retiros
            totalRetiros = totalRetiros + movimientos[i].monto;

        }

    }

    // Muestro el resumen final
    document.getElementById("resultado").innerHTML =

    "Total depositado: $" + totalDepositos + "<br>" +

    "Total retirado: $" + totalRetiros + "<br>" +

    "Saldo final: $" + saldo;

}
