/*
    Classes:
    - Basic declaration
    - Public, protected, private properties
    - Inheritance
    - Accessor
    - Static properties
    - Abstract class
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Student = /** @class */ (function () {
    function Student(name) {
        this.name = name;
    }
    Student.prototype.setBirthday = function (d) {
        this.birthday = d;
    };
    Student.prototype.getBirthday = function () {
        return this.birthday;
    };
    Student.prototype.print = function () {
        console.log(this.name, ' ', this.birthday);
    };
    return Student;
}());
var minh = new Student('Minh');
minh.setBirthday(new Date(2020, 1, 15));
minh.print();
//Inheritance
var InternationalStudent = /** @class */ (function (_super) {
    __extends(InternationalStudent, _super);
    function InternationalStudent(name, nation) {
        var _this = _super.call(this, name) //Must call to execute the constructor of the base class
         || this;
        //Equivalent to new Student(name)
        _this.nation = nation;
        return _this;
    }
    InternationalStudent.prototype.print = function () {
        // super.print();
        console.log(this.name, ' ', this.getBirthday(), this.nation);
    };
    return InternationalStudent;
}(Student));
var mark = new InternationalStudent('Mark', 'China');
mark.setBirthday(new Date());
mark.print();
//
//
// //Accessor
// class Animal {
//     private _type: string;
//     get type(): string { return this._type}
//     set type(t: string) { this._type = t};
// }
// let dog = new Animal();
// dog.type = 'dog';
// console.log(dog.type);
// //Static properties
// class Circle {
//     static Pi = 3.14;
//     radius: number;
//     constructor (r? : number) {this.radius = r}
//     get area(): number {return 2* this.radius * Circle.Pi}
// }
// let circle = new Circle(4);
// console.log(circle.area);
//Abstract CLasses
var Major = /** @class */ (function () {
    function Major(n) {
        this.name = n;
    }
    ;
    Major.prototype.print = function () {
        console.log(this.name);
    };
    ;
    return Major;
}());
var CS = /** @class */ (function (_super) {
    __extends(CS, _super);
    function CS() {
        return _super.call(this, 'CS') || this;
    }
    CS.prototype.printFull = function () {
        console.log('Computer Science');
    };
    return CS;
}(Major));
var cs = new CS();
cs.print();
cs.printFull();
