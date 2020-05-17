const arrayexchange = (arr1, arr2) => {

    if (Array.isArray(arr1) == false || Array.isArray(arr2) == false) {
        throw "Invalid argument"
    } else {
        const length1 = arr1.length;
        const length2 = arr2.length;
        const newArr = [];
        for (let i = 0; i < length1; i++) {
            newArr.push(arr1.pop());
        }
       // console.log("newArr ", newArr);
        for (let i = 0; i < length2; i++) {
            arr1.push(arr2.pop());
        }
      //  console.log("arr1 ", arr1);
        for (let i = 0; i < length1; i++) {
            arr2.push(newArr.shift());
        }
      //  console.log("arr2 ", arr2);
       // console.log("arr1", arr1)
     //  console.log("arr2", arr2)
    }
};

module.exports = { arrayexchange };