/*
    Interface
 */


interface Rectangle {
    readonly width: number,   //readonly property
    color?: string,           //optional property
}

function newRectangle(rect: Rectangle): {width: number, area: number, color: string} {
    let newRect = {
        width: rect.width *2,
        color: !rect.color ? 'White' : rect.color,
        area: rect.width *2*rect.width *2
    };
    return newRect;
}
let rectangle: Rectangle = {
    width: 4
}
console.log(newRectangle(rectangle))


//Excess Property checks


//Function Types
interface SumFunc {
    (a:number, b: number): number
}
let mySum: SumFunc = function (a: number, b:number): number {
    return a+b
}
console.log('3 + 4 = ', mySum(3, 4))

//Indexable Types
interface HashTable {
    [index: number]: string
}
let hashTable: HashTable = ['Tue', 'Mon']; //Equivalent to hashTable: string[] = ...
console.log(hashTable);

interface Dictionary { //Object's properties
    [index: string]: number | string;
    length: number,
    name: string
}
let dic: Dictionary = {
    length: 4,
    name: 'dictionary',
    date: 'Mon'
}
console.log(dic)


//Class Types
interface CourseInterface {  //Implement an interface
    name: string,
    startingTime: Date,
    setStartingTime(d: Date): void,
}

class Course implements CourseInterface{
    name: string;
    startingTime: Date;
    constructor(name: string, time?: Date){
        this.name = name;
        this.startingTime = time
    };
    setStartingTime(d: Date): void {
        this.startingTime = d;
    };
    print(): void {
        console.log(this.name, '  ', this.startingTime);
    }
}
let course = new Course('Typescript', new Date());
course.print();

interface Shape {       //Extends interfaces
    name: string,
    color: string
}
interface Border {
    borderType?: string
}
interface Circle extends Border, Shape{
    radius: number
}
let circle: Circle = {
    radius: 4,
    color: 'red',
    name: 'circle'
}
console.log(circle);


//Hybrid types
interface Greeting {
    (s: string) :void;
    words: string;
    reset(): void
}
function getGreeting(): Greeting {
    let greeting = function(s: string) {
        console.log(greeting, s)
    } as Greeting;
    greeting.words = 'Hello, Minh',
    greeting.reset = function () {
        greeting.words = 'Hello world'
    }
    return greeting;
}
let c = getGreeting();
c.words = "hi everyone";
c('I am happy.');
c.reset();
c('nope');


//Interfaces extending classes
class Student {
    name: string;
    id: number
}
interface InternationalStudent extends Student{
    nation: string
}
let student: InternationalStudent = {
    name : 'minh',
    id : 1234,
    nation : 'Vietname'
}
console.log(student);