function calculateGrade() {
    var marks = parseInt(document.getElementById("marks").value);

    
    if (marks >= 90) grade = "A";
    else if (marks >= 85) grade = "A-";
    else if (marks >= 80) grade = "B+";
    else if (marks >= 75) grade = "B";
    else if (marks >= 70) grade = "B-";
    else if (marks >= 65) grade = "C+";
    else if (marks >= 60) grade = "C";
    else if (marks >= 55) grade = "C-";
    else if (marks >= 50) grade = "D+"; 
    else if (marks >= 45) grade = "D";
    else grade = "F";

    console.log("Your grade is:", grade);
}