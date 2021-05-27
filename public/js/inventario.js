

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
	desc: "Mozzarela, tomate y jamon"
});

let menu = new Object({
	nombre: "menu",
	cantidad: 10,
	precio: 15,
	desc: "Menu de hamburguesa"
});


let menuDia = new Object({
	nombre: "menu del dia",
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


function crearInventario() {
	let arrayProductos = [hamburguesa, pizza, menu, menuDia, casera, ensalada];
	//console.log('Aqui1'+localStorage.getItem('inventario'));
	if (localStorage.getItem('inventario') == undefined) {
		localStorage.setItem('inventario', JSON.stringify(new Array()));
	}
	//console.log('Aqui2'+localStorage.getItem('inventario'));
	localStorage.setItem('inventario', JSON.stringify(arrayProductos));
}

function addProduct(product) {
	let arrayInventario = JSON.parse(localStorage.getItem('inventario'));

	for (let i = 0; i < arrayInventario.length; i++) {
		if (product == arrayInventario[i].nombre) {
			if (arrayInventario[i].cantidad > 0) {

				if (localStorage.getItem('compra') == undefined) {
					localStorage.setItem('compra', JSON.stringify(new Array()));
				}

				arrayInventario[i].cantidad--;

				let arrayCompras = JSON.parse(localStorage.getItem('compra'));
				arrayCompras.push(arrayInventario[i]);
				localStorage.setItem('compra', JSON.stringify(arrayCompras));
				localStorage.setItem('inventario', JSON.stringify(arrayInventario));
				if (localStorage.getItem('monto') != undefined) {
					totalCarrito = parseInt(localStorage.getItem('monto'));
				}

				totalCarrito = totalCarrito + parseInt(arrayInventario[i].precio);

				recalcularTotales();
				console.log('añado producto al carrito');
				refrescarCabecera();
			} else {
				alert("No quedan unidades en stock");
			}
		}
	}
}


function borrar() {
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
				comproArrayCompras.splice(i, 1);
				localStorage.setItem('compra', JSON.stringify(comproArrayCompras));
			}
		}
		if (JSON.parse(localStorage.getItem("compra")) != undefined) {
			alert("¡Compra realizada con éxito!");
			borrar();
		}
	} else {
		alert("Debes iniciar sesion para realizar la compra");
	}

}

// Calculos 

function refrescarCabecera() {
	if (localStorage.getItem('inventario') == undefined) {
		crearInventario();
	}

	if (JSON.parse(localStorage.getItem("compra")) != null) {
		var longitud = JSON.parse(localStorage.getItem("compra"));
		document.getElementById('numTotalProductos').innerHTML = longitud.length;
	}
}


function recalcularTotales() {
	console.log(totalCarrito);
	localStorage.setItem('monto', totalCarrito);

}
function estaLogged() {
	console.log(localStorage.getItem('usuario'));
	if (localStorage.getItem('usuario') == undefined) {
		return false;
	} else {
		return true;
	}
}



module.exports = {
	crearInventario: crearInventario,
	addProduct: addProduct,
	borrar: borrar,
	comprar: comprar,
	refrescarCabecera: refrescarCabecera,
	recalcularTotales: recalcularTotales,
	estaLogged: estaLogged
}