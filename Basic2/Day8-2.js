var name1 = prompt("Enter your Name:");
var cgpa = parseFloat( prompt ("Enter your CGPA")) ;

if (cgpa >= 3.0){

    console.log("Dear",name1, "you qualify for scholarship");
}
else {
    console.log("Dear", name1, "sorry to inform that, you can't avail scholarship");
}