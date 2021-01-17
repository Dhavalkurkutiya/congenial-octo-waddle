class Employee {
  constructor(givenName, givenExperience, givenDivision) {
    this.name = givenName;
    this.experience = givenExperience;
    this.division = givenDivision;
  }
  slogan() {
    return `I am ${this.name} and this compny is tha Best`;
  }
  joingYear() {
    return 2020 - this.experience;
  }
  static add(a, b){ 
    return a + b;
  }
}

class Programar extends Employee {
  constructor(givenName, givenExperience, givenDivision, Programar,language,github) {
    super(givenName,givenExperience,givenDivision);
    this.language = language
    this.github = github;
  }
   favLeng(){
    if (this.language == "Python") {
      return "Python";
    }
    else{
      return "Javascript";
    }
  }
  static multiplay(a,b){
    return a + b;
  }
}
// harry = new Employee("Dhaval", 6, "A");
// console.log(harry.joingYear());
// console.log(Employee.add(23, 2));

rohan = new Programar("givenName",67,"givenDivision","Dhaval","Javascript","Dhavalkurkutiya");
console.log(rohan.favLeng());
console.log(Programar.multiplay(2,3));