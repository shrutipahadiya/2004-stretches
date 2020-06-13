//YOUR CODE HERE
class Box{
    constructor(color,capacity){
        this.color = color;
        this.capacity = capacity;
        this.contents=[];
    }
  


pack(color,capacity){
    console.log("length is => ",this.contents.length)
    console.log("capacity is ",capacity);
    if(this.contents.length < capacity){
        this.contents.push(new Box(color,capacity))
    }else if(this.contents.length >= capacity){
        throw new Error ('capacity exceeded!');

    }
    }


unpack(){
    let arr = [];
     for(let i=0;i<this.contents.length;i++){
        console.log("i vlaue ",this.contents[i])
     }   
}

}
module.exports = { Box };
