// Create a class called Iterator whose instances takes an array
// and method next() interates through it til complete

class Iterator {
 constructor(arr){
   if(!Array.isArray(arr)){
     throw new Error ("argument should be an array");
   }
   this.arr1 = arr;
  
 }


 next(){
  let count=0;
   //console.log(this.arr1.length);
   for(let i=0;i<this.arr1.length;i++){
     console.log("count is ",this.count);
     if(count==i){
    let obj ={};
    if(i = this.arr1.length){
      obj['done'] = true;
      obj['value'] =undefined;
    }else{
      obj['done'] = false;
      obj['value'] = this.arr1[i];
    }
    console.log(obj)
    if(count != this.arr1.length-1 ){
    count++;
    }   
   }
  }
 }
}

module.exports = { Iterator };
