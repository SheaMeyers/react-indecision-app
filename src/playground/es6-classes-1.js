
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

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }

    hasMajor() {
        return !!this.major;
    }

    getGreeting() {
        let greeting = super.getGreeting();
        
        if (this.hasMajor()){
            greeting += ` Their major is ${ this.major }.`;
        }
        
        return greeting;
    }
}

// Traveler -> extends Person
// add support for home location
// Override getGreeting
// 1. Hi.  I am Shea Meyers.  I'm visiting from Voorburg
// 2. Hi.  I am Anonymous.

class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }

    hasHomeLocation() {
        return !!this.homeLocation;
    }

    getGreeting() {
        let greeting = super.getGreeting();
        
        if (this.hasHomeLocation()){
            greeting += ` I'm visiting from ${ this.homeLocation }.`;
        }
        
        return greeting;
    }
}

const me = new Student('Shea Meyers', 28, 'Computer Science');
console.log(me.getGreeting());

const travelerMe = new Traveler('Shea Meyers', 28, 'Voorburg');
console.log(travelerMe.getGreeting());

const other = new Student();
console.log(other.getGreeting());

const travelerOther = new Traveler();
console.log(travelerOther.getGreeting());
