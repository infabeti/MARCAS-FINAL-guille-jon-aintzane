(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.usuario = f()}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
function guardarRegistro() {
	var nombre = document.getElementById("NomApe").value;
	var user = document.getElementById("inputUser").value;
	var email = document.getElementById("exampleInputEmail1").value;
	var dir = document.getElementById("inputAddress").value;
	var loc = document.getElementById("inputCity").value;
	var cPost = document.getElementById("inputZip").value;

	localStorage.setItem("userNombre", nombre);
	localStorage.setItem("userUser", user);
	localStorage.setItem("userEmail", email);
	localStorage.setItem("userDir", dir);
	localStorage.setItem("userLoc", loc);
	localStorage.setItem("userCodPost", cPost);

}

function autocompletarLS() {
	var emailEstandar = "ana@mymail.com";
	var dirEstandar = "Calle del usuario promedio 32";
	var LocEstandar = "Villanormal";
	var cPostEstandar = "54321";
	var pedido = "AG-012341212";
	if (localStorage.getItem('usuario') != undefined) {
		var UserLoged = JSON.parse(localStorage.getItem('usuario'));
	

		if (UserLoged.nombre == 'ana' || UserLoged.nombre == 'pepe') {
			document.getElementById("pedido").innerHTML = pedido;
			document.getElementById("firstName").placeholder = UserLoged.nombre;
			document.getElementById("username").placeholder = UserLoged.nombre;
			document.getElementById("email").placeholder = emailEstandar;
			document.getElementById("address").placeholder = dirEstandar;
			document.getElementById("country").placeholder = LocEstandar;
			document.getElementById("zip").placeholder = cPostEstandar;
		}
		else {
			var nombre = String(localStorage.getItem('userNombre'));
			var user = String(localStorage.getItem('userUser'));
			var email = String(localStorage.getItem('userEmail'));
			var dir = String(localStorage.getItem('userDir'));
			var loc = String(localStorage.getItem('userLoc'));
			var cPost = String(localStorage.getItem('userCodPost'));
			
			document.getElementById("pedido").innerHTML = pedido;
			document.getElementById("firstName").placeholder = nombre;
			document.getElementById("username").placeholder = user;
			document.getElementById("email").placeholder = email;
			document.getElementById("address").placeholder = dir;
			document.getElementById("country").placeholder = loc;
			document.getElementById("zip").placeholder = cPost;
		}
	}
}

module.exports = {
	guardarRegistro:guardarRegistro,
	autocompletarLS: autocompletarLS
}

},{}],2:[function(require,module,exports){
var autocompletar=require('./autocompletarCarrito.js');

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

   autocompletar.guardarRegistro();

    let name = document.getElementById('inputUser').value;
    let pass = document.getElementById('inputPass').value;

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
        document.getElementById("botonLogIn").innerHTML = "Cerrar Sesion";
        ocultarAtributo(botonRegistrarse);
        ocultarAtributo(registerForm);
    } else {
        mostrarAtributo(loginForm);
        ocultarAtributo(logedForm);
        document.getElementById("botonLogIn").innerHTML = "Iniciar Sesion";
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

module.exports = {
    login : login,
    isLogged : isLogged,
    logout :logout,
    registrarse : registrarse,
    refrescarLogin : refrescarLogin,
    ocultarAtributo : ocultarAtributo,
    mostrarAtributo : mostrarAtributo
}
},{"./autocompletarCarrito.js":1}]},{},[2])(2)
});
