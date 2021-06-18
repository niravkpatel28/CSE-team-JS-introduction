// name
// inputs ==> arguments
// ouput--> return type
function printAge(birthYear) {
  // hw how to get current year ==> Date Object
  return 2021 - birthYear;
}

// console.log(printAge(1990)); // passing function printAge as an argument
// arrow functions
const printAgeEs6 = (birthYear) => {
  return 2021 - birthYear;
};
// keyword this ...

printAge(1990); // birthYear = 1990
