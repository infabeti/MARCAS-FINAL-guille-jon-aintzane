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