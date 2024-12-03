const readline = require("readline");

// Create interface for user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Function to perform calculations
function calculate(num1, num2, operation) {
  switch (operation) {
    case "add":
      return num1 + num2;
    case "subtract":
      return num1 - num2;
    case "multiply":
      return num1 * num2;
    case "divide":
      return num2 !== 0 ? num1 / num2 : "Division by zero is not allowed";
    default:
      return "Invalid operation";
  }
}

// Start the program
rl.question("Enter the first number: ", (input1) => {
  const num1 = parseFloat(input1);

  rl.question("Enter the second number: ", (input2) => {
    const num2 = parseFloat(input2);

    rl.question(
      "Enter the operation (add, subtract, multiply, divide): ",
      (operation) => {
        const result = calculate(num1, num2, operation.toLowerCase());
        console.log(`The result of ${operation} is: ${result}`);

        // Close the interface
        rl.close();
      }
    );
  });
});
