//Pass Arguments to Avoid External Dependence in a Function
// The global variable
let fixedValue = 4;

// Only change code below this line
function incrementer(value) {
return value + 1
}
var differentValue = incrementer(fixedValue); // Should equal 5
console.log(fixedValue); // Should print 4