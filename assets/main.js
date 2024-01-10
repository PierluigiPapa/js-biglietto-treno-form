//Costante per il nome del passeggero
const nomeCognomeHTML = document.getElementById ('nomeCognome')
//Costante per l'età del passeggero per stabilire lo sconto
const kmHtml = document.getElementById ('km')
//Costante per stabilire la fascia d'età
const etaHtml = document.getElementById ('eta')
//Costante per generare il risultato
const generaRisultato = document.getElementById ('btnGenera')
//Costante per generare il numero della carrozza
const carrozzaHtml = document.getElementById ('carrozza')
//Costante per generare il numero del codice CP
const codiceCpHtml = document.getElementById ('codice')
//Costanti per la comparsa del biglietto quando si clicca su genera 
const h2Html = document.getElementById('ticket')
const bigliettoHTML= document.getElementById('biglietto')
//Costante per generare il nome e il cognome del passeggero sul biglietto
const passeggeroHtml = document.getElementById('passeggeroNomeCognome')
//Costante per generare la tipologia del biglietto
const prezzoOffertaHtml = document.getElementById ('prezzoOfferta')
//Costante per generare il prezzo del biglietto
const risultatoFinaleHtml = document.getElementById ('bigliettoFinale')
//Costante per cancellare il biglietto con il bottone annulla
const cancellaBigliettoHtml = document.getElementById ('btnAnnulla')

h2Html.style.display="none"
bigliettoHTML.style.display="none"

//Processo per generare il biglietto
generaRisultato.addEventListener('click', function(){
    h2Html.style.display = "block"
    bigliettoHTML.style.display = "block"

    let codiceCarrozza = RandomNumber(0,10)
    let codiceCp = RandomNumber(100, 10000)

    carrozzaHtml.innerHTML = codiceCarrozza
    codiceCpHtml.innerHTML = codiceCp
   
    passeggeroHtml.innerHTML = nomeCognomeHTML.value

    //SE passeggero U18 = sconto 20%
    if (etaHtml.value === "minorenne") {
        prezzoOffertaHtml.innerHTML = "Biglietto speciale U18"
        risultatoFinaleHtml.innerHTML = ((kmHtml.value*0.21)*0.8).toFixed(2) + "€" 
    //SE passeggero dai 18 ai 65 anni = Prezzo standard
    } else if (etaHtml.value === "maggiorenne") {
        prezzoOffertaHtml.innerHTML = "Biglietto standard"
        risultatoFinaleHtml.innerHTML = ((kmHtml.value*0.21)).toFixed(2) + "€"
    //SE passeggero O65 = sconto 40%
    } else if (etaHtml.value === "over65")
    prezzoOffertaHtml.innerHTML = "Biglietto speciale O65"
    risultatoFinaleHtml.innerHTML = ((kmHtml.value*0.21)*0.6).toFixed(2) + "€"
})

cancellaBigliettoHtml.addEventListener('click', function(){

    h2Html.style.display="none"
    bigliettoHTML.style.display="none"
})


function RandomNumber(min, max) {
    return Math.floor (Math.random()*(max-min+1) + min)
}

// console.log (nomeCognomeHTML.value, kmHtml.value, etaHtml.value)

