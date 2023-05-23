function swapCase(){
    let text = document.getElementById("text").value;
    let result = "";
    for (let i = 0; i < text.length; i++){
        let char = text[i];

        if (char === char.toUpperCase()){
            result += char.toLowerCase();

        } else if (char === char.toLowerCase()) {
            result += char.toUpperCase();

        } else {
            result += char;
        }
    }
    document.getElementById("result").innerHTML = result;
}