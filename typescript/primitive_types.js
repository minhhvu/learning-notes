/*

 */
//Built-in Types
var isDOne = false; //boolean
var decimal = 4; //number
var hex = 0xf2ad;
var binary = 21;
var fullName = 'Minh'; //string
var a = null; // null
var x = undefined; //undefined
var y;
var Logger = /** @class */ (function () {
    function Logger() {
    }
    return Logger;
}());
var Color;
(function (Color) {
    Color[Color["red"] = 0] = "red";
    Color[Color["green"] = 1] = "green";
    Color[Color["blue"] = 2] = "blue";
})(Color || (Color = {}));
var c = Color.blue;
//Advanced Type Declarations
var list = [1, 2, 4]; //array
var student; //tuple, or an array with fixed elements
student = ['minh', 27];
