/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  if(str1.length != str2.length) return false;

  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();
  const charCount1 = {};
  const charCount2 = {};

  for(x of str1){
    charCount1[x] = (charCount1[x] || 0) + 1;
  }
   for(x of str2){
    charCount2[x] = (charCount2[x] || 0) + 1;
  }

  for(let x in charCount1){
    if(charCount1[x] !== charCount2[x]){
      return false;
    }
  }
  return true;

}

module.exports = isAnagram;
