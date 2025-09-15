interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "Ezra",
  lastName: "Hart",
  age: 30,
  location: "Romania"
};

const student2: Student = {
  firstName: "Archer",
  lastName: "Vaughn",
  age: 36,
  location: "London"
};

const studentsList: Student[] = [student1, student2];

// Create table
const table: HTMLTableElement = document.createElement("table");

// Create header
const thead = table.createTHead();
const headerRow = thead.insertRow();

const header1 = headerRow.insertCell();
header1.textContent = "First Name";

const header2 = headerRow.insertCell();
header2.textContent = "Location";

// Fill rows
const tbody = table.createTBody();
studentsList.forEach((student) => {
  const row = tbody.insertRow();
  const firstNameCell = row.insertCell();
  const locationCell = row.insertCell();

  firstNameCell.textContent = student.firstName;
  locationCell.textContent = student.location;
});

document.body.appendChild(table);
