var numQuizzes = parseInt(prompt("How many quizzes did you take?"), 10);
var totalMarks = 0;

for (var i = 1; i <= numQuizzes; i++) {
  var mark = parseInt(prompt(`Enter the quiz mark:${i}`  ));
  totalMarks += mark;
}

var average = totalMarks / numQuizzes;
console.log("The average mark is:",average );
