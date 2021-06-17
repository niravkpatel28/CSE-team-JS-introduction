// write a function to create an object
// name;
// team;
// constructor function .... constructing an object

// this can be object or window
function createPerson(name, team) {
  // this variable. .--> new object that will be created
  this.name = name;
  this.team = team;
}

// const neemish = {} --> this
// what input == > name= "Neemish", team ="CSE ";
// take name == > neemish.name ;  this.name = "neemish "
// take team == > neemish.team ;  this.team = "CSE"

let neemish = new createPerson("Neemish C", "CSE");
let tanu = new createPerson("Tanu S.", "CSE");
console.log("New object", tanu);
