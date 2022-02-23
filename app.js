// MESSAGGIO DI BENVENUTO
alert(`
Ciao, oggi facciamo un gioco!

Ti mostrerò 5 numeri, tu li dovrai tenere a mente, per poi reinserirli.
Alla fine ti dirò se li hai indovinati tutti oppure no.

Sei pronto/a? :)
`);

// FUNZIONE PER GENERARE I NUMERI RANDOM
function randomNumbers(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// ARRAY CHE CONTERRÀ I NUMERI RANDOM
const arrayNumber = [];

do {
    const numbers = randomNumbers(1, 99);
    
    if(arrayNumber.includes(numbers) === false) {
        arrayNumber.push(numbers);
    }
} while (arrayNumber.length < 5);

console.log(arrayNumber);