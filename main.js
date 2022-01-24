// Definisco variabili per i dati del form
let name = document.getElementById('name');

let km = document.getElementById('km');

let age = document.getElementById('age');

// Definisco variabili biglietto
let nameTicket = document.getElementById('nameTicket');
let typeTicket = document.getElementById('typeTicket');
let carriageTicket = document.getElementById('carriageTicket');
let cpTicket = document.getElementById('cpTicket');
let priceTicket = document.getElementById('priceTicket');

// Click sui bottoni
const generate = document.getElementById('generate');

const revert = document.getElementById('revert');


generate.addEventListener('click',

    function(){

        // Variabile visibilita' biglietto
        const displayTicket = document.getElementById('displayTicket');
        
        // Definisco variabili prezzi
        const price = km.value * 0.21;
        
        const overPrice = price - (price * 0.4);

        const underPrice = price - (price * 0.2);

        // Definisco variabile Cp e carrozza

        let cp = Math.floor(Math.random() * 9999 + 90000);

        cpTicket.innerHTML = cp;

        let carriage = Math.floor(Math.random() * 9 + 1 );

        carriageTicket.innerHTML = carriage;

        nameTicket.innerHTML = name.value;

        if (age.value == ""){
            alert("Inserisci la tua età'!");
        } else if (age.value == "over65"){
            typeTicket.innerHTML = "Biglietto Over 65";
            priceTicket.innerHTML = overPrice.toFixed(2) + "&euro;";
            displayTicket.className =  "d-block " + "row" + " bg-wh " + " p-2";
        } else if (age.value == "minorenne"){
            typeTicket.innerHTML = "Biglietto Minorenne";
            priceTicket.innerHTML = underPrice.toFixed(2) + "&euro;";
            displayTicket.className =  "d-block " + "row" + " bg-wh " + " p-2";
        } else {
            typeTicket.innerHTML = "Biglietto Standard";
            priceTicket.innerHTML = price.toFixed(2) + "&euro;";
            displayTicket.className =  "d-block " + "row" + " bg-wh " + " p-2";
        }

        name.value = "";
        km.value = "";
        age.value = "";                                        
        
        
    }
        


);
