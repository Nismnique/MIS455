
// var num1 = parseInt(prompt("input a number 1:").value);
// var num2 = parseInt(prompt("input a number 2:").value);
// var avg;
// var i;
// Prompt user for start and end values
// var start = parseInt(prompt("Enter the starting number (5): "));
// var end = parseInt(prompt("Enter the ending number (100): "));
// if( start<5 || end>100){
//     console.log("Please enter the correct values: start = 5 and end = 100.");
//     return 0;
// }



// var evenNumbers=[];
// var sum = 0;
// var count= 0;   
    
// for (var i = start ; i < end; i++) {
        
//         sum += i;
//         count ++;
//        if(i % 2 === 0) {evenNumbers.push(i)}
//     }       
// var average = sum / count;
//     console.log("Average of numbers:", average);
//     console.log("Even numbers:", evenNumbers);
   
var start = parseInt(prompt("Enter the starting number (5): "));
var end = parseInt(prompt("Enter the ending number (100): "));

if (start !== 5 || end > 100) {
    alert("Please enter the correct values: start = 5 and end = 100.");
} else {
    var evenNumbers = [];
    var sum = 0;
    var count = 0;

    for (var i = start; i <= end; i++) {
        sum += i;
        count++;
        if (i % 2 === 0) {
            evenNumbers.push(i);
        }
    }

    var average = sum / count;
    console.log("Average of numbers:", average);
    console.log("Even numbers:", evenNumbers);
}

