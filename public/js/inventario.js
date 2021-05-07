

/* ---------  Inicializar valores ---------------------*/
let totalCarrito = 0;
let productos = [];

let hamburguesa = new Object({
	nombre: "hamburguesa",
	cantidad: 2,
	precio: 6,
	desc: "Lechuga, tomate y queso"
});

let pizza = new Object({
	nombre: "pizza",
	cantidad: 10,
	precio: 18,
	desc: "Mozzarela, tomate y jamón"
});

let menu = new Object({
	nombre: "menu",
	cantidad: 10,
	precio: 15,
	desc: "Menú de hamburguesa"
});


let menuDia = new Object({
	nombre: "menú del día",
	cantidad: 20,
	precio: 18,
	desc: "Primero, segundo, postre"
});


let casera = new Object({
	nombre: "comida casera",
	cantidad: 5,
	precio: 20,
	desc: "consultar"
});


let ensalada = new Object({
	nombre: "ensalada",
	cantidad: 5,
	precio: 12,
	desc: "ensalada mixta"
});

/*
let pintxo = new Object({
	nombre: "pintxo",
	cantidad: 5,
	precio:2,
	desc: "Pincho de calamar"
});

let pintxo2 = new Object({
	nombre: "pintxo2",
	cantidad: 1,
	precio:2,
	desc: "Pincho de jamón"
});

let refresco = new Object({
	nombre: "refresco",
	cantidad: 2,
	precio:2,
	desc: "Coca-Cola"
});

let cafe = new Object({
	nombre: "cafe",
	cantidad: 50,
	precio:1.5,
	desc: "Café con leche"
});

let tortilla = new Object({
	nombre: "tortilla",
	cantidad: 2,
	precio:2,
	desc: "Pincho de tortilla"
});
*/
/* Añadir producto ------------------------------------------- */

function addProduct(product) {

	if (product.cantidad > 0) {

		if (localStorage.getItem('compra') == undefined) {
			localStorage.setItem('compra', JSON.stringify(new Array()));
		}

		product.cantidad--;

		let arrayCompras = JSON.parse(localStorage.getItem('compra'));
		arrayCompras.push(product);
		localStorage.setItem('compra', JSON.stringify(arrayCompras));

		totalCarrito = totalCarrito + product.precio;

		recalcularTotales(product);
		console.log('añado producto al carrito');
		refrescarCabecera();
	} else {
		alert("No quedan unidades en stock");
	}
}

function borrar() {
	//localStorage.clear();
	localStorage.removeItem('compra');
	localStorage.removeItem('monto');
	refrescarCarrito();
}

function comprar() {
	if (estaLogged()) {
		let comproArrayCompras = JSON.parse(localStorage.getItem('compra'));
		for (var i = 0; i < comproArrayCompras.length; i++) {
			if (comproArrayCompras[i].cantidad = 0) {
				alert("hay un producto fuera de stock, va a ser eliminado del carrito.");
				localStorage.removeItem('compra');
				comproArrayCompras.splice(i,1);
				localStorage.setItem('compra', JSON.stringify(comproArrayCompras));
			}
		}
		if (JSON.parse(localStorage.getItem("compra"))!= undefined) {
			alert("¡Compra realizada con éxito!");
			borrar();
		}
	} else {
		alert("Debes iniciar sesión para realizar la compra");
	}

}

// Calculos 

function refrescarCabecera() {
	if (JSON.parse(localStorage.getItem("compra")) != null) {
		var longitud = JSON.parse(localStorage.getItem("compra"));
		document.getElementById('numTotalProductos').innerHTML = longitud.length;
	}
}


function recalcularTotales() {
	localStorage.setItem('monto', totalCarrito);

}
function estaLogged() {
	if (localStorage.getItem('usuario') == undefined) {
		return false;
	} else {
		return true;
	}
}



module.exports = {
	addProduct : addProduct,
	borrar : borrar,
	comprar : comprar,
	refrescarCabecera : refrescarCabecera,
	recalcularTotales : recalcularTotales,
	estaLogged : estaLogged
}