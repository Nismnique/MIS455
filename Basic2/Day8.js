function process(){

    var courses = parseInt(document.getElementById("coursesBox").value) ;
    var fees = parseInt (document.getElementById("feesBox").value) ; 

    var total = courses * fees;
    var scholarship ; 
    var payable; 

    if (total > 50000){
        scholarship = total * .22;
        payable = total - scholarship;
    }
    else {
        scholarship = 0;
        payable = total; 

    }

     document.getElementById("scholarshipBox").value = scholarship; 
     document.getElementById("payableBox").value = payable; 

}