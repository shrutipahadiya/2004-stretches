/* 
There are N rooms and you start in room 0. 
Each room has a distinct number in 0, 1, 2, ..., N-1 
Each room may have some keys to access the next room.  

Initially, all the rooms start locked (except for room 0).
To open the next room, you must have already encountered 
the appropriate key for that room.

EXAMPLE OF ROOMS 
ex 1. 
[[1],[2],[3],[]] 

ex 2. 
[[1,3],[3,0,1],[2],[0]]

*/

const keysToRooms = (rooms) => {
  //YOUR CODE HERE
  let ans = false;
  console.log(rooms.length);  //4
  for(let i=0;i<rooms.length;i++){ //0,1,2,3
    let arr= rooms[i]; //[1]
    for(let j=i+1;j<=rooms.length;j++){    //1,2,3,4
        if(arr[i] > arr[j]){
          ans = false;
          return ans;
        }else{
          continue;
        }
    }
  }

  return ans;

};

module.exports = { keysToRooms };
