function hasTargetSum(array, target) {
  //create an object to keep track of numbers we've already seen
  const seenNumbers = {}
    //iterate through each number in the array
  for (const number of array){
    //for current num, identify a complement that adds to the target (comp=target-num)
    const complement = target - number
    //check if any key on our object is the complement
    //if so, return true
    if (complement in seenNumbers) return true;
    //otherwise, add that number to the object
    seenNumbers[number] = true;
    }
//if end of array is reached, return false
  return false
} 

/* 
  Write the Big O time complexity of your function here
  O(n)
*/

/* 
  Add your pseudocode here
  array variable with numbers inside
  iterate through each number and subtract each number from target
  if the difference is found in the array, return true
  else, return false
*/

/*
  Add written explanation of your solution here
  first set an array with numbers inside 
  function returns true if any pair of the numbers in the array return true when passed with the target number otherwise returns false 
  hasTargetSum contains method to check sum of every possible pair of numbers
  
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
