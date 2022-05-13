// Visualizzare in pagina 5 numeri casuali.
// Creo array da popolare
let randomNumbers = [];
// Genero per 5 volte un numero casuale che non si ripeta
let body = document.querySelector("#container");
for (let i = randomNumbers.length; i < 5; i++) {
    let number = Math.floor(Math.random() * 20) + 1;
    if (!randomNumbers.includes(number)) {
        randomNumbers.push(number);
        //creo un div per ogni numero del mio array
        let element = document.createElement("div");
        element.classList.add("numbers");
        element.append(randomNumbers[i]);
        body.append(element);
    } else {
        i = randomNumbers.length - 1;
    }
}
// stampo array in pagina
let delay = document.querySelector(".result-box")
let result = document.createElement("div");
delay.append(result);
let score = document.createElement("div");
delay.append(score);
// Da lì parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
let timer = 30000;
let view = 29000;
let userArray = [];

setTimeout(function () {
    body.style.display = "none";
}, view);
setTimeout(function () {
    //eseguo 5 volte ciclo per chiedere all'utente di inserire un numero
    for (let i = 0; i < 5; i++) {
        let userNumber = Number(prompt("Inserisci un numero da 1 a 20"));
        console.log(userNumber);
        // Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati
        //SE tra i numeri generati casualmente è presente il numero inserito dall'utente
        if (randomNumbers.includes(userNumber) && !userArray.includes(userNumber)) {
            //inserisco il suo numero in un array
            userArray.push(userNumber);
            //stampo il numero dell'utente
            result.innerHTML = (`numeri indovinati:${userArray}`);
        }
    }
    //stampo la quantità di numeri inseriti, cioè i numeri indovinati
    score.innerHTML += (`ne hai indovinati ${userArray.length} su 5`);
    body.style.display = "block";
}, timer);


