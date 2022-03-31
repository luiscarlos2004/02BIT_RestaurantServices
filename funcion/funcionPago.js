const validarpago = document.querySelector("#validarpago");
const contenedorFactura = document.querySelector("#contenedorFactura");
const persona = document.querySelectorAll(".persona");
const pedir = document.querySelectorAll(".pedir");
const barraInfo_info = document.querySelectorAll(".barraInfo_info");
const barraDescripcion_descripcion = document.querySelectorAll(".barraDescripcion_descripcion");
const barraTotal_total = document.querySelectorAll(".barraTotal_total");

validarpago.addEventListener("click", (e) => {
	let banda = true;
	for (var i = 0; i < 6; i++) {
		if (pedir[i].value.trim() == "") banda = false;
	}
	if (banda) {
		let nombres = localStorage.getItem("nombresProductos").split(",");
		let cantidades = localStorage.getItem("cantidadProductos").split(",");
		let precios = localStorage.getItem("preciosProductos").split(",");
		let precioTotal = localStorage.getItem("precioTotalComida");

		contenedorFactura.style.display = "block";
		contenedorFactura.style.animation = "aparecerContainerFactura 3s forwards";
		setTimeout((e) => {
			containerAnimacionFactura.style.display = "block";
			containerAnimacionFactura.style.overflow = "auto";
			containerAnimacionFactura.style.animation = "aparecerContainerFacturaAnimation 3.5s forwards";
			setTimeout((e) => { containerAnimacionFactura.style.overflow = "hidden"; }, 3501);
		}, 3001);

		localStorage.clear();

		agregarDatosFactura(nombres, cantidades, precios, precioTotal);
	} else alert("Debe llenar todos los campos");
});

function agregarDatosFactura(nombres, cantidades, precios, precioTotal) {
	barraDescripcion_descripcion[0].value = "Producto \n";
	barraDescripcion_descripcion[1].value = "Cantidad \n";
	barraDescripcion_descripcion[2].value = "Precio \n";
	let numeroFactura = Math.floor(Math.random() * 8000000 + 500);
	const fecha = new Date();
	barraInfo_info[0].innerText = `n° factura: ${numeroFactura}`;
	barraInfo_info[1].innerText = `Nombre: ${persona[0].value}`;
	barraInfo_info[3].innerText = `Fecha: ${fecha.getDate()}/${fecha.getMonth() + 1}/${fecha.getFullYear()}`;
	barraInfo_info[2].innerText = `Mail: ${persona[1].value}`;
	for (let i = 0; i < (nombres.length - 1); i++) {
		barraDescripcion_descripcion[0].value += "\n" + nombres[i] + "\n" + "––––––––––––––––––––––––– \n"
		barraDescripcion_descripcion[1].value += "\n" + cantidades[i] + "\n" + "––––––––––––––––––––––––– \n"
		barraDescripcion_descripcion[2].value += "\n" + precios[i] + "\n" + "––––––––––––––––––––––––– \n";
	}
	barraTotal_total[0].value = "Total  –> ";
	barraTotal_total[1].value = precioTotal;
	for (let i = 0; i < 6; i++) {
		pedir[i].value = "";
	}
}