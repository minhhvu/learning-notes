/* This file demonstrates the examples of declaration with different types:
   - boolean
   - number
   - string
   - array
   - tuple
   - any
 */

//Built-in Types
let isDOne : boolean = false; //boolean

let decimal: number = 4; //number
let hex: number = 0xf2ad;
let binary: number = 0b10101;

let fullName: string = 'Minh'; //string

let a: string = null // null

let x: number = undefined; //undefined
let y: number;


//Advanced Type Declarations
let list: number[] = [1, 2, 4]; //array

let student: [string, number]; //tuple, or an array with fixed elements
student = ['minh', 27];

let notSure: any = 4; //any
notSure = "may be a string";
notSure = false;



