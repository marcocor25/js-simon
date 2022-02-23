// MESSAGGIO DI BENVENUTO
alert(`
Ciao, oggi facciamo un gioco!

Ti mostrerò 5 numeri, tu li dovrai tenere a mente, per poi reinserirli.
Alla fine ti dirò se li hai indovinati tutti oppure no.

Sei pronto/a? :)
`);

// ARRAY CHE CONTERRÀ I NUMERI RANDOM
const arrayNumber = [];
console.log(arrayNumber);

for (let i = 0; i < 5; i++) {

    // FUNZIONE PER GENERARE I NUMERI RANDOM
    function randomNumber(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    // VARIABILE PER I NUMERI RANDOM
    const numeriRandom = randomNumber(1, 99);
    console.log(numeriRandom);

    arrayNumber.push(numeriRandom);
}

// FUNZIONE CHE MOSTRA I NUMERI GENERATI CON 1S DI DELAY
setTimeout(tuoiNumeri, 1000);

function tuoiNumeri() {
alert(`Questi sono i tuoi numeri:

${arrayNumber}

Tienili a mente per 30 secondi!
`);
}

// FUNZIONE CHE CHIEDE I NUMERI GENERATI DOPO 30S
setTimeout(chiediNumeri, 30000);

function chiediNumeri() {
    prompt('Quali erano i 5 numeri?')
}

console.log(chiediNumeri);