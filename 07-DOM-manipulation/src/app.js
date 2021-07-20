// generate Employee name
// add to array
// add to dom
// add event listener

const rootDiv = document.getElementById("root");
// rootDiv.classList.add("d-flex flex-row flex-wrap");
const addButton = document.getElementById("addBtn");
// array for holding all employee names
const Employees = [];
// Generate Employee Name
function Employee() {
  this.name = `${faker.name.firstName()} ${faker.name.lastName()}`;
  this.designation = faker.name.jobTitle();
  this.company = "Contentstack";
}

// create markup
// const createMarkup = (employee) => {
//   // take employee object and create a p with employee name
//   let markup = document.createElement("p");
//   markup.innerText = employee.name;
//   return markup;
// };

const createMarkup = (employee) => {
  const markup = `<div class="card d-flex flex-column justify-content-around card-margin" 
      style="width: 18rem">
      <div class="card-body align-center">
        <h5 class="card-title"> ${employee.name}</h5>
        <p class="card-subtitle"> ${employee.designation}</p>
        <h5 class="card-subtitle"> ${employee.company}</h5>
        <a href="#" class="btn btn-primary">
         More Details
        </a>
      </div>
    </div> `;
  return markup;
};

// Event listener for the button
const addEmployee = () => {
  // create new employee
  let employee = new Employee();
  // add to the employees array
  Employees.push(employee);
  // generate markup for employee card
  let card = createMarkup(employee);
  // add the card to root div
  rootDiv.innerHTML += card;
  //   rootDiv.appendChild(card);
};

// add Event listener to add Button
addButton.addEventListener("click", addEmployee);

// authorDetails:{
//   authorName: ,
//   pic: ,
//   designation:

// }
