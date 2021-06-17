function Person(name, team, year) {
  this.firstName = name;
  this.team = team;
  this.birthYear = year;
  // this is the same function printName
  this.printIdenfication = printName; // passing the reference
  this.currentYear = year;
}

const year = 2021;
// two ways to use the same functionality
// printName()
// object.printIdentification ()
function printName() {
  console.log(this);
  console.log("Print name", this.firstName);
}

const random = new Person("Random", "CSe", 2015);
// this ? window
printName(); // hthis == window
random.printIdenfication(); //
