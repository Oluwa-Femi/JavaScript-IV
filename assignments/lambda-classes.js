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

//Student Class
class Student extends Person {
    constructor(name, age, location, previousBackground, className, favSubjects) {
        super(name, age, location);
        this.previousBackground = previousBackground;
        this.className = className;
        this.favSubjects = favSubjects;
    }
    listsSubjects() {
        console.log (`${this.favSubjects}`);
    }
    PRAssignment(student) {
        console.log (`${student.name} has submitted a PR for ${student.favSubjects[0]}`);
    }
    sprintChallenge(student) {
        console.log (`${student.name} has begun spring challenge on ${student.favSubjects[0]}`);
    }
}
const tola = new Student(
    'tola',
    30,
    'Ikoyi',
    'Banker',
    'EU3',
     ['Physics', 'Maths', 'Anatomy', 'Quantum']
 );
 tola.listsSubjects();
 tola.PRAssignment(tola);
 tola.sprintChallenge(tola);
//Instructor class
class Instructor extends Person {
    constructor(name, age, location, specialty, favLanguage, catchPhrase) {
        super(name, age, location);
        this.specialty = specialty;
        this.favLanguage = favLanguage;
        this.catchPhrase = catchPhrase;
    }
    demo(student) {
        console.log(`Today we are learning about ${student.favSubjects[0]}`)
    }
    grade(student) {
        console.log(`${student.name} receives a perfect score on ${student.favSubjects[0]}`)
    }
}
const gabe = new Instructor({
    "name": 'gabe',
    "age": 80,
    "location": 'USA',
    "specialty": 'JS',
    "favLanguage": 'JS',
    "catchPhrase": 'I am evil!!',
 });
gabe.grade(tola);
gabe.demo(tola);



//ProjectManager Class 
/*class ProjectManager extends Instructor {
    constructor(name, age, location,specialty, favLanguage,  catchPhrase, gradClassName, favInstructor) {
        super(name, age, location, specialty, favLanguage, catchPhrase);
        this.gradClassName = gradClassName;
        this.favInstructor = favInstructor;
    }
    standUp(name, channel) {
        return `${name} announces to ${channel}, @${channel} stand up people!`;
    }
    debugsCode(name, student, subject) {
        return `${name} debugs ${student.name}'s code on ${student.favSubjects[0]}`;
    }
}
 const anna = new ProjectManager(
    'anna',
     90,
    'UK',
    'frontend',
    'english',
    'Oh! Awesome!!',
    'EU3',
     'Gabe',
 );
anna.standUp(name, channel);
*/
