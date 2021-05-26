

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
		var itemStrongText = document.createTextNode(JSON.parse(localStorage.getItem("monto")));
		itemStrong.appendChild(itemStrongText);

		element.appendChild(itemLi);
		itemLi.appendChild(itemSpan);
		itemLi.appendChild(itemStrong);
	}
}

function comprar()
{
	alert("Pedido realizado con éxito, tu número de pedido es el AG-012341212. En breve te llegará un email");
	localStorage.clear();
}

module.exports = {

	refrescarCarrito : refrescarCarrito,
	crearCesta : crearCesta, 
	comprar:comprar
}