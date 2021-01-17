//Pretend that this response is coming  from tha server
const students = [
  { name: "Harry", subject: "Javascript" },
  { name: "Dhaval", subject: "Python" }
]

function enrollStudents(student, callback) {
  setTimeout(function() {
    students.push(student);
    console.log('Student has been enrolled');
    callback();
  }, 1000);
}

function getStudents() {
  setTimeout(function() {
    let str = "";
    students.forEach(function(student) {
      str += `<li>${student.name}</li>`;
    })
    document.getElementById('students').innerHTML = str;
    console.log('Students have been fatched');

  }, 5000);
}

let newStudentn = { name: "Sunny", subject: "Go" };
enrollStudents(newStudentn, getStudents);
getStudents();
// document.getElementById()