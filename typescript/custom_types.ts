/*
  Custom Types
 */

//Interface
interface Ilogger { //interface

}

//Class
class Logger { //class

}

//Enum
enum Color {
    red, green, blue
}
let c: Color = Color.blue;

//Function
function warnUser(s: string): void {
    console.log('Warning message:' + s)
};
warnUser('overflowed');

function square(a: number): number {
    return a*a;
}
console.log(square(4));

let sum: {(a: number, b: number): number};
sum = function (a, b) {
    return a+b;
}
console.log('3 + 4 = ',sum(3,4))