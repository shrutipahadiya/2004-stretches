const fizzBuzz = (len) => {
  //YOUR CODE HERE
  let arr = [];
  if(typeof len == 'string' || typeof len < 0 || typeof len != 'number'){
    throw "invalid input"
  }else{
    for(let i=0;i<len;i++){
    if(i % 3 == 0 && i%5 == 0 ){

      arr.push("FizzBuzz")
  }else if(i % 3 == 0){
      arr.push("Fizz")
    }else if(i % 5 == 0 ){
      arr.push("Buzz")
    }else{
      arr.push(i)
    }
  }
}
  return arr;
};
module.exports = { fizzBuzz };
