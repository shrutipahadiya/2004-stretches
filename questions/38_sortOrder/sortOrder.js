/*
SortOrder takes an array of objects, a key to be sorted on 
and a key for the return value. 
*/

function sortOrder(arr,key,returnKey) {
  // YOUR CODE
 // let arr = [];
  arr.sort((a, b) => (a.key > b.key) ? 1 : -1);
  return arr;
}

module.exports = { sortOrder };
