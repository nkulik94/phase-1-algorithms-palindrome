function isPalindrome(word) {
  const letters = word.split('')
  const compare = []
  letters.map(letter => compare.unshift(letter))
  const wordBackwards = compare.join('')
  return word === wordBackwards
}

/* 
  Add your pseudocode here
  initialize empty array called compare

  divide string into array of individual letters

  iterate over string array and unShift each element into compare array

  combine both arrays back into strings

  compare both strings against each other
*/

/*
  Add written explanation of your solution here
  call .split() on string
  use .map() to put letters into compare array
  use .join() to turn them back to strings
  use equality operator to check if they match
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log(isPalindrome('hi'))
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
