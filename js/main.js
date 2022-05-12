// Visualizzare in pagina 5 numeri casuali.
// Creo array da popolare
let randomNumbers = [];
// Genero per 5 volte un numero casuale
for (let i = 0; i < 5; i++) {
    let number = Math.floor(Math.random() * 10) + 1;
    randomNumbers.push(number);
}
console.log(randomNumbers);
// stampo array in pagina
let body = document.querySelector("#container");
body.append(randomNumbers);

// Da lì parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
let timer = 5000;
let userArray = [];
setTimeout(function() {
    //eseguo 5 volte ciclo per chiedere all'utente di inserire un numero
    for( let i = 0; i < 5; i++) {
        let userNumber = Number(prompt("Inserisci un numero"));
        console.log(userNumber);
        // Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati
        //SE tra i numeri generati casualmente è presente il numero inserito dall'utente
        if (randomNumbers.includes(userNumber)) {
            //stampo il numero dell'utente
            console.log("questi sono uguali", userNumber);
            //inserisco il suo numero in un array
            userArray.push(userNumber);
        }
        //stampo la quantità di numeri inseriti, cioè i numeri indovinati
        console.log("questa è la quantità", userArray.length);
    }
}, timer);


