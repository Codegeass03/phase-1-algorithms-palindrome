function isPalindrome(word) {
  // Write your algorithm here
  const normWord = word.toLowerCase();
  const reversedWord = normWord.split("").reverse().join("");

  if(word === reversedWord){
    return true;
  }else{
    return false;
  }
}

/* 
  Add your pseudocode here
  1. Split the word into an array of characters
  2. Reverse the array of characters
  3. Join the reversed array back into a string
  4. Compare the original word with the reversed word
  5. Return true if they are the same, otherwise return false
*/

/*
  Add written explanation of your solution here
  1. The function takes a string input `word`.
  2. I declared a variable `reversedWord` that stores the reversed version of the input word.
  3. It uses the `split("")` method to convert the string into an array of characters.
  4. It then reverses the array using `reverse()`.
  5. Finally, it joins the reversed array back into a string using `join("")`.
  6. Used the if-statement to check if the original word is equal to the reversed word.
  7. If they are equal, it returns true, indicating that the word is a palindrome.
  8. If they are not equal, it returns false, indicating that the word is not a palindrome. 
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("rotator"));

  console.log("Expecting: false");
  console.log("=>", isPalindrome("rear"));
}

module.exports = isPalindrome;
