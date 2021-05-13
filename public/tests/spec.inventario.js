const inventario = require ("../js/inventario.js");
const sinon = require("sinon");
const jsdom = require("jsdom");




const window = new jsdom.JSDOM().window;
const document = new jsdom.JSDOM("").window;
const $ = require( "jquery" )( window );

var localStorageMock = (function() {
    var store = {};
    return {
      getItem: function(key) {
        return store[key];
      },
      setItem: function(key, value) {
        store[key] = value.toString();
      },
      clear: function() {
        store = {};
      },
      removeItem: function(key) {
        delete store[key];
      }
    };
  })();
  

describe("Tests usuarios", function() {

    Object.defineProperty(window, 'localStorage', { value: localStorageMock });
    global.localStorage = localStorageMock;
    global.document = document;
document.getElementById = sinon.stub();
global.$=$;

    



    it("test 1 estaLogged debería devolver false", function() {
        localStorage.clear()
        const a = inventario.estaLogged();
        expect(a).toBe(false);
    });

   

    it("test 2 estaLogged debería devolver true", function() {
        localStorage.setItem('usuario',"");
        const a = inventario.estaLogged();
        expect(a).toBe(true);
    });
       
    it("test 3 login deberia devolver true", function() {
        localStorage.clear();
        document.getElementById.withArgs("inputUser").returns('ana');
document.getElementById.withArgs("inputPass").returns('123');
document.getElementById.withArgs("botonLogIn").returns('');
        const a = usuarios.login(true);
        expect(a).toBe(true);
    });

});