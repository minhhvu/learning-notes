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


function warnUser(s: string): void { //void function
    console.log('Warning message:' + s)
};
warnUser('overflowed');

function square(a: number): number { //value-returned function
    return a*a;
}
console.log(square(4));


let sum: {(a: number, b: number): number}; //anonymous function
sum = function (a, b) {
    return a+b;
}
console.log('3 + 4 = ',sum(3,4))

let multiple: (x: number, y: number) => number =
    function (x: number, y: number): number { return x*y};
console.log('3 x 4 = ', multiple(3,4));

let greet= function (s: string): void {
    console.log( `Hi, ${s}`);
}
console.log(greet('addsfjlasdfla'))


function fullName(first: string, last: string, mid?: string): string { //optional parameter
    return first + (!mid ? '' : ` ${mid}`) + ' '+ last;
}
console.log(fullName('Minh', "Vu"));
console.log(fullName('Minh', 'Hai', 'Vu'));


function increaseBy(a: number, b=1): number {   //Default parameter
    return a+b;
}
console.log(increaseBy(5))
console.log(increaseBy(5, 3))

function sumList(...a: number[]): number {
    console.log(a);
    return a.reduce((sum,ele) => sum+ele, 0)
}
console.log(sumList(2,3,4))


interface Student {  //this
    name: string,
    age: number,
    setAge: {(this: Student, s: number): void},
    print() : void
}

let student: Student= {
    name: 'Minh',
    age: undefined,
    setAge: function(this: Student, n: number): void { console.log(this); this.age = n},
    print: function(): void {
        console.log(this.name, ' ', this.age)
    }
}
student.setAge(34)
student.print();

