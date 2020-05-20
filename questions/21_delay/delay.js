const delay = (str, time) => {
  //Your code here
  return new Promise(() =>{
    setTimeout(console.log(str),time)

  })

};

module.exports = { delay };
