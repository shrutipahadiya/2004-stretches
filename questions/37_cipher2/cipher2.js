const decypher = (str) => {
  //YOUR CODE HERE
  let ans = "";
  let arr=[];
  for(let i=0;i<str.length;i++){
   // console.log("1111111 ",typeof str[i]);
    if(typeof parseInt(str[i]) == 'number'){
     // console.log("22222222222")
      arr.push(str[i])
    }
  }
  console.log("arr ",arr)
  ans = String.fromCharCode(arr)
  console.log("ans ",ans)
  return ans;
};
module.exports = { decypher };
