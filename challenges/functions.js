console.log("\n\n+ functions.js +\n\n");
// ==== Callbacks ====
console.log("\n+ callbacks +\n\n");

/* Step 1: Create a higher-order function
 * Create a higher-order function named consume with 3 parameters: a, b and cb
 * The first two parameters can take any argument (we can pass any value as argument)
 * The last parameter accepts a callback
 * The consume function should return the invocation of cb, passing a and b into cb as arguments
 */
const consume = (a, b, cb) => cb(a, b);

/* Step 2: Create several functions to callback with consume();
 * Create a function named add that returns the sum of two numbers
 * Create a function named multiply that returns the product of two numbers
 * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
 */
const add = (a, b) => a + b;
const multiply = (a, b) => a * b;
const greeting = (first, last) => `Hello ${first} ${last}, nice to meet you`;

/* Step 3: Check your work by un-commenting the following calls to consume(): */
console.log(`consume(2, 2, add) -> ${consume(2, 2, add)}`); // 4
console.log(`consume(10, 16, multiply) -> ${consume(10, 16, multiply)}`); // 160
console.log(
  `consume("Mary", "Poppins", greeting) -> ${consume(
    "Mary",
    "Poppins",
    greeting
  )}`
); // Hello Mary Poppins, nice to meet you!

// ==== Closures ====
console.log("\n+ closures +\n\n");
// Explain in your own words why nestedfunction can access the variable internal.

// Explanation:

// When nestedFunction is called, it comes across a reference called internal.
// It checks for references to internal within its own scope, does not find it,
// and checks the scope of its parent. It finds the reference there, and uses it.
// The value of that reference is enclosed within nestedFunction through closure.
// nestedFunction is able to do this because with nested functions, values can be passed down.
// However, they cannot be passed upward. So if there was a variable defined within
// nestedFunction, myFunction would not be able to call it. This is called lexical scope.

const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  }
  nestedFunction();
}
myFunction();
