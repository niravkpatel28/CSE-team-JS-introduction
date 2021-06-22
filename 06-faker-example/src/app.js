const rootDiv = document.getElementById("root");
addButton = document.getElementById("addBtn");

addButton.addEventListener("click", () => {
  console.log("Button added");
});

const name = faker.name.firstName();
const phoneNumber = faker.phone.phoneNumber();
console.log("Fake Name", name, phoneNumber);
