function checkTemperature() {
    var temp = parseInt(document.getElementById("temperature").value);

    if (temp < 0) 
        console.log("Freezing weather");
    else if (temp <= 10) 
        console.log("Very Cold weather");
    else if (temp <= 20) 
        console.log("Cold weather");
    else if (temp <= 30) 
        console.log("Normal in Temp");
    else if (temp <= 40) 
        console.log("It's Hot");
    else 
    console.log("It's Very Hot");
}
