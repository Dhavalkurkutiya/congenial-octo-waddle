//Pretend that this response is coming  from tha server
const students = [
  { name: "Harry", subject: "Javascript" },
  { name: "Dhaval", subject: "Python" }
]

function enrollStudents(student) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      students.push(student);
      console.log('Student has been enrolled');
      error = false;
      if (!error) {
        resolve();
      }
      else {
        reject();
      }
    }, 1000);
  })
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
enrollStudents(newStudentn).then(function() {
  getStudents();
}).catch(function() {
  console.log('Sum error accured');
});
getStudents();
// document.getElementById()