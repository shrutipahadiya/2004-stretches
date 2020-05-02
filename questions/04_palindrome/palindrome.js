/* Given a string, determine if it is a palindrome */
/* A palindrome is a word, phrase, or sequence that reads the same backward as forward, e.g., madam, or racecar */

const validPalindrome = (str) => {
  let len="";
  if(typeof str == 'string'){
    len  = str.length;
  }else{
      len = str.toString().length;
  }
  //console.log("len == "+len);
  //let len = str.length;
  let isPalindrome = false;
  
 for(let i = 0;i<=len/2;i++){ //abba // 4 
    if(str[i] != str[len-1-i]){
      isPalindrome = false;
    }else{
      isPalindrome = true;
    }
 }
 return isPalindrome;
};

module.exports = { validPalindrome };
