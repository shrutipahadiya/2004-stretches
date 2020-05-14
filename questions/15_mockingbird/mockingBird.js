// repeater runs a function n times and returns an array of its outputs
const repeater = (func, n) => {
  // YOUR CODE
  let arr = [];
  console.log(n);
 for (let i = 0; i < n; i++) {
    arr.push(func())
  }
 // console.log(arr)
  return arr;
};

// see test specs to complete this stretch

module.exports = { repeater };
