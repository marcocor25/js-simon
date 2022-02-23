// MESSAGGIO DI BENVENUTO
alert(`
Ciao, oggi facciamo un gioco!

Ti mostrerò 5 numeri, tu li dovrai tenere a mente, per poi reinserirli.
Alla fine ti dirò se li hai indovinati tutti oppure no.

Sei pronto/a? :)
`);

// FUNZIONE PER GENERARE I NUMERI RANDOM
function getRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// ARRAY CHE CONTERRÀ I NUMERI RANDOM
const randomNumbersArray = [];

do {
    const numbers = getRandomNumber(1, 99);

    if(randomNumbersArray.includes(numbers) === false) {
        randomNumbersArray.push(numbers);
    }
} while (randomNumbersArray.length < 5);

console.log(randomNumbersArray);

// ALERT CHE MOSTRA I NUMERI ESTRATTI
alert(`
Questi sono i tuoi numeri:

${randomNumbersArray.join(" - ")}
    
Tienili a mente per 30 secondi!
`);

// ARRAY CHE CONTERRÀ I NUMERI DEl GIOCATORE
const numeriUtente = [];

// ARRAY CHE CONTERRÀ I NUMERI INDOVINATI
const numeriIndovinati = [];

// FUNZIONE PER CREARE IL TIME-OUT
setTimeout(funzioneTimeOut, 3000);

function funzioneTimeOut() {

    do {

        // VARIABILE PER CHIEDE I NUMERI CHE L'UTENTE RICORDA
        const chiediNumeri = parseInt(prompt('Inserisci i numeri.'));

        numeriUtente.push(chiediNumeri);

        if (randomNumbersArray.includes(chiediNumeri) && !numeriIndovinati.includes(chiediNumeri)) {
            numeriIndovinati.push(chiediNumeri);
        }

    } while (numeriUtente.length < randomNumbersArray.length);

    console.log(numeriIndovinati);

    alert(`
    Hai indovinato ${numeriIndovinati.length} numeri su ${randomNumbersArray.length}!

    I numeri che hai indovinato sono: ${numeriIndovinati.join(" - ")}.
    `);
}