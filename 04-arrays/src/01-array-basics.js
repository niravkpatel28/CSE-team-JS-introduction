// create an array
// basic properties of array
// indexof
// includes
// length, push pop , slice, splice
let num = [10, 20, 30, 40, 50];

const isNumPresent = (value) => {
  let index = num.indexOf(value);
  if (index === -1) {
    // element is not present
    return false;
  }
  return true;
};

//CRUD operations
// CREATE , READ , UPDATE , DELETE
// add 60 to the array
// ADD
num.push(60);

// homework
// customFunctions for CRUD operations
// take an string array
// names = ["Tanu","Monica","Natascha","Priyanka","Neemish"]
// insert a new name at any index in the given array
// find if a name exists in the array
///  if it does delete the name
//    else print name is not present
// upadate a name at a given index

let names = ["Tanu", "Monica", "Natascha", "Priyanka", "Neemish"];

const insertName = (name, index) => {
  // check if the index is valid
  // if not print error and return
  // else continue
  //  push, splice
  names.splice(index, 0, name);
  return "Inserted in the array";
};
