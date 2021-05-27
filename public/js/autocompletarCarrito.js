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
