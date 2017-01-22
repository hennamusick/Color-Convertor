var express = require('express');
var app = express();
var convertor =  require('./convertor');

//rgb convert to the hex
app.get("./rgbToHex", function(req, res) {

    var red = parseInt(req.query, 10);
    var green = parseInt(req.query, 10);
    var blue = parseInt(req.query, 10);

    var hex = convertor.rgbToHex(red, green, blue);
    res.send(hex);
});

//hex convert to the rgb
app.get("./hexToRgb", function(req, res) {

    var hex = req.query.hex;
    var rgb = convertor.hexToRgb(hex);
    res.send(JSON.stringify(rgb));
});
app.listen(3000);