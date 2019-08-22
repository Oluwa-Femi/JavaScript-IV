// CODE here for your Lambda Classes
//Create a class of Person
//Create a class of Instructors and Students extensions to person
//Create a class of Project manager which is an extension to Instructor
//Person class
class Person {
    constructor(name, age, location) {
        this.name = name;
        this.age = age;
        this.location = location;
    }
    speak() {
        console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
    }
};
//Instructor class
class Instructor extends Person {
    constructor(specialty, favLanguage, catchPhrase) {
        super(name, age, location);
        this.specialty = specialty;
        this.favLanguage = favLanguage;
        this.catchPhrase = catchPhrase;
    }
    demo(subject) {
        console.log(`Today we are learning about ${subject}`)
    }
    grade(student, subject) {
        console.log(`${student} receives a perfect score on ${subject}`)
    }
}
//Student Class
class Student extends Person {
    constructor(previousBackground, className, favSubjects) {
        super(name, age, location);
        this.previousBackground = previousBackground;
        this.className = className;
        this.favSubjects = favSubjects;
    }
    listsSubjects() {
        return `${this.favSubjects}`;
    }
    PRAssignment(student, subject) {
        return `${student.name} has submitted a PR for ${subject}`;
    }
    sprintChallenge(student, subject) {
        return `${student.name} has begun spring challenge on ${subject}`;
    }
}
//ProjectManager Class 
class ProjectManager extends Instructor {
    constructor(gradClassName, favInstructor) {
        super(name, age, location);
        this.gradClassName = gradClassName;
        this.favInstructor = favInstructor;
    }
    standUp(name, channel) {
        return `${name} announces to ${channel}, @${channel} stand up people!`;
    }
    debugsCode(name, student, subject) {
        return `${name} debugs ${student}'s code on ${subject}`;
    }
}

const femi = new Person ({
    "name": 'femi',
    "age": 25,
    "location":'Lagos',
 });
 const gabe = new Instructor({
    "name": 'gabe',
    "age": 100,
    "location": 'USA',
    "specialty": 'JS',
    "favLanguage": 'JS',
    "catchPhrase": 'I am evil!!',
 });
 const tola = new Student({
    "name": 'tola',
    "age": 30,
    "location": 'Ikoyi',
     "previousBackground": 'Banker',
    "className": 'EU3',
    "favSubjects": 'Physics',
 });
 const anna = new ProjectManager({
    "name": 'anna',
    "age": 90,
    "location": 'UK',
    "specialty": 'frontend',
    "favLanguage": 'english',
    "catchPhrase": 'Awesome!!',
    "gradClassName": 'EU3',
    "favInstructor": 'Gabe',
 });
