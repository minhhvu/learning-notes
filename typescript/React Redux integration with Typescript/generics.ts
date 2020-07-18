/*
**
* - Type assertions
* That is a way to tell the compiler that I am sure the object belongs to that type
*
* - Generics
* Create a reusable components that can work over a variety of types rather than a single one.
 */

//Type insertion
let someValue: any = "this is a string";
let strLength: number = (<string>someValue).length;     //Type assertions
let strLength1: number = (someValue as string).length; // as ...  = <...>
console.log(someValue, '\n', strLength, '\n', strLength1)
someValue = 4;
strLength = (<string>someValue).length;
console.log(someValue, strLength);

//Generics
//Function generics
function print<T>(arg: T): void{
    console.log(arg);
}
print('I am a string'); //T as string
print(1234); //T as number


//Generic Interface
interface GenericInterface<T> {
    greet: T
}
let myInterface: GenericInterface<number> = {
    greet: 5
}
let myInterface1: GenericInterface<string> = {
    greet: 'AAAAAAAAAAAAAAAA'
}


//Generic Class
class GenericClass<G> {
    value!: G;
    add!: (x: G, y: G) => G
}
let numberClass = new GenericClass<number>();
numberClass.add = (x, y) => x+y;
console.log(numberClass.add(4,2))


//Generic Constraints
interface AppProps {
    name: string,
    array: number[];
}

function App<T extends AppProps>(props: T) {
    console.log(props.array.length);
    // console.log(props.id) //Error because props.id has not defined yet
}