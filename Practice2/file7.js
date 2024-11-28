function check() {
    var char = document.getElementById("character").value.toLowerCase();

    if ("aeiou".includes(char)) {
        console.log("The character is a vowel.");
    } else {
        console.log("The character is a consonant.");
    }
}
