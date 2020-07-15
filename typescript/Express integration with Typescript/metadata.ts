/*
    Metadata
    - install package: npm i reflect-metadata
    - to store hidden data relating to an object and then read the data over the program.
 */

import 'reflect-metadata';

let student = {
    name: 'minh',
    id: 12324,
    history: {
        highschool: 'nguyen trai',
        college: 'fleming'
    }
}

//Define and get metadata on object
Reflect.defineMetadata('nation', 'vietnam', student);
console.log(Reflect.getMetadata('nation', student));

//Object property
Reflect.defineMetadata('gap', '3 years', student, 'history');
console.log(Reflect.getMetadata('gap', student, 'history'));

//Class prototype
class Greeting {
    words= 'Hello world';
}
Reflect.defineMetadata('format', function(){console.log('testing on class')}, Greeting.prototype);
console.log(Reflect.getMetadataKeys(Greeting.prototype));
Reflect.getMetadata('format', Greeting.prototype)();

