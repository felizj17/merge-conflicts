


function numberAdder(...nums) {
  if (!nums.every((a) => Number.isNumber(a)))
    throw "All arguments must be numbers.";
  return nums.reduce((num1, num2) => num1 + num2);

}

fn(1, 2, 3); //> 6
fn(10, "B", 20); //> error All arguments must be numbers.