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
    name: string;
    constructor(name=''){
        this.name = name
    }

    getName(): string {
        return this.name;
    }

    setName(n: string): void {
        this.name = n;
    }
}

function classDecorator(constructor: Function) {
    console.log(constructor)
}