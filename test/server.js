var expect = require('chai').expect;
var request = require("request");

describe('Color code convertor API', function() {
    describe('RGB to HEX conversion', function() {

        var url = "http://localhost:3000/rgbToHex?red=255&green=255&blue=255";

        it('returns status 200', function() {});
        it('retruns the Color in hex', function() {});
    });

    describe('HEX to RGB conversion', function() {

        var url = "http://localhost:3000/hexToRgb?hex=00ff00";

        it('returns status 200', function() {});
        it('retruns the Color in hex', function() {});
    });
});