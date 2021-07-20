/**
 * what properties do you want in the employees
 * name: faker.name.firstName();
 * designation : faker.name.jobTitle();
 * company :Contentstack
 * create a function that can generate such data
 * return as new object every time you call it
 */

//start with no member
const MyTeam = [];

// Each time this function is called push that member in the MyTeam Array
function Employee() {
  this.name = faker.name.firstName();
  this.designation = faker.name.jobTitle();
  this.company = "Contenstack";
}

const createEmployeeCard = (employee) => {
  const card = ` <div class="card center-items align-center" style="width: 18rem">
        <div class="card-body">
          <h5 class="card-title">${employee.name} </h5>
          <h6>${employee.designation}</h6>
          <h6>Contenstack</h6>
          <a href="#" class="btn btn-primary">View Profile</a>
        </div>
      </div>`;
  return card;
};
// run when u click addEmployeeButton
const addEmployeeButton = document.getElementById("addBtn");
const rootDiv = document.getElementById("root");

const addEmployee = () => {
  // generate a new employee
  let employee = new Employee();
  // add that MyTeam Array
  MyTeam.push(employee);
  // create a card for employee
  let card = createEmployeeCard(employee);
  // add that to the HTML DOM
  // where do i add the card == inside root div
  rootDiv.innerHTML = rootDiv.innerHTML + card;
};

addEmployeeButton.addEventListener("click", addEmployee);
