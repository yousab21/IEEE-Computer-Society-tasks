//task :
// ### 1️⃣ **Write a function `repeatLetters()` that takes a word and a number.**

// The function should return a new word where **each letter is repeated** *number* times.

// - Throw an error if the input is invalid (number < 1 OR not a string).
// - Use **only one loop**.

//my solution :
function repeatLetters(word, number) {
  if (typeof word !== "string") {
    throw "Invalid input : first argument must be a string";
  }
  if (!Number.isInteger(number) || number < 0) {
    throw "Invalid input : second argument must be a non-negative number";
  }

  let result = "";
  for (let i = 0; i < word.length; i++) {
    result = result + word[i].repeat(number);
  }

  return result;
}
