"use strict";
// task_1/js/main.ts
// Example Teacher
var teacher3 = {
    firstName: "John",
    lastName: "Doe",
    fullTimeEmployee: false,
    location: "London",
    contract: false,
};
console.log("Teacher:", teacher3);
var director1 = {
    firstName: "John",
    lastName: "Doe",
    location: "London",
    fullTimeEmployee: true,
    numberOfReports: 17,
};
console.log("Director:", director1);
var printTeacher = function (firstName, lastName) {
    return "".concat(firstName.charAt(0), ". ").concat(lastName);
};
console.log("printTeacher:", printTeacher("John", "Doe"));
console.log("printTeacher:", printTeacher("Ezra", "Hart"));
var StudentClass = /** @class */ (function () {
    function StudentClass(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    StudentClass.prototype.workOnHomework = function () {
        return "Currently working";
    };
    StudentClass.prototype.displayName = function () {
        return this.firstName;
    };
    return StudentClass;
}());
// Example Student
var student = new StudentClass("Ezra", "Hart");
console.log("Student displayName:", student.displayName());
console.log("Student workOnHomework:", student.workOnHomework());
//# sourceMappingURL=main.js.map