console.log("Done");
// Printed this coming from yha server as response
let name = "Harry";
name = undefined;
if (name != undefined) {
  throw new Error("This is not undefined");
} else {
  console.log("This in undefined");
}

try {
  // DhavalKurkutiya
  console.log("We are inside try block");
  functionDhaval ();
}
catch (error) {
  console.log("Are you oky ?");
  console.log(error.name);
  console.log(error.message);
}
finally {
  console.log("We will run this");
}