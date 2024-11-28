var totalQ = parseInt(prompt("how many Quizzes were taken?"));
var sum = 0;
var avg;
var i;
for (i=1 ;i<=totalQ; i++){
      var currentQuiz = parseFloat(prompt (`Enter marks of Quiz # ${i}`));
    sum += currentQuiz;
    // sum = sum + currentQuiz; 
}
avg = sum / totalQ;
console.log ("Your quiz average: ", avg);