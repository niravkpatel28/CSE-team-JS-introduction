// console.log(this); // window
// constructor function
// create new objects
function Person(name, team) {
  // function scope
  this.name = name;
  this.team = team;
  //   console.log("Inside the function Person", this); // object
}

// object --> reference --> poinitng to a memory location
const random = new Person("random name", "random team");
// adding more properties
random.country = "India ";

random.hobbies = ["Cycling", "movies", "books"];

random.address = {
  area: "Virar",
  pin: 401303,
};

console.log("created object", random);
