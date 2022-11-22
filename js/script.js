/* 
Descrizione:
Scrivere un programma che chieda all’utente:
Il numero di chilometri da percorrere
Età del passeggero
Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:

il prezzo del biglietto è definito in base ai km (0.2762 € al km)

va applicato uno sconto del 17.5% per i minorenni
va applicato uno sconto del 33.3% per gli over 65.
MILESTONE 1:
Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra.
La risposta finale (o output) sarà anch’essa da scrivere in console.
MILESTONE 2:
Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo.
Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina, sempre rispettando le due cifre decimali.
 */


const kmInput = document.querySelector("input#kmNumber");
console.log(kmInput);

const ageInput = document.querySelector("input#ageNumber");
console.log(ageInput);

const output = document.getElementById("output");
console.log(output);

const button = document.querySelector("a.button");
console.log(button);



button.addEventListener("click",function(){

    let priceTicket = 0.2762 * kmInput.value;
    console.log(priceTicket);
    
    console.log(kmInput.value + "km");
    console.log(ageInput.value + "anni");

    if (parseInt(ageInput.value)  < 18) {
        console.log(priceTicket.value);
        output.innerHTML = "Il prezzo del biglietto è di " + (priceTicket = ((priceTicket * 17.5) / 100)) + "€";
    }
    else if (parseInt(ageInput.value) >= 65) {
        console.log(priceTicket);
        output.innerHTML = "Il prezzo del biglietto è di " + (priceTicket = ((priceTicket * 33.3) / 100)) + "€";
    }
        
    })





