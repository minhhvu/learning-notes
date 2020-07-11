/*
    Enum allows us to define a set of name constants
 */

enum Color {
    red, green, blue  //Equivalent to { '0': 'red', '1': 'green', '2': 'blue', red: 0, green: 1, blue: 2 }
}
let c: Color = Color.blue;
console.log(c); //c = 2
console.log(Color[1])  //green

enum Direction { //Initialize the values
    up =1,
    down, //2
    left, //3
    right //4
}

enum DirectionString {      //String enum
    up = 'up',
    down = 'down',
    left = 'left',
    right = 'right'
}

enum ComputedEnum {     //Computed Enum
    sum = 3435 + 324234,
    length = '12323'.length
}
console.log(ComputedEnum)

enum ShapeKind {        //enum works with interface
    circle,
    square
}

interface Circle {
    kind: ShapeKind.circle,
    radius: number
}

