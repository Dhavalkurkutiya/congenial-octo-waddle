console.log("Done");

async function Dhavalkurkutiya() {
  console.log("Inside Dhavalkurkutiya function");
  const response = await fetch('https://api.github.com/users');
  console.log("Before response");
  const users = await response.json();
  console.log("Users are resolve");
  return users;
  // return "Dhavalkurkutiya";
}
console.log("Before calling Dhavalkurkutiya");
let a = Dhavalkurkutiya();
console.log("After calling Dhavalkurkutiya");
console.log(a);
a.then(data => console.log(data));
console.log("Last line of this js file");