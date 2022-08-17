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

function deletLast() {
    let result = document.getElementById("resultArea").innerHTML;
    document.getElementById("resultArea").innerHTML = result.substring(
        0,
        result.length - 1
    );
}

function percentage() {
    let result = document.getElementById("resultArea").innerHTML;
    console.log(result);
    let myne = document.getElementById("resultArea").innerHTML = eval(result) / 100

}