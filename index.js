function (...items) {
  if (!c.every((a) => Number.isNumber(a)))
    throw "All arguments must be numbers.";
  return items.reduce((a, b) => a + b);
}

fn(1, 2, 3); //> 6
fn(10, "B", 20); //> error All arguments must be numbers.