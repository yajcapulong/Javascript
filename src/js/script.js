function myFunction() {
    let text = "Apple, Banana, Kiwi";
    let sliced = text.slice(-4);
    document.getElementById("demo1").innerHTML = sliced;
} 

function pads(){
    let text = "5";
    let paddedStart = text.padStart(4,"0");
    let paddedEnd = text.padEnd(4,"0");
    document.getElementById("demo1").innerHTML = paddedStart;
    return document.getElementById("demo2").innerHTML = paddedEnd;
}

function chars(){
    let text = "Hatdog";
    let getChar = text.charAt(2);
    document.getElementById("demo1").innerHTML = getChar;
}

// generate a function that will return the last character of a string
function lastChar(){
    let text = "Hatdog";
    let lastChar = text.charAt(text.length-1);
    document.getElementById("demo1").innerHTML = lastChar;
}

function reversePhrase(){
    let text = document.getElementById("demo1").innerHTML;
    let splitText = text.split(" ").map((item) => item.split("").reverse().join("")).join(" ");
    return document.getElementById("demo2").innerHTML = splitText;
}