/*
    Decorators
    - Decorators provide a way to add both annotations and a meta-programming syntax for class declaration, method,
    accessor, properties or parameter. They are "called at runtime" with information about the decorated declaration.
    - Syntax: @expression()
    - Decorator Factories
    - Decorator Composition
    - Class decorator
    - Method decorator
    - Property Decorators
    - Parameter Decorators

    Metadata
 */
@classDecorator
class User {
    @trackName       //property decorator
    name: string;
    constructor(name=''){
        this.name = name
    }

    @configurable(false)    //method decorator
    getName(): string {
        return this.name;
    }

    setName(n: string): void {
        this.name = n;
    }
}

function classDecorator(constructor: Function) {
    console.log("\nClass Decorator")
    console.log(constructor)
    Object.seal(constructor);       //preventing new properties from being added to it
                                    // and marking all existing properties as non-configurable
                                    //value can be still changed as long as they are writable
    Object.seal(constructor.prototype);
}

function configurable(config: boolean) {        //Decorator factory
    return function (target: any, propertyKey: string, desc: PropertyDescriptor) {
        console.log('Method decorator')
        console.log(target);        //User class object includes all methods
        console.log(propertyKey);   //name of method that was wrapped
        console.log(desc)           //property description of the method 
        desc.configurable = config;
    }
}

function trackName(target: any, key: string) {
    console.log('Property Decorator')
    console.log(target);
    console.log(key);
    console.log(target.key) // undefined because the property is not kept track on target object
}