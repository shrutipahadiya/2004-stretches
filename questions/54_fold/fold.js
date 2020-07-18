const fold = (arr,num) => {
  //YOUR CODE HERE
  let outputArr = [];
  let mid = Math.floor(arr.length/2);
  console.log("arr length is ",arr.length);
  console.log("mid is ",mid);
  if(Array.isArray(arr) && typeof num === 'number'){
    let sumL=0;
    let sumR=0;
    for(let i=0;i<mid;i++){
      sumL = sumL+arr[i];
    }
    outputArr.push(sumL);
    for(let i=arr.length-1;i>=mid;i--){
      sumR = sumR+arr[i];
    }
    outputArr.push(sumR);
    console.log("outputArr --- ",outputArr);
    return outputArr;
  }
  // else{
  //   return 
  // }
      
};

module.exports = fold;
