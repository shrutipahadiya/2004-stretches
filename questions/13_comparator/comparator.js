//write a func that takes two arg... selectKey and obj

const comparator = (selectKey, obj) => {
   
        if (selectKey == 'age') {
            obj.sort(function (a, b) {
                return a.age - b.age;
            });

        } else if (selectKey == 'name') {
          //  console.log("for name key case ===")
            obj.sort(function (a, b) {
                let ln1 =  a.name.split(" ")[1];
                let ln2 = b.name.split(" ")[1];
                if (ln1 < ln2) {
                    return -1;
                  }
                  if (ln1 > ln2) {
                    return 1;
                  }
                   return 0;
                
            });
        }else{
            if (!obj.hasOwnProperty(selectKey)) {
                return "incorrect key";
            } 
        }
       return obj;
    };

module.exports = { comparator };
