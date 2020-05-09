//write the splatter function

const splatter = () => {
  //write code here
  console.log("length ",arguments.length);
  let sum = 0;
  for(let i=0;i<arguments.length;i++){
    let keys = Object.keys(arguments[i]);
    console.log("keys ",keys);
    for(let j=0;j<keys.length;j++){
      sum = sum+arguments[i][j];
    }
  }
  console.log(sum);
  return sum;
};

module.exports = { splatter }; 
