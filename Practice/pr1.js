


// var studentName=prompt ("Enter Your Name")
// var quiz_1 = parseInt( prompt ("Enter quiz1 Mark"))
// var quiz_2 = parseInt( prompt ("Enter quiz2 mark"))
// var total=quiz_1+quiz_2
// console.log ("hello", studentName, "your quiz total is:", total)
// Class Part. Task#1
// --------------------------
//   Using input textboxes, capture the following from the user:
//     - Name
//     - # of Credits Completed
//     - # of Major Courses Completed

//   if # of credits completed is at least 100 and # of major courses completed are above 5
//                                           apply for 5000 taka rewards

// or, if # of credits completed is at least 80 and # of major courses copleted are above 3
//                                           apply for 3000 taka rewards

// otherwise, reward amout would be fixed at 2000 taka.
//  15% VAT applicable on rewards.

//  CALCULATE AND DISPLAY - Reward amt after payting vat along with Name inside a Paragraph.
function output(params) {
    
var name = document.getElementById("name").value;
var credits = parseInt( document.getElementById("credits").value);
var major= parseInt (document.getElementById("major").value);
// var reward=parseInt(dociment.getElementById('reward').value);
var vat= 1.15;

var gets;
var rewardAfterVAT;

    if( credits >=100 && major >5){
      gets=5000;
      rewardAfterVAT=gets*vat;
     
    }
    else if (credits >=80 && major>3){
      gets= 3000;
      rewardAfterVAT=gets*vat;
      
    }      
   else{ 
     gets=2000
     rewardAfterVAT=gets*vat;
   }
   
    document.getElementById("rewardss").innerHTML = `
    <br> <br> <br>hello <b> ${name} </b> - nice to know that your reward is: <b>${rewardAfterVAT}</b>`;
}
