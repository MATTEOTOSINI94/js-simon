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

// const numeriUtente= prompt("Inserisci i numeri appena visti ")
let numeriDaIndovinare = []
while (numeriDaIndovinare.length < 5) {
   let numero =  Math.round(Math.random() * 100)
   numeriDaIndovinare.push(numero)
}
alert(`Indovina questi numeri: ${numeriDaIndovinare}`)


// una volta chiuso l'alert darò 30 secondi all'utente per memorizzare i numeri
setTimeout(()=>{
    const numeriUtente= prompt("Inserisci i numeri appena visti separandoli da uno spazio")
    const numeriDigitatiUtente = numeriUtente.split(" ")
    confrontoNumeriUtente(numeriDigitatiUtente)
    },2000)



// creo un array con i numeri inseriti nell'alert




let arrayVuoto 
 
// devo creare un array vuoto e pushare all'interno di esso unicamente i numeri che l'utente ha digitato corrispondenti ai numeri da indovinare 
// se l'array resta vuoto signfica che l'utente non ha indovinato
// nessun numero se l'array vuoto ha un numero o due signfica che l'utente ha indovinato un x di numeri e tramite l'indice del mio array andrò a dire
// quanti numeri ha indovinato
function confrontoNumeriUtente(numeriDigitatiUtente) {

    arrayVuoto=[]

    for (let x = 0; x < numeriDaIndovinare.length; x++) {
        const singoloNumero = numeriDaIndovinare[x];
      
        if (numeriDigitatiUtente.includes(singoloNumero.toString())) {
            arrayVuoto.push(singoloNumero)
        } 
    }

    if (arrayVuoto.length > 0) {
        alert(`Hai indovinato ${arrayVuoto.length} numeri`)    
    }
    else{
        alert("Ritenta sarai più fortunato")
    }


     console.log(arrayVuoto)
}

