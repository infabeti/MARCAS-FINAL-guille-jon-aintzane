(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.inventario = f()}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){


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
	desc: "Mozzarela, tomate y jam├│n"
});

let menu = new Object({
	nombre: "menu",
	cantidad: 10,
	precio: 15,
	desc: "Men├║ de hamburguesa"
});


let menuDia = new Object({
	nombre: "men├║ del d├¡a",
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
	desc: "Pincho de jam├│n"
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
	desc: "Caf├® con leche"
});

let tortilla = new Object({
	nombre: "tortilla",
	cantidad: 2,
	precio:2,
	desc: "Pincho de tortilla"
});
*/
/* A├▒adir producto ------------------------------------------- */
function crearInventario() {
	/*let arrayProductos = new Array();
	arrayProductos.push(hamburguesa);
	arrayProductos.push(pizza);
	arrayProductos.push(menu);
	arrayProductos.push(menuDia);
	arrayProductos.push(casera);
	arrayProductos.push(ensalada);*/

	let arrayProductos = [hamburguesa, pizza, menu, menuDia, casera, ensalada];

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

				totalCarrito = totalCarrito + arrayInventario[i].precio;

				recalcularTotales(product);
				console.log('a├▒ado producto al carrito');
				refrescarCabecera();
			} else {
				alert("No quedan unidades en stock");
			}
		}
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
				comproArrayCompras.splice(i, 1);
				localStorage.setItem('compra', JSON.stringify(comproArrayCompras));
			}
		}
		if (JSON.parse(localStorage.getItem("compra")) != undefined) {
			alert("┬íCompra realizada con ├®xito!");
			borrar();
		}
	} else {
		alert("Debes iniciar sesi├│n para realizar la compra");
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
	crearInventario: crearInventario,
	addProduct: addProduct,
	borrar: borrar,
	comprar: comprar,
	refrescarCabecera: refrescarCabecera,
	recalcularTotales: recalcularTotales,
	estaLogged: estaLogged
}
},{}]},{},[1])(1)
});
