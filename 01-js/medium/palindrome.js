/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isLetter(char){
  return(/^[a-zA-Z]+$/.test(char))
}
function isPalindrome(str) {
  let newStr = str.toLowerCase();
   for (let i = 0, j = newStr.length - 1; i < j; i++, j--) {
        while (!isLetter(newStr[i]) && i < j) {
            i++;
        }

        while (!isLetter(newStr[j]) && i < j) {
            j--;
        }

        if (newStr[i] !== newStr[j]) {
            return false;
        }
    }

  return true;
}

module.exports = isPalindrome;
