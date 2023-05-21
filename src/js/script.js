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

// find the largest number in an array
function largestNumber(){
    let numArray = [10, 7, 5, 8, 25, 19];
    let largestNum = Math.max(...numArray);
    document.getElementById("demo1").innerHTML = largestNum;
}

//Word Count
function wordCount(){
    let text = document.getElementById("demo1").innerHTML;
    let splitText = text.split(/[ ,]+/);
    let wordCount = {};
    
    splitText.forEach(function(word) {
        if (wordCount[word]){
            wordCount[word] ++;
        }else {
            wordCount[word] = 1;
        }
    });
    const demo2 = document.getElementById("demo2");
    for (const word in wordCount) {
        const count = wordCount[word];
        const wordCountElement = document.createElement("p");
        wordCountElement.textContent = `${word}: ${count}`;
        demo2.appendChild(wordCountElement);
      }
}
