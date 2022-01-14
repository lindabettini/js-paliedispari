/*
todo - Palidroma -
todo .Chiedere all’utente di inserire una parola
todo .Creare una funzione per capire se la parola inserita è palindroma
*/

// ° Chiedo parola all'utente
const userWord = prompt('Inserisci una porola');
console.log(`parola inseria da utente è: ${userWord}`)

// ° La giro al contrario
let reverseUserWord = '';

for (let i = userWord.length - 1; i >= 0; i--) {
    reverseUserWord += userWord.charAt(i); 
}
console.log(`parola al contrario è: ${reverseUserWord}`);

// ° FUNZIONE IS PALINDROMA
function isPalindroma(word, reverseWord) {
    if (word === reverseWord) {
    console.log('la palora è palindroma!');
    return true;
    } 
    console.log('la palora è NON palindroma!');
    return false;
}

// ° Evoco funzione
isPalindroma(userWord, reverseUserWord);
