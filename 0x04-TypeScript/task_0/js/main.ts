interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'John',
  lastName: 'Doe',
  age: 20,
  location: 'Port Harcourt'
};

const student2: Student = {
  firstName: 'Jane',
  lastName: 'Smith',
  age: 22,
  location: 'Lagos'
};

const studentsList: Student[] = [student1, student2];

function renderTable(students: Student[]): void {
  const table = document.createElement('table');
  const header = table.createTHead();
  const headerRow = header.insertRow(0);
  headerRow.insertCell(0).textContent = 'First Name';
  headerRow.insertCell(1).textContent = 'Location';

  const tbody = table.createTBody();
  students.forEach(student => {
    const row = tbody.insertRow();
    row.insertCell(0).textContent = student.firstName;
    row.insertCell(1).textContent = student.location;
  });

  document.body.appendChild(table);
}

document.addEventListener('DOMContentLoaded', () => {
  renderTable(studentsList);
});

