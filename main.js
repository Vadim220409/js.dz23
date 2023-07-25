const numbers = Array.from(document.querySelectorAll('.numeric-button'));
const result = document.querySelector('.calculate-line');
const operationButtons = document.querySelectorAll('.operation-button');
const buttonWide = document.querySelectorAll(".button-wide");

function removeZeros(str) {
    while (str.startsWith('0')) {
        str = str.slice(1);
    }
    return str;
}

function numKeyHandler(event) {
    result.textContent += event.target.textContent;
    result.textContent = removeZeros(result.textContent);
}

function operationKeyHandler(event) {
    const operationRegex = /[+\.\-*/]/;
    const lastCharacter = result.textContent;
    if (operationRegex.test(lastCharacter)) {
        return;
}
    result.textContent += event.target.textContent;
}

numbers.forEach(key => {
    key.addEventListener('click', numKeyHandler);
});

operationButtons.forEach(key => {
    key.addEventListener('click', operationKeyHandler);
});


function calculate(){
    
}

