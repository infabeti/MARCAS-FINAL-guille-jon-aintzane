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

function autocompletarLS(){
	var nombre = (localStorage.getItem("userNombre"));
	var user = (localStorage.getItem("userUser"));
	var email = (localStorage.getItem("userEmail"));
	var dir = (localStorage.getItem("userDir"));
	var loc = (localStorage.getItem("userLoc"));
	var cPost = (localStorage.getItem("userCodPost"));

		document.getElementById("firstName").innerHTML = nombre;
		document.getElementById("username").innerHTML = user;
		document.getElementById("email").innerHTML = email;
		document.getElementById("address").innerHTML = dir;
		document.getElementById("country").innerHTML = loc;
		document.getElementById("zip").innerHTML = cPost;

}