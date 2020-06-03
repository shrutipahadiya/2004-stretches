//Write a function that takes an OBJ of nested elements
// and returns an OBJ of each nested route separeated by a forward ('/') and its end leaf value
//For example...
// const phonebookData = {
//   a: {
//     b: {
//       c: 12,
//     },
//   },
// };
// directory(phonebookData)=>{ 'a/b/c': 12 }

const directory = (obj) => {
  //code in here
 
  let ans ={};
  let str="";
 let keys = Object.keys(obj);
 console.log(keys);
 for(let i=0;i<keys.length;i++){
    if(obj[i] instanceof Object){
        str = str+obj[i]+"/";
    }else{
      ans[str] = obj[i];
    }
 }
 console.log("str is = ",str);
 console.log("ans is = ",ans);
  return ans;
};

module.exports = { directory };
