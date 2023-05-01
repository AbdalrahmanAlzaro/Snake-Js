function evaluateCode() {
    const userInput = document.getElementById("code-input").value;

    try {
        const result = eval(userInput);
        document.getElementById("output").innerHTML = result;
        document.getElementById("output").classList.remove("error");
    } catch (error) {
        document.getElementById("output").innerHTML = error.message;
        document.getElementById("output").classList.add("error");
    }
}