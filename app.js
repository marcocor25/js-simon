// FUNZIONE PER GENERARE I NUMERI RANDOM
function randomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// VARIABILE PER I NUMERI RANDOM
const numeriRandom = randomNumber(1, 99);
console.log(numeriRandom);