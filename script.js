let wordCloud = ["Hello", "hii", "how", "what", "you", "yourself", "name", "victory", "food", "lovely", "beautiful", "written", "where", "who", "awesome"];


let wordsContainerEl = document.getElementById("wordsContainer");

let userInputEl = document.getElementById("userInput");

let errorEl = document.getElementById("errorMsg");

let addBtn = document.getElementById("addBtn");


function createAndAddWordToWordCloud(word) {
    let randomFontSize = Math.ceil(Math.random() * 40) + "px";
    let wordEl = document.createElement("span");
    wordEl.textContent = word;
    wordEl.style.fontSize = randomFontSize;
    wordsContainerEl.appendChild(wordEl);
}


addBtn.onclick = function onAddWordToWordCloud() {

    let userEnteredWord = userInputEl.value;

    if (userEnteredWord !== "") {
        userInputEl.value = "";
        errorEl.textContent = "";

        createAndAddWordToWordCloud(wordCloud.push(userEnteredWord));
    } else {
        errorEl.textContent = "Please enter a word"
    }

}
