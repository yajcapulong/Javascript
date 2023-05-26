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
