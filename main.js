const name = document.getElementById('name');

const km = document.getElementById('km');

const age = document.getElementById('age');

//Buttons
const generate = document.getElementById('generate');

const revert = document.getElementById('revert');

// Elementi per inject
const nameTicket = document.getElementById('nameTicket');
const typeTicket = document.getElementById('typeTicket');
const carriageTicket = document.getElementById('carriageTicket');
const cpTicket = document.getElementById('cpTicket');
const priceTicket = document.getElementById('priceTicket');

// Prezzi
const price = km.value * 0.21;
console.log(price);

const overPrice = price - ((price * 40) / 100);
console.log(overPrice);

const underPrice = price - ((price * 20) / 100);
console.log(underPrice);

// cp e carriage
let cp =  Math.floor(Math.random() * 9999 + 90000);

let carriage = Math.floor(Math.random() * 9 + 1 );

// Click buttons
generate.addEventListener('click',

    function() {

        nameTicket.innerHTML = name.value;
        carriageTicket.innerHTML = carriage;
        cpTicket.innerHTML = cp;

        if  (age.value == ""){
            alert("Inserisci la tua eta'!");
        } else {
            
            if (age.value == "maggiorenne"){
                typeTicket.innerHTML = "Biglietto Standard";
                priceTicket.innerHTML = price.toFixed(2) + " &euro; ";
            } else if (age.value == "over65"){
                typeTicket.innerHTML = "Biglietto Over 65";
                priceTicket.innerHTML = overPrice.toFixed(2) + " &euro; ";
            }  else {
                typeTicket.innerHTML = "Biglietto Minorenni";
                priceTicket.innerHTML = underPrice.toFixed(2) + " &euro; ";
            }
            displayTicket.className =  "d-block " + "row" + " bg-wh " + " p-2";
        }

    }

);

revert.addEventListener('click',

    function(){
        
        displayTicket.className =  "d-none" ;

        age.value="";
        name.value="";
        km.value="";

    }

);