// ============ Regular Expression ============
// 1: Basic function
// 2: MetaCharacter Symbol

let regex = /harry/;
regex = /^harry/; // [^] Start with match character
regex = /ry$/; // [$] End with match  character
regex = /h.rry/; // [.] Allow one  character
regex = /h*rry/; // [*] Match 0 or more character
regex = /ha?rryi?/; // [?] a ho ya na ho [or] i ho ya na ho
regex = /ha\*rry/; // [\character] a ho ya na ho // i ho ya na ho
let str = "ha*rry";
let result = regex.exec(str);
console.log(result);

if (regex.test(str)) {
  console.log(`Tha string ${str} match tha experion ${regex.source}`);
}
else{
  console.log(`Tha string ${str} does not match tha experion ${regex.source}`);
  
}