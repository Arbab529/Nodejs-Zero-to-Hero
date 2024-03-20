const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter username: ", (name) => {
  console.log(name);
  rl.close();
});
rl.on("close", () => {
  console.log("Thank You!");
  process.exit(0);
});
