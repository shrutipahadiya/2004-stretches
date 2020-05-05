/*
write the zip function
zip([{x: 1}, {x: 2}]) => {x: 3}
zip([
  {x: 1, y: 2}, 
  {x: 2, z: 1},
  {z: 2, y: 1}]) => {x: 3, y: 3, z: 3}
*/

function zip(objs) {
  let result = {};
  for (let i = 0; i < objs.length; i++) { //4
    let keys = Object.keys(objs[i]);  //x
    //console.log(keys);
    //console.log(objs[i].length);
    if (keys.length > 0) {
      //console.log(keys.length);
      for (let j = 0; j < keys.length; j++) {

        let key = keys[j];
        // console.log(key);
        // console.log(objs[i][key]);

        if (result[key] == undefined) {
          // console.log("inside undefined");
          result[key] = objs[i][key];
          //console.log( result[key]);
        } else {
          result[key] = result[key] + objs[i][key];
        }
      }
    }

  }

  //console.log(result);
  return result;
}



module.exports = { zip };
