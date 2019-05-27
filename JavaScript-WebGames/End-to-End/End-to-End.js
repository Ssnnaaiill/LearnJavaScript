word = "갈매기";
while(true) {
    newWord = prompt(word);
    if(word[word.length - 1] === newWord[0]) {
        word = newWord;
        document.write(word + '<br>');
    }
    else {
        alert('Wrong! Game Over.');
        break;
    }
}