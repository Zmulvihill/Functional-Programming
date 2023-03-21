//Return Part of an Array Using the slice Method
function sliceArray(anim, beginSlice, endSlice) {
    // Only change code below this line
  return anim.slice(beginSlice, endSlice);
  
    // Only change code above this line
  }
  
  const inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
  sliceArray(inputAnim, 1, 3);
  
  console.log(sliceArray(["Cat", "Dog", "Tiger", "Zebra", "Ant"], 1, 3))
  console.log(sliceArray(["Cat", "Dog", "Tiger", "Zebra", "Ant"], 0, 1))
  console.log(sliceArray(["Cat", "Dog", "Tiger", "Zebra", "Ant"], 1, 4))