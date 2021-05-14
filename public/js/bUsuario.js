(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.usuario = f()}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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
        document.getElementById("botonLogIn").innerHTML = "Cerrar Sesi├│n";
        ocultarAtributo(botonRegistrarse);
        ocultarAtributo(registerForm);
    } else {
        mostrarAtributo(loginForm);
        ocultarAtributo(logedForm);
        document.getElementById("botonLogIn").innerHTML = "Iniciar Sesi├│n";
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
},{}]},{},[1])(1)
});
