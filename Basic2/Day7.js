//console.log ("testing js connection");

function doSomething (){

    var userName = document.getElementById("nameBox").value ; 
    var userEmail = document.getElementById("emailBox").value ; 

    console.log ("Your supplied Name: ", userName);
    console.log ("Your supplied email addres: ", userEmail);

    document.getElementById("contentArea").innerHTML = `
    <br> <br> <br>hello <b> ${userName} </b> - nice to know that your email address is: <b>${userEmail}</b>`;
    

}