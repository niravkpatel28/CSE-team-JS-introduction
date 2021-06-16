// write a function to create an object
// name;
// team;
// constructor function .... constructing an object
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



const saqlain = {
    name: "",
    designation:""
    company:"./path to the logo", // this is common to all ... 
    profilePic: '../path to the image'
    socialMedia:{
        linkedIn:" link",
        instagram:" ",
        ... 
    }, 
    address:{
        stree:"",
        pin:""
        landmark: { 
            
        }
    }
}