// cb will be a function
const demoCallback = (cb) => {
  // prints a name and then does something...
  // cb callback
  console.log("Welcome to callback ");
  // does something
  cb();
};

const printName = () => {
  console.log("Welcome to CSE team ");
};

const printDate = () => {
  let d = new Date();
  console.log("Date ", d);
};

demoCallback(printName); // -- cb is printName
demoCallback(printDate); // cb is printDate
