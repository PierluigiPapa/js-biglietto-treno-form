// Scrivere un programma che chieda all’utente:
// - Il numero di chilometri da percorrere
// - Età del passeggero
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
// - il prezzo del biglietto è definito in base ai km (0.21 € al km)
// - va applicato uno sconto del 20% per i minorenni
// - va applicato uno sconto del 40% per gli over 65.

// MILESTONE 1:
// Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console.

// MILESTONE 2:
// Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo.
// Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo). Questo richiederà un minimo di ricerca.

//costante per prezzo del biglietto
const costoKm = 0.21;

//costante per sconto Under18
const Under18 = 0.2;

//costante per sconto Over65
const Over65 = 0.4;

//costante dei km percorsi
const kmUtente= document.getElementById('km');

//costante dell'età per accedere o meno allo sconto
const etaUtente = document.getElementById('eta');

//costante per il bottone da inserire nel form per calcolare il prezzo del biglietto
const submitPrezzo = document.getElementById('submit');

//costante per il bottone di annullare 
const deletePrice =  document.getElementById('delete')

//costante per generare il nome e il cognome del passeggero
const userPasseggero = document.getElementById('user');

//costante per la creazione del biglietto virtuale
const ticketVirtual = document.getElementById ('ticket')

//serie di costanti per gli elementi generati nel biglietto
const userNomeCognome= document.querySelector ('nomecognome')
const offerTrain = document.querySelector ('offerta')
const sectionTrain = document.querySelector ('section')
const codeTrain = document.querySelector ('code')
const prezzoTrain = document.querySelector ('pay')

//calcolo del biglietto
submitPrezzo.addEventListener('click',
function() {
    //prezzo del bigliettostandard //
    let prezzoBiglietto = costoKm * Number(kmUtente.value);
    let TypeTicket = 'Prezzo standard';

    // prezzo del biglietto Under18
    if (etaUtente.value === 'minorenne') {
    prezzoBiglietto = (prezzoBiglietto * Under18);
    let TypeTicket = 'Prezzo Under18';

    //prezzo del biglietto Over65
    } else if (etaUtente.value === 'oltre65') {
    prezzoBiglietto = (prezzoBiglietto * Over65);
    let TypeTicket = 'Prezzo Over65';
    }

    console.log(submitPrice.value);
    console.log(prezzoBiglietto.toFixed(2));
    console.log(TypeTicket);

    userNomeCognome.innerHTML = elementIdUtente.value;
    offerTrain.innerHTML = TypeTicket;
    prezzoTrain.innerHTML = `${prezzoBiglietto.toFixed(2)} €`;

    ticketVirtual.classList.remove('hidden');
});

submitPrice.addEventListener ( 'click', 
function () {
        elementIdUtente.value = '';
        elementKmUtente.value = '';
        elementEtaUtente.value = null;
        console.log('annullo i bottoni');

        ticketVirtual.classList.add('hidden');
});
