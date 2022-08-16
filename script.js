function input(num) {
    let number = document.getElementById("resultArea").innerHTML;
    document.getElementById("resultArea").innerHTML = number + num;
}

function calc() {
    if (input != "") {
        let result = document.getElementById("resultArea").innerHTML;
        document.getElementById("resultArea").innerHTML = eval(result);
    } else {
        document.getElementById("resultArea").innerHTML = "Error";
    }
}

function reset() {
    document.getElementById("resultArea").innerHTML = " ";
}

function del() {
    let result = document.getElementById("resultArea").innerHTML;
    document.getElementById("resultArea").innerHTML = result.substring(
        0,
        result.length - 1
    );
}

function percentage() {
    let num1 = document.getElementById("resultArea").innerHTML.value
    let num2 = appendOperation();
    let result = document.getElementById("resultArea").value = (num1 * 100) / num2 + "%";
    document.getElementById("resultArea").innerHTML = eval(result)


}