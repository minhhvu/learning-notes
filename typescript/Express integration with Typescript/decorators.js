var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
var User = /** @class */ (function () {
    function User(name) {
        if (name === void 0) { name = ''; }
        this.name = name;
    }
    User.prototype.getName = function () {
        return this.name;
    };
    User.prototype.setName = function (n) {
        this.name = n;
    };
    User = __decorate([
        classDecorator
    ], User);
    return User;
}());
function classDecorator(constructor) {
    console.log(constructor);
}
