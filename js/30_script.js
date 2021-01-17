const proto = {
  slogan: function() {
    return 'This Conpny is tha Best';
  },
  changName: function(newName) {
    this.name = newName;
  }
}
// This Creat Harry Object
/*
 const harry = Object.create(proto);
harry.name = "Harry";
harry.role = "Cyber Securty";
*/

// This also Creat Harry Object
const harry = Object.create(proto, {
  name: { value: "Harry", writable: true },
  role: { value: "Programar" }
});
harry.changName("Dhaval")
// console.log(harry);


// Creat a  Employee Constroctor
function Employee(name, salary, experience) {
  this.name = name;
  this.salary = salary;
  this.experience = experience;
}

//Slogan
Employee.prototype.slogan = function() {
  return `This Compny is tha Best Regards, ${this.name}`;
};

let harryObj = new Employee("Harry",5600,17);
console.log(harryObj.slogan());

//Programar
function Programar(name,salary,experience, lenguage) {
  Employee.call(this,name,salary,experience);
  this.lenguage = lenguage;
  
}

// Inharit tha peototype
Programar.prototype = Object.create(Employee.prototype);

// Manual set Constroctor
Programar.prototype.constroctor = Programar;

let rohan = new Programar("Rohan",5262,6,"JavaScript");
console.log(rohan);