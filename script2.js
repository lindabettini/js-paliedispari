/*
todo - Pari e Dispari -
todo . L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
todo . Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
todo . Sommiamo i due numeri
todo . Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione).
todo  Dichiariamo chi ha vinto.
*/

// ° HTML ELEMENTS
const chooseField = document.getElementById('choose');
const numbField = document.getElementById('gamer-number');
const cpuParagraph = document.getElementById('cpu-number');
const winnerParagraph = document.getElementById('winner-declaration');
const playBtn = document.getElementById('play');


// ° Other elements
const min = 1;
const max = 5;
let sum = 0;

const cpuNumber = randomNumber(min, max);

// let gamerNumber = 0;

playBtn.addEventListener('click', function() {
    const gamerNumber = parseInt(numbField.value);
    console.log('gamer numb:', gamerNumber);
    console.log('cpu numb:', cpuNumber)
    sum = cpuNumber + gamerNumber;
    isEven(sum);
    console.log(sum);

    const chooseValue = chooseField.value;

    switch(chooseValue) {
        case 'odd':
            if (!isEven(sum)){
                console.log('hai vinto!');
            } else if (isEven(sum)){
                console.log('hai perso!');            }
            break;
        case 'even':
            if (isEven(sum)){
                console.log('hai vinto!');
            } else if (!isEven(sum)) {
                console.log('hai perso!');
            }
            break;
    }
})

// ° RANDOM NUMBER FUNCTION
function randomNumber(min, max) {
    const randomNumber = Math.floor(Math.random() * (max - min)) + min;
    return randomNumber;
}

// ° IS EVEN FUNCTION
function isEven(number) {
    if (number % 2){
        return false;
    } else if (number % 2 === 0){
        return true;
    }
}


