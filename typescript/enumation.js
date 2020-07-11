/*
    Enum allows us to define a set of name constants
 */
var Color;
(function (Color) {
    Color[Color["red"] = 0] = "red";
    Color[Color["green"] = 1] = "green";
    Color[Color["blue"] = 2] = "blue"; //Equivalent to { '0': 'red', '1': 'green', '2': 'blue', red: 0, green: 1, blue: 2 }
})(Color || (Color = {}));
var c = Color.blue;
console.log(c); //c = 2
console.log(Color[1]); //green
console.log(typeof Color);
var Direction;
(function (Direction) {
    Direction[Direction["up"] = 1] = "up";
    Direction[Direction["down"] = 2] = "down";
    Direction[Direction["left"] = 3] = "left";
    Direction[Direction["right"] = 4] = "right"; //4
})(Direction || (Direction = {}));
var DirectionString;
(function (DirectionString) {
    DirectionString["up"] = "up";
    DirectionString["down"] = "down";
    DirectionString["left"] = "left";
    DirectionString["right"] = "right";
})(DirectionString || (DirectionString = {}));
var ComputedEnum;
(function (ComputedEnum) {
    ComputedEnum[ComputedEnum["sum"] = 327669] = "sum";
    ComputedEnum[ComputedEnum["length"] = '12323'.length] = "length";
})(ComputedEnum || (ComputedEnum = {}));
console.log(ComputedEnum);
var ShapeKind;
(function (ShapeKind) {
    ShapeKind[ShapeKind["circle"] = 0] = "circle";
    ShapeKind[ShapeKind["square"] = 1] = "square";
})(ShapeKind || (ShapeKind = {}));
