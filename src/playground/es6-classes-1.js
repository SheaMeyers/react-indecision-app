
// Set up constructor to take name and age (default to 0)
// getDescription - Andrew Mead is 26 years old.

class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }

    getGreeting() {
        return `Hi. I am ${ this.name }!`;
    }

    getDescription() {
        return `${ this.name } is ${ this.age } years old.`
    }

}

const me = new Person('Shea Meyers', 28);
console.log(me.getGreeting());
console.log(me.getDescription());

const other = new Person();
console.log(other.getGreeting());
console.log(other.getDescription());