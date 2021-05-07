const inventario = require ("../js/inventario.js");
const sinon = require("sinon");
const jsdom = require("jsdom");

describe("Tests inventario", function() {
    it("test 1 estaLogged debería devolver false", function() {
        const a = inventario.estaLogged();
        expect(a).toBe(false);
    });
        it("test 2 estaLogged debería devolver true", function() {
        const a = inventario.estaLogged();
        expect(a).toBe(true);
    });

});