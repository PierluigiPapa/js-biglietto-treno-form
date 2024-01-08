// MILESTONE 1:
// Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console.

// MILESTONE 2:
// Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo.
// Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo). Questo richiederà un minimo di ricerca.

//costante dei km percorsi
const Km= document.getElementById('km')

//costante dell'età per accedere o meno allo sconto
const Età = document.getElementById('età')

//costante per il bottone da inserire nel form
const Button = document.getElementById('button')

//costante per generare il prezzo del biglietto
const prezzo = document.getElementById('prezzo')

//variabile per generare il numero della carrozza
let Carrozza = document.getElementById('carrozza')

//variabile per riconoscere la tipologia dell'offerta
let Offerta = document.getElementById('offerta')

//variabile per generare il codice del biglietto
let Biglietto = document.getElementById('ticket')




