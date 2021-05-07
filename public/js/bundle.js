(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
/* Mostrar en cesta producto ---------------------------------------------------------- */

function refrescarCarrito() {
	refrescarCabecera();
	crearCesta();
	/*if (JSON.parse(localStorage.getItem("compra")) != null) {
		document.getElementById('precioTotalProductos').innerHTML = localStorage.getItem('monto');
	} else {
		if (precioTotalProductos != undefined) {
			document.getElementById('precioTotalProductos').innerHTML = 0;
		}
	}*/
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

/*module.exports = {

	refrescarCarrito : refrescarCarrito,
	crearCesta : crearCesta
}*/
},{}],2:[function(require,module,exports){


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
},{}],3:[function(require,module,exports){


let map;
let latitude=0;
let longitude=0;

//Restaurante1
let restLat=latitude+0.01;
let restLon=longitude+0.02;
let rest1={lat: restLat, lng:restLon};   

//Restaurante2
let rest2Lat=latitude;
let rest2Lon=longitude-0.008;
let rest2={lat: rest2Lat, lng:rest2Lon};   

// 
function getPosition(position) {
  latitude = position.coords.latitude ;
  longitude = position.coords.longitude; 
//Restaurante1
   restLat=latitude+0.01;
restLon=longitude+0.02;
rest1={lat: restLat, lng:restLon};  
//Restaurante2
 rest2Lat=latitude;
 rest2Lon=longitude-0.008;
 rest2={lat: rest2Lat, lng:rest2Lon};   
}


navigator.geolocation.getCurrentPosition(getPosition);





function initMap() {

  
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: latitude, lng: longitude},
    zoom: 12,
  });

  const markerUser = new google.maps.Marker({
    position: { lat: latitude, lng: longitude },
    map: map,
  });
  const markerR1 = new google.maps.Marker({
    position: rest1,
    map: map,
  });
  const markerR2 = new google.maps.Marker({
    position: rest2,
    map: map,
  });
}


let distanciaRest1=calcDist(latitude,longitude,rest1.lat,rest1.lng).toFixed(1);
let distanciaRest2=calcDist(latitude,longitude,rest2.lat,rest2.lng).toFixed(1);



function calcDist(lat1, lon1, lat2, lon2) 
{
var R = 6371; // km
var dLat = toRad(lat2-lat1);
var dLon = toRad(lon2-lon1);
var lat1 = toRad(lat1);
var lat2 = toRad(lat2);

var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2); 
var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
var d = R * c;
return d;
}

// Converts numeric degrees to radians
function toRad(Value) 
{
return Value * Math.PI / 180;
}

function escribirDistancia(){
document.getElementById("distancia1").innerHTML = distanciaRest1;
}

function escribirDistancia2(){
    document.getElementById("distancia2").innerHTML = distanciaRest2;
    }
    
},{}],4:[function(require,module,exports){
// ----- LogIn --------------------
function login() {
    let user = document.getElementById("inputUser").value;
    let pass = document.getElementById("inputPass").value;

    $.getJSON("../jsons/login.json", function (json) {
        let arrayUsers = json;
        console.log(JSON.stringify(arrayUsers));

        for (let i = 0; i < arrayUsers.length; i++) {
            if (arrayUsers[i].nombre === user && arrayUsers[i].pass === pass) {
                localStorage.setItem('usuario', JSON.stringify(arrayUsers[i]));
                console.log("Usuario logeado");
            }
        }

        if (!isLogged()) {
            let arrayRegistrados = JSON.parse(localStorage.getItem('registrados'));
            for (let i = 0; i < arrayRegistrados.length; i++) {
                if (arrayRegistrados[i].nombre === user && arrayRegistrados[i].pass === pass) {
                    localStorage.setItem('usuario', JSON.stringify(arrayRegistrados[i]));
                    console.log("Usuario logeado");
                }
            }
        }

    });

    refrescarLogin();
}

function isLogged() {
    if (localStorage.getItem('usuario') == undefined) {
        return false;
    } else {
        return true;
    }
}

// ----- LogIn --------------------
function logout() {
    localStorage.clear();
    refrescarLogin();
}

// Register

function registrarse() {
    let name = $("#inputUser").val();
    let pass = $("#inputPass").val();

    if (localStorage.getItem('registrados') == undefined) {
        localStorage.setItem('registrados', JSON.stringify(new Array()));
    }

    let arrayRegistrados = JSON.parse(localStorage.getItem('registrados'));

    let user = new Object();
    user.nombre = name;
    user.pass = pass;

    arrayRegistrados.push(user);

    localStorage.setItem('registrados', JSON.stringify(arrayRegistrados));
    alert("Usuario registrado");
}

//Actualizar

function refrescarLogin() {
    let loginForm = document.getElementById("loginForm");
    let logedForm = document.getElementById("loginRealizado");
    let registerForm = document.getElementById("registerForm");
    let botonRegistrarse = document.getElementById("botonRegistrarse");

    if (isLogged()) {
        ocultarAtributo(loginForm);
        mostrarAtributo(logedForm);
        document.getElementById("botonLogIn").innerHTML = "Cerrar Sesión";
        ocultarAtributo(botonRegistrarse);
        ocultarAtributo(registerForm);
    } else {
        mostrarAtributo(loginForm);
        ocultarAtributo(logedForm);
        document.getElementById("botonLogIn").innerHTML = "Iniciar Sesión";
        mostrarAtributo(registerForm);
    }
}

function ocultarAtributo(ide) {
    if (ide) {
        ide.setAttribute("hidden", true);
    }
}
function mostrarAtributo(ide) {
    if (ide) {
        ide.removeAttribute("hidden");
    }
}
/*
module.exports = {
    loin : login,
    isLogged : isLogged,
    registrarse : registrarse,
    refrescarLogin : refrescarLogin
}*/
},{}]},{},[1,2,3,4]);
