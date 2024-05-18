const textInput = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const resultDiv = document.getElementById("result");

const textLength = () => {
    return textInput.value.length;
}

const filteredText = () => {
    return textInput.value.replace(/[^a-zA-Z0-9]/gi, "");
};

const caseSensitive = () => {
    const text = filteredText();
    return text.toLowerCase();
}

const palindromeChecker = () => {
    const word = caseSensitive().split("");
    const indexOfMidEl = Math.floor(word.length/2);  
        for (let i = 0; i < indexOfMidEl; i++) {
            if (word[i] !== word[word.length - (i + 1)]) {
                return false;
            }
        }
        return true;
}
// const palindromeChecker = () => {
//     const text = caseSensitive();
//     const reversedText = text.split("").reverse().join("");
//     return text === reversedText;
// }

checkButton.addEventListener("click", () => {
    if (textLength() === 0) {
        alert("Please input a value");
    } else if (textLength() === 1) {
        resultDiv.innerHTML = `<p><strong>${textInput.value}</strong> is a palindrome.</p>`;
    } else {
        palindromeChecker() ? resultDiv.innerHTML = `<p><strong>${textInput.value}</strong> is a palindrome.</p>` : resultDiv.innerHTML = `<p><strong>${textInput.value}</strong> is not a palindrome.</p>`
    }
});