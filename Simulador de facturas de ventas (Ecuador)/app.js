let productos = [];
let cantidades = [];
let precios = [];
function mostrarPrecio() {
    let lista = document.getElementById("productos");
    let precio =
        lista.options[lista.selectedIndex].dataset.precio;
    document.getElementById("precio").value = precio;
}
mostrarPrecio();
function agregarProducto() {
    let lista = document.getElementById("productos");
    let producto = lista.value;
    let precio = Number(
        lista.options[lista.selectedIndex].dataset.precio
    );
    let cantidad = Number(
        document.getElementById("cantidad").value
    );
    productos.push(producto);
    cantidades.push(cantidad);
    precios.push(precio);
    alert("Producto agregado correctamente.");
}
function generarFactura() {
    let detalle = document.getElementById("detalleFactura");
    detalle.innerHTML = "";
    let subtotal = 0;
    for (let i = 0; i < productos.length; i++) {
        let sub = cantidades[i] * precios[i];
        subtotal = subtotal + sub;
        detalle.innerHTML +=
        "<tr>" +
            "<td>" + productos[i] + "</td>" +
            "<td>" + cantidades[i] + "</td>" +
            "<td>$" + precios[i].toFixed(2) + "</td>" +
            "<td>$" + sub.toFixed(2) + "</td>" +
            "<td></td>" +
            "<td></td>" +
        "</tr>";
    }
    let iva = subtotal * 0.15;
    let descuento;
    if (subtotal > 20) {
        descuento = subtotal * 0.05;
    }
    else if (subtotal <= 20) {
        descuento = 0;
    }
    let total = subtotal + iva - descuento;
    document.getElementById("totalSubtotal").innerHTML =
    "$" + subtotal.toFixed(2);
    document.getElementById("totalIVA").innerHTML =
    "$" + iva.toFixed(2);
    document.getElementById("totalFinal").innerHTML =
    "$" + total.toFixed(2);
    detalle.innerHTML = detalle.innerHTML +
"<tr>" +
"<td colspan='3'><b>TOTALES</b></td>" +
"<td>$" + subtotal.toFixed(2) + "</td>" +
"<td>$" + iva.toFixed(2) + "</td>" +
"<td>$" + total.toFixed(2) + "</td>" +
"</tr>";
}
