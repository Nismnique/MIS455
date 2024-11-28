var start = parseInt(prompt("Enter 1st number of the range"));
var end = parseInt(prompt("Enter last number of the range "));

evenCount = 0;
for (var a=start; a<=end; a++){
    if (a % 2 == 0){
        console.log ("next even number-", a);
        evenCount ++; 
       

    }
}
console.log("Total even numbers found - ", evenCount);