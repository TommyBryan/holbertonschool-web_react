/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/*!********************!*\
  !*** ./js/main.ts ***!
  \********************/

// Director Class
var Director = /** @class */ (function () {
    function Director() {
    }
    Director.prototype.workFromHome = function () {
        return "Working from home";
    };
    Director.prototype.getCoffeeBreak = function () {
        return "Getting a coffee break";
    };
    Director.prototype.workDirectorTasks = function () {
        return "Getting to director tasks";
    };
    return Director;
}());
// Teacher Class
var Teacher = /** @class */ (function () {
    function Teacher() {
    }
    Teacher.prototype.workFromHome = function () {
        return "Cannot work from home";
    };
    Teacher.prototype.getCoffeeBreak = function () {
        return "Cannot have a break";
    };
    Teacher.prototype.workTeacherTasks = function () {
        return "Getting to work";
    };
    return Teacher;
}());
// createEmployee function
function createEmployee(salary) {
    if (typeof salary === "number" && salary < 500) {
        return new Teacher();
    }
    return new Director();
}
// --- Testing ---
console.log(createEmployee(200)); // Teacher {}
console.log(createEmployee(1000)); // Director {}
console.log(createEmployee('$500')); // Director {}

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQWNBLGlCQUFpQjtBQUNqQjtJQUFBO0lBVUEsQ0FBQztJQVRDLCtCQUFZLEdBQVo7UUFDRSxPQUFPLG1CQUFtQixDQUFDO0lBQzdCLENBQUM7SUFDRCxpQ0FBYyxHQUFkO1FBQ0UsT0FBTyx3QkFBd0IsQ0FBQztJQUNsQyxDQUFDO0lBQ0Qsb0NBQWlCLEdBQWpCO1FBQ0UsT0FBTywyQkFBMkIsQ0FBQztJQUNyQyxDQUFDO0lBQ0gsZUFBQztBQUFELENBQUM7QUFFRCxnQkFBZ0I7QUFDaEI7SUFBQTtJQVVBLENBQUM7SUFUQyw4QkFBWSxHQUFaO1FBQ0UsT0FBTyx1QkFBdUIsQ0FBQztJQUNqQyxDQUFDO0lBQ0QsZ0NBQWMsR0FBZDtRQUNFLE9BQU8scUJBQXFCLENBQUM7SUFDL0IsQ0FBQztJQUNELGtDQUFnQixHQUFoQjtRQUNFLE9BQU8saUJBQWlCLENBQUM7SUFDM0IsQ0FBQztJQUNILGNBQUM7QUFBRCxDQUFDO0FBRUQsMEJBQTBCO0FBQzFCLFNBQVMsY0FBYyxDQUFDLE1BQXVCO0lBQzdDLElBQUksT0FBTyxNQUFNLEtBQUssUUFBUSxJQUFJLE1BQU0sR0FBRyxHQUFHLEVBQUU7UUFDOUMsT0FBTyxJQUFJLE9BQU8sRUFBRSxDQUFDO0tBQ3RCO0lBQ0QsT0FBTyxJQUFJLFFBQVEsRUFBRSxDQUFDO0FBQ3hCLENBQUM7QUFFRCxrQkFBa0I7QUFDbEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFLLGFBQWE7QUFDbkQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFJLGNBQWM7QUFDcEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFFLGNBQWMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90eXBlc2NyaXB0X2RlcGVuZGVuY2llcy8uL2pzL21haW4udHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gRGlyZWN0b3IgSW50ZXJmYWNlXG5pbnRlcmZhY2UgRGlyZWN0b3JJbnRlcmZhY2Uge1xuICB3b3JrRnJvbUhvbWUoKTogc3RyaW5nO1xuICBnZXRDb2ZmZWVCcmVhaygpOiBzdHJpbmc7XG4gIHdvcmtEaXJlY3RvclRhc2tzKCk6IHN0cmluZztcbn1cblxuLy8gVGVhY2hlciBJbnRlcmZhY2VcbmludGVyZmFjZSBUZWFjaGVySW50ZXJmYWNlIHtcbiAgd29ya0Zyb21Ib21lKCk6IHN0cmluZztcbiAgZ2V0Q29mZmVlQnJlYWsoKTogc3RyaW5nO1xuICB3b3JrVGVhY2hlclRhc2tzKCk6IHN0cmluZztcbn1cblxuLy8gRGlyZWN0b3IgQ2xhc3NcbmNsYXNzIERpcmVjdG9yIGltcGxlbWVudHMgRGlyZWN0b3JJbnRlcmZhY2Uge1xuICB3b3JrRnJvbUhvbWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gXCJXb3JraW5nIGZyb20gaG9tZVwiO1xuICB9XG4gIGdldENvZmZlZUJyZWFrKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIFwiR2V0dGluZyBhIGNvZmZlZSBicmVha1wiO1xuICB9XG4gIHdvcmtEaXJlY3RvclRhc2tzKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIFwiR2V0dGluZyB0byBkaXJlY3RvciB0YXNrc1wiO1xuICB9XG59XG5cbi8vIFRlYWNoZXIgQ2xhc3NcbmNsYXNzIFRlYWNoZXIgaW1wbGVtZW50cyBUZWFjaGVySW50ZXJmYWNlIHtcbiAgd29ya0Zyb21Ib21lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIFwiQ2Fubm90IHdvcmsgZnJvbSBob21lXCI7XG4gIH1cbiAgZ2V0Q29mZmVlQnJlYWsoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gXCJDYW5ub3QgaGF2ZSBhIGJyZWFrXCI7XG4gIH1cbiAgd29ya1RlYWNoZXJUYXNrcygpOiBzdHJpbmcge1xuICAgIHJldHVybiBcIkdldHRpbmcgdG8gd29ya1wiO1xuICB9XG59XG5cbi8vIGNyZWF0ZUVtcGxveWVlIGZ1bmN0aW9uXG5mdW5jdGlvbiBjcmVhdGVFbXBsb3llZShzYWxhcnk6IG51bWJlciB8IHN0cmluZyk6IERpcmVjdG9yIHwgVGVhY2hlciB7XG4gIGlmICh0eXBlb2Ygc2FsYXJ5ID09PSBcIm51bWJlclwiICYmIHNhbGFyeSA8IDUwMCkge1xuICAgIHJldHVybiBuZXcgVGVhY2hlcigpO1xuICB9XG4gIHJldHVybiBuZXcgRGlyZWN0b3IoKTtcbn1cblxuLy8gLS0tIFRlc3RpbmcgLS0tXG5jb25zb2xlLmxvZyhjcmVhdGVFbXBsb3llZSgyMDApKTsgICAgIC8vIFRlYWNoZXIge31cbmNvbnNvbGUubG9nKGNyZWF0ZUVtcGxveWVlKDEwMDApKTsgICAgLy8gRGlyZWN0b3Ige31cbmNvbnNvbGUubG9nKGNyZWF0ZUVtcGxveWVlKCckNTAwJykpOyAgLy8gRGlyZWN0b3Ige31cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==