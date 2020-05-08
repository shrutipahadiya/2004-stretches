// Create a class called DiceRoller
// It should contain a roll method and a
// history property which outputs all of the previous rolls

class DiceRoller {
  //YOUR CODE
  constructor(noOfSides,noOfDice){

    if(noOfSides < 0 || noOfDice == 0 || typeof noOfSides == 'string' || 
      typeof noOfDice == 'string' || noOfSides == undefined || noOfDice == undefined){
          throw "invalid number of sides or total dice ";
    }
    this.noOfSides = noOfSides;
    this.noOfDice = noOfDice;
    this.history = [];
    

  }
  
  randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  

roll(){
   let diceRoll = [];
for(let i=0;i<this.noOfDice;i++){
    let rollValue = this.randomInteger(1,this.noOfSides);
      diceRoll.push(rollValue);
    
}
//console.log(diceRoll);
this.history.push(diceRoll);
return diceRoll;

}


}

module.exports = { DiceRoller };
