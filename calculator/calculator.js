document.getElementById("calcBtn").addEventListener("click", calculate);

function calculate() {
    let first = Number(document.getElementById("first").value);
    let op = Number(document.getElementById("operation").value);
    let second = Number(document.getElementById("second").value);
    let result;

    if (isNaN(first) || isNaN(second)) {
        document.getElementById("output").innerText = "Enter numbers";
        return;
    }

    if (op === 1) result = first + second;
    else if (op === 2) result = first - second;
    else if (op === 3) result = first * second;
    else if (op === 4) result = second !== 0 ? first / second : "Cannot divide by 0";
    else if (op === 5) result = first % second;
    else result = "Invalid Operation";

    document.getElementById("output").innerText = result;
}
