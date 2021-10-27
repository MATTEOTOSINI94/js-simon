// Descrizione:
// Un alert() espone 5 numeri generati casualmente.
// Da li parte un timer di 30 secondi.
// Dopo 30 secondi l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
// Consigli del giorno:
// * Pensate prima in italiano.
// * Dividete in piccoli problemi la consegna.
// * Individuate gli elementi di cui avete bisogno per realizzare il programma.


// creo un alert dove mostrerò i numeri da ricordarsi
alert("Indovina questi numeri: 1  2  3  4  5")
const numeriUtente= (prompt("Inserisci i numeri appena visti"))
const numeriDigitatiUtente = numeriUtente.split(" ")
console.log(numeriDigitatiUtente)
// una volta chiuso l'alert darò 30 secondi all'utente per memorizzare i numeri
// setTimeout(()=>{
    
//     },30000)


// creo un array con i numeri inseriti nell'alert
const numeriDaIndovinare = [1,2,3,4,5]
let arrayVuoto 
// devo creare un array vuoto  e confrontarlo con l'array di numeri da indovinare se l'array resta vuoto signfica che l'utente non ha indovinato
// nessun numero se l'array vuoto ha un numero o due signfica che l'utente ha indovinato un x di numeri e tramite l'indice del mio array andrò a dire
// quanti numeri ha indovinato
function confrontoNumeriUtente(elementi) {
  
    arrayVuoto=[]


    for (let x = 0; x < numeriDaIndovinare.length; x++) {
        const element = numeriDaIndovinare[x];
        console.log(element)
    

        if (numeriDigitatiUtente === numeriDaIndovinare[x]) {
            arrayVuoto.push(numeriDigitatiUtente)
            alert("bravo")
            console.log(arrayVuoto)
        }
    }

    
    

    
}

confrontoNumeriUtente(numeriDaIndovinare)