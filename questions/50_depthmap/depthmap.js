//Your excavating a newly found archaeological site and need to track your depth
//Write a function to recursively "dig" through this object installing a depth key along the way
//return the object with it's depth indicated

const recordDepth = (obj) => {
  //write code here
  let newObj = {};
  if(typeof obj != 'object'){
    throw new Error ('invalid argument')
  }else{
    for (var property in obj) {
      console.log("property ",property);
      if (obj.hasOwnProperty(property)) {
          if (typeof obj[property] == "object"){
         // recordDepth(obj[property]);
         
      }else{
        newObj[property] = obj[property]
        newObj['depth'] = 
        console.log(property + "   " + obj[property]);
      }
  }
  }
};

module.exports = { recordDepth };
