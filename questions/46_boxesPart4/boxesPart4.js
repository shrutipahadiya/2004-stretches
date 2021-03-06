//Add two methods to this box class.

class Box {
  //Solution code for Boxes part 1-3
  constructor(color, capacity) {
    this.color = color;
    this.capacity = capacity;
    this.contents = [];
  }
  pack(col, cap) {
    if (this.contents.length !== this.capacity) {
      this.contents.push(new Box(col, cap));
    } else {
      throw new Error('Capacity Met!');
    }
  }
  unpack() {
    const result = [];
    if (!this.contents.length) {
      result.push(this.color);
    } else {
      result.push(this.color);
      for (let i = 0; i < this.contents.length; i++) {
        result.push(...this.contents[i].unpack());
      }
    }
    return result;
  }
  movingVan(dur) {
    return setTimeout(() => this.unpack(), dur);
  }
  //*****YOUR CODE STARTS HERE******

  expand(no,arr){
    for(let i=0;i<arr.length;i++){
      console.log(arr[i][0]);
      console.log(arr[i][1]);
        this.pack(arr[i][0],arr[i][1])
    }
  }

  loot(index){
    console.log(index);
    console.log(this.contents.length-1);
    if(index <= this.contents.length-1){
      return this.contents[index];
     } else{
          let i =  Math.random() * (this.contents.length - 0) + 0;
          return  this.contents[i];
        }
    }
  
}

module.exports = { Box };
