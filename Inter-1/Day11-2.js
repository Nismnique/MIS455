function output() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);

    if (num1 > num2) {
        console.log("The greater number is:", num1);
    } else if (num2 > num1) {
        console.log("The greater number is:", num2);
    } else {
        console.log("Both numbers are equal.");
    }
}

// ADD LOOP

