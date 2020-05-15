// Given a number of rows n, print out Floyd's Triangle
// Example:
//  input: n = 3
//  output:
//  1
//  23
//  456

const floydsTriangle = n => {
  
    let num =1;
    let ans ="";
    for(let i=1;i<=n;i++){ //3
                for(let j=1;j<=i;j++){
             ans = ans+num
             ans = ans+'\n' 
               // console.log(num)
                num ++
             }  
                
 }
 console.log(ans);
   
    return ans;
 };

module.exports = { floydsTriangle };
