/**
 * Advanced types:
 * - Intersection Types
 * - Union Types
 * - Type Guards
 * - Differentiating Types
 * - Type Aliases
 */

//Union types
let someValue1: string | undefined;      //variable will be either string or undefined


//Type Guards
// ... is [type]
function isNumber(value: number | string): value is number {
    return (value as number) !== undefined;
}

// ... in [union type]
function getLength(value: any): number | undefined{
    return value.length !== undefined ? value.length : undefined;
}
console.log(getLength([1, 4, 2]))
console.log(getLength(1))

//instanceof
class Num{}
console.log(new Num() instanceof Num);
let value1: any;
console.log(value1 instanceof Num)

//Type aliases
type UnionType = string | number;
type SetNameFunc = (x: string) => void;
type Container<T> = {value: T};
let setName: SetNameFunc = (x: string) => { console.log(x)};
setName('Type alias')
