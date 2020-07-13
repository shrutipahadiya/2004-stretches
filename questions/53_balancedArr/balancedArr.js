const balanced = (arr) => {
  //YOUR CODE HERE
  let sum=0;
  let index=0;
  for(let i=0;i<arr.length;i++){
    if(i > 0 || i<arr.length-1){
    for(let j=i+1;j<arr.length;j++){
       sum = sum+arr[j];
    }
    if(arr[i] == sum){
      index = i+1;
    }

  }
}
console.log(index);
return index;
};

module.exports = balanced;
