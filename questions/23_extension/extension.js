//write a function that takes a function, and makes it callable with two invocations

const extensions = (func,a,b) => {
    console.log(typeof func)
    // console.log(typeof a)
    // console.log(typeof b)
    

   if(typeof func != 'function'){
        throw "func should be a function"

   }else{
        return func(a,b)  
   }
  


};

module.exports = { extensions };
