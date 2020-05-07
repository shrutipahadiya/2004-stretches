// trim takes an object and removes any keys that have undefined or null values

const trim = obj => {
  // YOUR CODE
  let newObj = {};
  let keys = Object.keys(obj);
 keys.forEach(element => {
   //console.log("element is ",element);
   if(obj[element] != undefined || obj[element] != null){
      newObj[element] = obj[element];
   }
 });

 //console.log(newObj);
  return newObj;
};

module.exports = { trim };
