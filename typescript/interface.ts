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

//Class Types
