let count = 0;
let counter = document.getElementById("counter");

function incrementCount() {
  count = count + 1;
  console.log("Count", count);
  displayCount();
}

function decrementCount() {
  count = count - 1;
  console.log("Count", count);
  displayCount();
}

const displayCount = () => {
  counter.innerText = count;
};
