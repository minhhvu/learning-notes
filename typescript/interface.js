/*
    Interface
 */
function newRectangle(rect) {
    var newRect = {
        width: rect.width * 2,
        color: !rect.color ? 'White' : rect.color,
        area: rect.width * 2 * rect.width * 2
    };
    return newRect;
}
var rectangle = {
    width: 4
};
console.log(newRectangle(rectangle));
var mySum = function (a, b) {
    return a + b;
};
console.log('3 + 4 = ', mySum(3, 4));
var hashTable = ['Tue', 'Mon']; //Equivalent to hashTable: string[] = ...
console.log(hashTable);
var dic = {
    length: 4,
    name: 'dictionary',
    date: 'Mon'
};
console.log(dic);
var Course = /** @class */ (function () {
    function Course(name, time) {
        this.name = name;
        this.startingTime = time;
    }
    ;
    Course.prototype.setStartingTime = function (d) {
        this.startingTime = d;
    };
    ;
    Course.prototype.print = function () {
        console.log(this.name, '  ', this.startingTime);
    };
    return Course;
}());
var course = new Course('Typescript', new Date());
course.print();
var circle = {
    radius: 4,
    color: 'red',
    name: 'circle'
};
console.log(circle);
function getGreeting() {
    var greeting = function (s) {
        console.log(greeting, s);
    };
    greeting.words = 'Hello, Minh',
        greeting.reset = function () {
            greeting.words = 'Hello world';
        };
    return greeting;
}
var c = getGreeting();
c.words = "hi everyone";
c('I am happy.');
c.reset();
c('nope');
