//your Node code here...
var inputArray = [1,2,3,4,5,6,7,8,9];
function even(){
  var oddsArray  = [];
   for(let i of inputArray ){
       if(i%2 === 1){
           oddsArray.push(i);
       }
   }
   console.log(oddsArray)
}

function odd(){
    var evenArrays  = [];
    for(let i of inputArray ){
        if(i%2 === 0){
            evenArrays.push(i);
        }
    }
    console.log(evenArrays);
}

console.log('start');
setTimeout(even, 0);
setImmediate(odd);
console.log('end');