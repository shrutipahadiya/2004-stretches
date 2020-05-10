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
  // num = 3549;
   let qoutient = 1;
   let len = num.toString().length;
   //console.log("len ~~~~~ ",len);
   let romanArr = {
      1: "I", 4: "IV", 5: "V", 9: "IX", 10: "X", 40: "XL", 50: "L",
      90: "XC", 100: "C", 400: "CD", 500: "D", 900: "CM", 1000: "M"
   };
   if (num <= 0 || num >= 4000) {
      throw "invalid number";
   } else {
     for(let j=0;j<len;j++){
      if (num >= 1000) {
         qoutient = Math.floor(num / 1000);
         console.log("qoutient", qoutient)
         for (let i = 0; i < qoutient; i++) {
            ans = ans + "M";
         }
         num = num - 1000 * qoutient
      }

      if (1000 >= num && num  >= 900) {
         qoutient = Math.floor(num / 900);
         console.log("qoutient", qoutient)
         for (let i = 0; i < qoutient; i++) {
            ans = ans + "CM";
         }
         num = num - 900 * qoutient
      }

      //console.log("new num is ", num);

      if (900 >= num && num >= 500) {
         qoutient = Math.floor(num / 500);
         //console.log("qoutient", qoutient)
         for (let i = 0; i < qoutient; i++) {
            ans = ans + "D";
         }
         num = num - 500 * qoutient
      }

      // console.log("ans is ---> ",ans);
      // console.log("num is --->",num);

      if (500 >= num && num >= 400) {
         qoutient = Math.floor(num / 400);
        // console.log("qoutient", qoutient)
         for (let i = 0; i < qoutient; i++) {
            ans = ans + "CD";
         }
         num = num - 400 * qoutient
      }

      if (400 >= num && num >= 100) {
         qoutient = Math.floor(num / 100);
         //console.log("qoutient", qoutient)
         for (let i = 0; i < qoutient; i++) {
            ans = ans + "C";
         }
         num = num - 100 * qoutient
      }



      if (100 >= num && num >= 90) {
         qoutient = Math.floor(num / 90);
       //  console.log("qoutient", qoutient)
         for (let i = 0; i < qoutient; i++) {
            ans = ans + "XC";
         }
         num = num - 90 * qoutient
      }
      if (90 >= num && num >= 50) {
         qoutient = Math.floor(num / 50);
       //  console.log("qoutient", qoutient)
         for (let i = 0; i < qoutient; i++) {
            ans = ans + "L";
         }
         num = num - 50 * qoutient
      }
   

      if (50 >= num && num >= 40) {
         qoutient = Math.floor(num / 40);
        // console.log("qoutient", qoutient)
         for (let i = 0; i < qoutient; i++) {
            ans = ans + "XL";
         }
         num = num - 40 * qoutient
      }

      if (num >= 10 && num <= 40) {
       //  console.log("inside my case ===");
         qoutient = Math.floor(num / 10);
      //   console.log("qoutient", qoutient)
         for (let i = 0; i < qoutient; i++) {
            ans = ans + "X";
         }
         num = num - 10 * qoutient
      }

      
      // console.log("ans is --->>>> ",ans);
      // console.log("num is --->>>>",num);

      if (10 >= num && num >= 9) {
         qoutient = Math.floor(num / 9);
        // console.log("qoutient", qoutient)
         for (let i = 0; i < qoutient; i++) {
            ans = ans + "IX";
         }
         num = num - 9 * qoutient
      }

      
      if (9 >= num && num >= 5) {
         qoutient = Math.floor(num / 5);
        // console.log("qoutient", qoutient)
         for (let i = 0; i < qoutient; i++) {
            ans = ans + "V";
         }
         num = num - 5 * qoutient
      }

      if (5 >= num && num  >=4) {
         qoutient = Math.floor(num / 4);
        // console.log("qoutient", qoutient)
         for (let i = 0; i < qoutient; i++) {
            ans = ans + "IV";
         }
         num = num - 4 * qoutient
      }

      if (4 >= num && num >=1) {
         qoutient = Math.floor(num / 1);
        // console.log("qoutient", qoutient)
         for (let i = 0; i < qoutient; i++) {
            ans = ans + "I";
         }
         num = num - 1 * qoutient
      }

   }
   }

   //console.log("ans is ", ans);
    return ans;
};





module.exports = { romanInteger };
