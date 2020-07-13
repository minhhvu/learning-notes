/*
    Some best practice on Design pattern with Typescript
    - Typical structure of TS file: interface definitions --> class definition
    - Interface wraps the common between classes and make it as a data type to use on any function
    - Inheritance of Abstract classes: abstract class --> inheritance (class extends).

    reference: https://www.udemy.com/course/typescript-the-complete-developers-guide/ (Section 9, 10)
 */

//Typical structure of TS file


//Interface definitions which are shared between classes
interface Mapable {                 //interface will be used by the 3 classes
    location: {
        attitude: number,
        longitude: number
    };
    // color: string;
    // title: string
}
class Customer implements Mapable{
    public name: string;
    public location: {
        attitude: number,
        longitude: number
    };
    constructor(name: string, map?: Mapable) {
        this.name = name;
        map && (this.location = {...map.location})
    }

}

class Company implements Mapable{
    public name: string;
    public year: number;
    public avenue: number;
    public location: {
        attitude: number,
        longitude: number
    };
    constructor(name: string, map?: Mapable) {
        this.name = name;
        map && (this.location = {...map.location})
    }
}

class CustomMap {
    constructor(){}
    getDistance(a: Mapable, b: Mapable): number {
        return Math.sqrt((a.location.attitude - b.location.attitude)*(a.location.attitude - b.location.attitude)
                            + (a.location.longitude - b.location.longitude)*(a.location.longitude - b.location.longitude))
    }
    addMarker(location: Mapable): void {
        //create a marker on google map ...
    }
}

let customer = new Customer("minh");
let company = new Company("Google");
let map = new CustomMap();
// map.getDistance(customer, company);


//Inheritance of Abstract classes

abstract class Sort {
    abstract swap(leftIndex: number, rightIndex: number): void;
    abstract compare(leftIndex: number, rightIndex: number): boolean;
    length: number;
    data: any;
    sort (): void {                             //all extended classes will inherit this method
        for (let i=0; i< this.length; i++){
            for (let j=i+1; j< this.length; j++){
                if (this.compare(i,j))
                    this.swap(i,j)
            }
        }
    }
    print(): void{
        console.log(this.data)
    }
}

class NumberCollection extends Sort{
    public data: number[]
    constructor(data: number[]) {
        super();
        this.data = data;
    }

    get length(): number { return this.data.length}
    compare(leftIndex: number, rightIndex: number): boolean { return this.data[leftIndex] > this.data[rightIndex]}
    swap(leftIndex: number, rightIndex: number): void {
        let leftValue = this.data[leftIndex]
        this.data[leftIndex] = this.data[rightIndex];
        this.data[rightIndex] = leftValue;
    }
}

class CharacterCollection extends Sort{
    public data: string;
    constructor(data: string) {
        super();
        this.data = data;
    }

    get length(): number { return this.data.length}
    compare(leftIndex: number, rightIndex: number): boolean { return this.data.charCodeAt(leftIndex) > this.data.charCodeAt(rightIndex)}
    swap(leftIndex: number, rightIndex: number): void {
        let dataCopy = this.data.split('');
        let leftValue = this.data[leftIndex];
        dataCopy[leftIndex] = dataCopy[rightIndex];
        dataCopy[rightIndex] = leftValue;
        this.data =  dataCopy.join('')
    }
}
let myArray: NumberCollection = new NumberCollection([1,2,5,-3, 6])
myArray.sort();
myArray.print();
let myString: CharacterCollection = new CharacterCollection('mInhHaiVu');
myString.sort();
myString.print();