//Write a function that takes a list of strings and prints them
// one per line, in a rectangular frame.
// ********
// * Any  *
// * Gun  *
// * Can  *
// * Play *
// ********

const movieposter = (arr) => {
  //write code here
  let ans = "***********\n";
  if(arr.length <=0){
    throw "invalid length";
  }else{
    for(let i=0;i<arr.length;i++){
        ans = ans+"* ";
        ans = ans+arr[i];
        ans = ans+" *\n";
       if(i == arr.length-1) {
         ans = ans+"***********"
       }
    }
  }
  console.log(ans)
  return ans;
};

module.exports = { movieposter };
