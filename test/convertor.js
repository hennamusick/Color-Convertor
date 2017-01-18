
var expect = require('chai').expect;
var convertor = require('../app/convertor');

describe('Color convertor', function() {
    describe('RGB to HEX conversion', function() {
        it('Coverts the basic Color', function() {
            var redHex = convertor.rgbToHex(255,0,0);
            var greenHex = convertor.rgbToHex(0,255,0);
            var blueHex = convertor.rgbToHex(0,0,255);

            expect(redHex).to.equal("ffoooo");
            expect(greenHex).to.equal("ooffoo");
            expect(blueHex).to.equal("ooooff");
        });
    });

    describe('HEX to RGB conversion', function() {
        it('Converts the basic Color', function() {
            var red = convertor.hexToRgb('ffoooo');
            var green = convertor.hexToRgb('ooffoo');
            var blue = convertor.hexToRgb('ooooff');

            expect(red).to.deep.equal([255,0,0]);
            expect(green).to.deep.equal([0,255,0]);
            expect(blue).to.deep.equal([0,0,255]);
        });
    });
});