
var expect = require('chai').expect;
var convertor = require('../app/convertor');

describe('Color convertor', function() {
    describe('RGB to HEX conversion\n', function() {
        it('Coverts the basic Color', function() {
            var redHex = convertor.rgbToHex(255,0,0);
            var greenHex = convertor.rgbToHex(0,255,0);
            var blueHex = convertor.rgbToHex(0,0,255);

            expect(redHex).to.equal("ff00");
            expect(greenHex).to.equal("0ff0");
            expect(blueHex).to.equal("00ff");
        });
    });

    describe('HEX to RGB conversion\n', function() {
        it('Converts the basic Color', function() {
            var red = convertor.hexToRgb('ff0000');
            var green = convertor.hexToRgb('00ff00');
            var blue = convertor.hexToRgb('0000ff');

            expect(red).to.deep.equal([255,0,0]);
            expect(green).to.deep.equal([0,255,0]);
            expect(blue).to.deep.equal([0,0,255]);
        });
    });
});