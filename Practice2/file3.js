function greatest() {
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    var num3 = parseInt(document.getElementById("num3").value);

    var greatest = Math.max(num1, num2, num3);
    console.log("The greatest number among 3 inputs is:", greatest);
}