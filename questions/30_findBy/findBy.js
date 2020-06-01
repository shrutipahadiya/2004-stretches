const findBy = (arr,key,value) => {
  //YOUR CODE HERE
const found = arr.find(obj => obj.name==value || obj.type==value);
//console.log("found ",found);
return found;
};

module.exports = { findBy };
