function Person(name, team, year) {
  this.name = name;
  this.team = team;
  this.birthYear = year;
  // this ==> object
  // this.printName = function () {
  //   console.log("Welcome", this.name);
  // };
  this.getAge = function () {
    return 2021 - this.birthYear;
  };
  // hw
  this.__proto__.printName = function () {
    console.log("Print Name", this.name);
  };
}

const random = new Person("Random Raju", "random team", 2015);
const randomess = new Person("Random Raji", "Random Team 2 ", 2000);
console.log("objects", random, randomess);
// create separate printName, getAge functions for each object
