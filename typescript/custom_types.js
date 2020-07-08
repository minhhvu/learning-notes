/*
  Custom Types
 */
//Class
var Logger = /** @class */ (function () {
    function Logger() {
    }
    return Logger;
}());
//Enum
var Color;
(function (Color) {
    Color[Color["red"] = 0] = "red";
    Color[Color["green"] = 1] = "green";
    Color[Color["blue"] = 2] = "blue";
})(Color || (Color = {}));
var c = Color.blue;
//Function
function warnUser(s) {
    console.log('Warning message:' + s);
}
;
warnUser('overflowed');
function square(a) {
    return a * a;
}
console.log(square(4));
var sum;
sum = function (a, b) {
    return a + b;
};
console.log('3 + 4 = ', sum(3, 4));
