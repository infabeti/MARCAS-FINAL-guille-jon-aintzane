(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.carrito = f()}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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
	if (localStorage.getItem('usuario') != undefined) {
		var UserLoged = JSON.parse(localStorage.getItem('usuario'));
		console.log(UserLoged);

		if (UserLoged.nombre == 'ana' || UserLoged.nombre == 'pepe') {
			document.getElementById("firstName").placeholder = UserLoged.nombre;
			document.getElementById("username").placeholder = UserLoged.nombre;
			document.getElementById("email").placeholder = emailEstandar;
			document.getElementById("address").placeholder = dirEstandar;
			document.getElementById("country").placeholder = LocEstandar;
			document.getElementById("zip").placeholder = cPostEstandar;
		}
		else {
			var nombre = (localStorage.getItem("userNombre"));
			var user = (localStorage.getItem("userUser"));
			var email = (localStorage.getItem("userEmail"));
			var dir = (localStorage.getItem("userDir"));
			var loc = (localStorage.getItem("userLoc"));
			var cPost = (localStorage.getItem("userCodPost"));

			document.getElementById("email").placeholder = emailEstandar;
			document.getElementById("firstaNme").placeholder = emailEstandar;

			document.getElementById("firstaNme").placeholder = nombre;
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

},{}]},{},[1])(1)
});
