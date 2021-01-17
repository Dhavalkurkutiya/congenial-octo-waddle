// ============ Regular Expression ============
// 1: Basic function
// 2: MetaCharacter Symbol

// 3: Character sets
// 4: Quantifiers
// 5: Grupings

let regex = /h[a-z]rry/;// [a-z] Character allowed
regex = /h[art]rry/ // [art] yes of art
regex = /h[^etc]rry/; // [^atc]  Not of etc
regex = /h[^etc]rr[rty]/;
regex = /h[a-zA-Z]rr[yu0-9][a-z]/;

//4: Quantifiers
regex = /har{2}y/ // r{2} Excect li 2 Time
regex = /har{0,2}y/ // {0,2} 0,1,2

// 5: Grupings
regex = /(har){2}/
regex = /(har){2}([0-9]r){3}/
const str = "harhar1r2r3r bhai";
let result = regex.exec(str);
console.log(result);

if (regex.test(str)) {
  console.log(`Tha string ${str} match tha experion ${regex.source}`);
}
else{
  console.log(`Tha string ${str} does not match tha experion ${regex.source}`);
  
}