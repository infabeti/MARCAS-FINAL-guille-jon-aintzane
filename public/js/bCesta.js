(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.cesta = f()}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){


/* Mostrar en cesta producto ---------------------------------------------------------- */

function refrescarCarrito() {
	crearCesta();

}

function crearCesta() {


	var element = document.getElementById("listaCesta");

	var items = JSON.parse(localStorage.getItem("compra"));
	if (items != undefined) {
		for (var i = 0; i < items.length; i++) {
			var itemLi = document.createElement("li");
			itemLi.className = "list-group-item d-flex justify-content-between lh-condensed";
			var itemDiv = document.createElement("div");
			var itemH6 = document.createElement("h6");
			itemH6.className = "my-0";
			var itemH6Text = document.createTextNode(items[i].nombre);
			itemH6.appendChild(itemH6Text);
			var itemSmall = document.createElement("small");
			itemSmall.className = "text-muted";
			var itemH6SmallText = document.createTextNode(items[i].desc);
			itemSmall.appendChild(itemH6SmallText);
			var itemSpan = document.createElement("span");
			itemSpan.className = "text-muted";
			var itemSpanText = document.createTextNode(items[i].precio);
			itemSpan.appendChild(itemSpanText);


			element.appendChild(itemLi);
			itemLi.appendChild(itemDiv);
			itemLi.appendChild(itemSpan);
			itemDiv.appendChild(itemH6);
			itemDiv.appendChild(itemSmall);
		}
		var itemLi = document.createElement("li");
		itemLi.className = "list-group-item d-flex justify-content-between";
		var itemSpan = document.createElement("span");
		var itemSpanText = document.createTextNode('Total');
		itemSpan.appendChild(itemSpanText);
		var itemStrong = document.createElement("strong");
		var itemStrongText = document.createTextNode(parseInt(localStorage.getItem('monto')));
		itemStrong.appendChild(itemStrongText);

		element.appendChild(itemLi);
		itemLi.appendChild(itemSpan);
		itemLi.appendChild(itemStrong);
	}
}

function comprar()
{
	alert("Pedido realizado con exito, tu numero de pedido es el AG-012341212. En breve te llegara un email");
	localStorage.clear();
}

module.exports = {

	refrescarCarrito : refrescarCarrito,
	crearCesta : crearCesta, 
	comprar:comprar
}
},{}]},{},[1])(1)
});
