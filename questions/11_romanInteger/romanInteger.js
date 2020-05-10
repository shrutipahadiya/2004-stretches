//Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.
/*
Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000

I can be placed before V (5) and X (10) to make 4 and 9.  
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.
*/
/*
examples:
1 // I
2 // II
3 // III
4 // IV
1994 // MCMXCIV
*/

const romanInteger = (num) => {
  //YOUR CODE HERE
  let ans = "";
  num = 3549;
  let romanArr ={1:"I",4:"IV",5:"V",9:"IX",10:"X",40:"XL",50:"L",90:"XC",100:"C",400:"CD",
                    500:"D",900:"CM",1000:"M"};
   if (num <= 0 || num >= 5000) {
    throw "invalid number";
  } else {
    if(num >= 1000){
       num =  Math.floor(num/1000);
       console.log("num",num)
      ans = ans+
    }
   
   
    
    }
  
  
  console.log("ans is ",ans);
 // return ans;
};

module.exports = { romanInteger };
