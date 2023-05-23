function add(){
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let result = num1 + num2;

    document.getElementById("result").textContent = "The result is: " + result;
}

function subtract(){
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let result = num1 - num2;

    document.getElementById("result").textContent = "The result is: " + result;
}

function multiply(){
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let result = num1 * num2;

    document.getElementById("result").textContent = "The result is: " + result;
}

function divide(){
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let result = num1 / num2;

    document.getElementById("result").textContent = "The result is: " + result;
}