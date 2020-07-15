// Create a generator that squares its input until max limit
// Approved documentation: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*
// Pass the specs provided

//write your function here
const sqauredGen=(a,b)=>{
    let ans=1;
    let arr=[];
   
    for(let i=a+1;i<=b;i++){
        ans=i*i;
        arr.push(ans);
    }
    for(let i=0;i<arr.length;i++){
        if(arr[i] <= b ){
            return arr[i];
        }else{
            return true;
        }
    }

}
module.exports = { sqauredGen };
