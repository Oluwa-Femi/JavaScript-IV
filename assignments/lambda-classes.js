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
};

class Instructor extends Person {
    constructor(name, age, location, specialty, favLanguage, catchPhrase) {
        super(name, age, location);
        this.name = name;
        this.age = age;
        this.location = location;
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
class Student extends Person {
    constructor(name, age, location, previousBackground, className, favSubjects, listsSubjects, PRAssignment, sprintChallenge) {
        super(name, age, location);
        this.name = name;
        this.age = age;
        this.location = location;
        this.previousBackground = previousBackground;
        this.className = className;
        this.favSubjects = favSubjects;
        this.listsSubjects = listsSubjects;
        this.PRAssignment = PRAssignment;
        this.sprintChallenge = sprintChallenge;

    }
    demo(subject) {
        console.log(`Today we are learning about ${subject}`)
    }
    grade(student, subject) {
        console.log(`${student} receives a perfect score on ${subject}`)
    }
}
class ProjectManager extends Instructor {

}

