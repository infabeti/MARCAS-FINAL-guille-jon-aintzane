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
	var emailEstandar="ana@mymail.com"
	var dirEstandar="Calle del usuario promedio 32"
	var LocEstandar="Villanormal"
	var cPostEstandar="54321"

	var UserLoged = localStorage.getItem('usuario')

	if(UserLoged.getElementsByClassName('nombre')!="ANA"){
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
	else {
	document.getElementById("firstName").innerHTML = UserLoged.getElementsByClassName('nombre');
	document.getElementById("username").innerHTML = UserLoged.getElementsByClassName('nombre');
	document.getElementById("email").innerHTML = emailEstandar;
	document.getElementById("address").innerHTML = dirEstandar;
	document.getElementById("country").innerHTML = LocEstandar;
	document.getElementById("zip").innerHTML = cPostEstandar;
	}
}