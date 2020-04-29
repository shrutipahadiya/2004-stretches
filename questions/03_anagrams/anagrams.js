// Given two strings check if they are anagrams of each other
// Return a boolean

const checkAnagrams = (str1, str2) => {
  let newStr = "";
  let isAnagram = false;

  if(str1.length != str2.length){
    isAnagram =  false;
  }else{
    newStr =  str1.split("").reverse().join("");
    if(newStr.localeCompare(str2)){
      isAnagram = true;
    }
    }
 return isAnagram;
}

module.exports = { checkAnagrams };
