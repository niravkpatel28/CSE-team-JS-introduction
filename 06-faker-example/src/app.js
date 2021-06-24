const rootDiv = document.getElementById("root");
addButton = document.getElementById("addBtn");

addButton.addEventListener("click", () => {
  name = faker.name.firstName();
  console.log(name);
});

let name = faker.name.firstName();
const phoneNumber = faker.phone.phoneNumber();
console.log("Fake Name", name, phoneNumber);
