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
const playBtn = document.getElementById('play');
const resultSection = document.getElementById('game-result');
const sumParagraph = document.getElementById('total');
const winnerParagraph = document.getElementById('winner-declaration');

// ° Other elements
const min = 1;
const max = 5;

const victory = 'Hai vinto!';
const defeat = 'Hai perso!';

// ° Collego eventi a Play Button
playBtn.addEventListener('click', function() {

    // ° Prendo Gamer Number e genero Cpu Number
    const cpuNumber = randomNumber(min, max);
    const gamerNumber = parseInt(numbField.value);
    const chooseValue = chooseField.value;

    // & Validazione Gamer Number
    if (gamerNumber <= 0 || gamerNumber > 5 || !gamerNumber) {
        alert('Numero non valido, inserisci un numero da 1 a 5');
    } else {
                
        let sum = cpuNumber + gamerNumber;
        
        // ° Determino il vincitore e stampo in pagina
        switch(chooseValue) {
            case 'odd':
                if (!isEven(sum)){
                    winnerParagraph.innerText = victory;
                    winnerParagraph.classList.add('dotted-bord');
                } else if (isEven(sum)){
                    winnerParagraph.innerText = defeat;    
                    winnerParagraph.classList.remove('dotted-bord');      
                }
                break;
            case 'even':
                if (isEven(sum)){
                    winnerParagraph.innerText = victory;
                    winnerParagraph.classList.add('dotted-bord');
                } else if (!isEven(sum)) {
                    winnerParagraph.innerText = defeat;
                    winnerParagraph.classList.remove('dotted-bord');   
                }
                break;
        }

        resultSection.classList.add('visible');

    cpuParagraph.innerText = 'Il computer ha giocato:' + ' ' + cpuNumber;
    sumParagraph.innerText = 'Il totale è:' + ' ' + sum;

    }    
})

// ° RANDOM NUMBER FUNCTION
function randomNumber(min, max) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
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


