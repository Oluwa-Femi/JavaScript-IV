// CODE here for your Lambda Classes
//Create a class of Person
//Create a class of Instructors and Students extensions to person
//Create a class of Project manager which is an extension to Instructor
class Person {
    constructor(name, age, location) {
        this.name = name;
        this.age = age;
        this.location = location;
    }
    speak() {
        console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
    }
}
