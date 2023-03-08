//fixed one
function addNums(...nums) {
  if (!nums.every((num) => Number.isInteger(num) ))
    throw "All arguments must be numbers.";
  return nums.reduce((prev, curr) => prev + curr);
}
//need to fix ".isNumber" and the function name
function numberAdder(...nums) {
  if (!nums.every((a) => Number.isNumber(a)))
    throw "All arguments must be numbers.";
  return nums.reduce((num1, num2) => num1 + num2);
}

console.log(addNums(1, 2, 3)); //> 6
console.log(addNums(4, 5)); //> 9
console.log(addNums(4, "5")); //> error All arguments must be numbers.
console.log(addNums(10, "B", 20)); //> error All arguments must be numbers.
