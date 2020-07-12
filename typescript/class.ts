/*
    Classes:
    - Basic declaration
    - Public, protected, private properties
    - Inheritance
    - Accessor
    - Static properties
    - Abstract class
 */


class Student { //class
    name: string;           //Public property
    private birthday: Date; //Private property
    constructor (name: string){
        this.name = name;
    }
    setBirthday(d: Date){
        this.birthday = d;
    }
    getBirthday(): Date{
        return this.birthday;
    }
    print(): void {
        console.log(this.name, ' ', this.birthday)
    }
}
let minh = new Student('Minh');
minh.setBirthday(new Date(2020, 1,15));
minh.print();


//Inheritance
class InternationalStudent extends Student{
    private nation: string;
    constructor (name: string, nation?: string) {
        super(name)             //Must call to execute the constructor of the base class
                                //Equivalent to new Student(name)
        this.nation = nation;
    }
    print(): void {             //Override method
        // super.print();
        console.log(this.name, ' ', this.getBirthday(), this.nation);
    }
}
let mark = new InternationalStudent('Mark', 'China');
mark.setBirthday(new Date());
mark.print();


//Accessor
class Animal {
    private _type: string;
    get type(): string { return this._type}
    set type(t: string) { this._type = t};
}
let dog = new Animal();
dog.type = 'dog';
console.log(dog.type);


//Static properties
class Circle {
    static Pi = 3.14;
    radius: number;
    constructor (r? : number) {this.radius = r}
    get area(): number {return 2* this.radius * Circle.Pi}
}
let circle = new Circle(4);
console.log(circle.area);


//Abstract CLasses
abstract class Major {      //Define a class that includes the abstract methods
    name: string;
    constructor (n: string){ this.name = n};
    print(){
        console.log(this.name)
    };
    abstract printFull(): void;     //Abstract method that must be implemented in derived classes
}
class CS extends Major{
    constructor(){super('CS')}
    printFull(): void {
        console.log('Computer Science')
    }
}
let cs = new CS();
cs.print();
cs.printFull();