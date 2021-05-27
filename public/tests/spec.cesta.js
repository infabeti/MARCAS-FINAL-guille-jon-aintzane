const cesta = require("../js/cesta.js");
const sinon = require("sinon");
const jsdom = require("jsdom");

const window = new jsdom.JSDOM().window;
const document = new jsdom.JSDOM("").window;
const $ = require("jquery")(window);

document.getElementById.withArgs("listaCesta");

var stubInventario = sinon.stub(inventario, 'crearInventario').returns('hamburguesa');
var stubInventario = sinon.stub(inventario, 'recalcularTotales').returns(2);


describe("Tests cesta", function () {
	it("test 1 crearCesta debería llamar a listaCesta", function () {
    const a = cesta.crearCesta();
    sinon.assert.calledOnce(cesta.crearCesta);
  });
});