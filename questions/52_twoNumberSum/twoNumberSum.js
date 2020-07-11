// Write a function that takes an array and a target sum
// This function should return an array of the target's sum pair or null if none found

//ie:: twoNumberSum([3, -2, 7, 29, 12, -5, 8, 10], 3) => [-5, 8]

//***Your solution should NOT include nested loops of any type***

//expect(twoNumberSum([5, -12, -6, 12, 5, 89, 9, -3], 83)).toEqual([-6, 89]);

const twoNumberSum = (arr,sum) => {
  //write code here
  let temp ;
  let newarr=[];
//let i=0;
 
  for(let i=0;i<arr.length;i++){
      if(sum-arr[i] == arr[i+1] && i<arr.length){
        newarr.push(arr[i]);
        newarr.push(arr[i+1]);
        break;
      }else{
        continue;
      }
  }
  console.log(newarr);
  return newarr;
};

module.exports = { twoNumberSum };
