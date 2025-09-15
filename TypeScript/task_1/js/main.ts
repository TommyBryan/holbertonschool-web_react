// task_1/js/main.ts

// Teacher interface
interface Teacher {
  readonly firstName: string; // can only be set at initialization
  readonly lastName: string;  // can only be set at initialization
  fullTimeEmployee: boolean;
  yearsOfExperience?: number; // optional
  location: string;
  [key: string]: any; // allows adding any extra property
}

// Example usage
const teacher3: Teacher = {
  firstName: "John",
  lastName: "Doe",
  fullTimeEmployee: false,
  location: "London",
  contract: false, // additional property allowed by [key: string]: any
};

console.log(teacher3);
