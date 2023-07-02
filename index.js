function hasTargetSum(array, target) {
  // Iterate through each element in the array
  for (let i = 0; i < array.length; i++) {
    const num1 = array[i];

    // Iterate through the remaining elements
    for (let j = i + 1; j < array.length; j++) {
      const num2 = array[j];

      // Check if the pair sums up to the target
      if (num1 + num2 === target) {
        return true;
      }
    }
  }
  // No pair found
  return false;
}
hasTargetSum([3, 8, 12, 4, 11, 7], 10)
/* 
 Quadratic Time
*/

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
