function autocompletarPredeterminado(){
	var nombre = "jose"
	var apellido = "Etxeberria"
	var user = "Platanzano"
	var email = "Patata@frita.es"
	var dir = "Avenida de los tomates 42"
	var loc = "Bilbao"
	var cPost = 48032

	document.getElementById("firstName").value = nombre;
	document.getElementById("lastName").value = apellido;
	document.getElementById("username").value = user;
	document.getElementById("email").value = email;
	document.getElementById("address").value = dir;
	document.getElementById("country").value = loc;
	document.getElementById("zip").value = cPost;

}

function guardarRegistro(){
	var nombre = document.getElementById("NomApe").value;
	var apellido = document.getElementById("NomApe").value;
	var user = document.getElementById("inputUser").value;
	var email = document.getElementById("exampleInputEmail1").value;
	var dir = document.getElementById("inputAddress").value;
	var loc = document.getElementById("inputCity").value;
	var cPost = document.getElementById("inputZip").value;

	localStorage.setItem("userNombre", JSON.stringify(nombre));
	localStorage.setItem("userApellido", JSON.stringify(apellido));
	localStorage.setItem("userUser", JSON.stringify(user));
	localStorage.setItem("userEmail", JSON.stringify(email));
	localStorage.setItem("userDir", JSON.stringify(dir));
	localStorage.setItem("userLoc", JSON.stringify(loc));
	localStorage.setItem("userCodPost", JSON.stringify(cPost));

}

function autocompletarLS(){
	var nombre = JSON.parse(localStorage.getItem("userNombre"));
	var apellido = JSON.parse(localStorage.getItem("userApellido"));
	var user = JSON.parse(localStorage.getItem("userUser"));
	var email = JSON.parse(localStorage.getItem("userEmail"));
	var dir = JSON.parse(localStorage.getItem("userDir"));
	var loc = JSON.parse(localStorage.getItem("userLoc"));
	var cPost = JSON.parse(localStorage.getItem("userCodPost"));

	document.getElementById("firstName").value = nombre;
	document.getElementById("lastName").value = apellido;
	document.getElementById("username").value = user;
	document.getElementById("email").value = email;
	document.getElementById("address").value = dir;
	document.getElementById("country").value = loc;
	document.getElementById("zip").value = cPost;

}