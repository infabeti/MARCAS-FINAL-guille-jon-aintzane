const inventario = require("../js/inventario.js");
const sinon = require("sinon");
const jsdom = require("jsdom");


const window = new jsdom.JSDOM().window;
const document = new jsdom.JSDOM("").window;
const $ = require("jquery")(window);

var localStorageMock = (function () {
  var store = {};
  return {
    getItem: function (key) {
      return store[key];
    },
    setItem: function (key, object) {
      store[key] = object;
    },
    clear: function () {
      store = {};
    },
    removeItem: function (key) {
      delete store[key];
    }
  };
})();

var stubInventario = sinon.stub(inventario, 'crearInventario').returns('hamburguesa');
var stubInventario = sinon.stub(inventario, 'recalcularTotales').returns(2);

describe("Tests inventario", function () {

  Object.defineProperty(window, 'localStorage', { value: localStorageMock });
  global.localStorage = localStorageMock;
  global.document = document;
  document.getElementById = sinon.stub();
  global.$ = $;


  const sandbox = sinon.createSandbox();

  beforeEach(function () {
    sandbox.spy(localStorageMock);
  });

  afterEach(function () {
    sandbox.restore();
  });



  it("test 1 estaLogged debería devolver false", function () {
    localStorage.clear()
    const a = inventario.estaLogged();
    expect(a).toBe(false);
  });



  it("test 2 estaLogged debería devolver true", function () {
    localStorage.setItem('usuario', "");
    const a = inventario.estaLogged();
    expect(a).toBe(true);
  });

  /* it("test 3 login deberia devolver true", function () {
     localStorage.clear();
     document.getElementById.withArgs("inputUser").returns('ana');
     document.getElementById.withArgs("inputPass").returns('123');
     document.getElementById.withArgs("botonLogIn").returns('');
     const a = inventario.estaLogged(true);
     expect(a).toBe(true);
   });*/

  it("test 3 crearInventario debería llamar una vez", function () {
    localStorage.clear();
    const a = inventario.crearInventario();
    sinon.assert.calledOnce(inventario.crearInventario);
  });

  it("test 4 recalcularTotales debería llamar una vez", function () {
    localStorage.clear();
    const a = inventario.recalcularTotales();
    sinon.assert.calledOnce(inventario.recalcularTotales);
  });

  /* parece que JSON.parse devuelve la letra u de undefined como si fuera un string y da error
  https://developers.suitecommerce.com/troubleshooting-uncaught-syntaxerror-unexpected-token-u-in-json-at-position-0.html#:~:text=The%20'Uncaught%20SyntaxError%3A%20Unexpected%20token,the%20JSON%20it%20was%20expecting.&text=This%20is%20a%20generic%20JavaScript,the%20specific%20client%2Dside%20application.*/
  it("test 5 refrescarCabecera debería llamar a crearInventario una vez", function () {
    localStorage.clear();
    const a = inventario.refrescarCabecera();
    sinon.assert.calledOnce(inventario.crearInventario);

  });
  /* parece que JSON.parse devuelve la letra o de object como si fuera un string y da error*/
  it("test 5 refrescarCabecera debería llamar a crearInventario una vez", function () {
    localStorage.setItem('inventario', "");
    let cesta = {
      nombre: 'cesta',
      precio: 1
    }
    localStorage.setItem('compra', cesta);
    document.getElementById.withArgs("numTotalProductos");
    const a = inventario.refrescarCabecera();
    sinon.assert.calledOnce(inventario.crearInventario);

  });

  it("test 5 addProduct debería llamar a crearInventario una vez", function () {
    localStorage.clear('inventario', "");

    const a = inventario.addProduct('hamburguesa');


  });
});