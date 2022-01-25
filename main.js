// Mi riferisco a elementi DOM
const name = document.getElementById('name');

const km = document.getElementById('km');

const age = document.getElementById('age');

// Buttons DOM
const generate = document.getElementById('generate');

const revert = document.getElementById('revert');

// ticket output
const ticketName = document.getElementById('ticketName');
const ticketType = document.getElementById('ticketType');
const ticketCarriage = document.getElementById('ticketCarriage');
const ticketCp = document.getElementById('ticketCp');
const ticketPrice = document.getElementById('ticketPrice');

// Carrozza e Cp
const carriage = Math.floor(Math.random() * 8 + 1);

const cp = Math.floor(Math.random() * 9999 + 90000);

// Mostra biglietto
const showTicket = document.getElementById('showTicket');

// azione button
generate.addEventListener('click',

function(){
        // Prezzo biglietto
        const price = km.value * 0.21;
        console.log(price);
        
        const overPrice = price - (price * 0.4);
        console.log(overPrice);
        
        const underPrice = price - (price * 0.2);
        console.log(underPrice);
    
        if(age.value == ""){
            alert("Inserisci una età valida!");
        } else if (age.value == "maggiorenni"){
            ticketType.innerHTML = "Biglietto Standard";
            ticketPrice.innerHTML = price.toFixed(2) + " &euro;";
            showTicket.classList.remove('d-none');        
        } else if (age.value == "over65"){
            ticketType.innerHTML = "Biglietto Over 65";
            ticketPrice.innerHTML = overPrice.toFixed(2) + " &euro;";
            showTicket.classList.remove('d-none');        
        } else {
            ticketType.innerHTML = "Biglietto Minorenni";
            ticketPrice.innerHTML = underPrice.toFixed(2) + " &euro;";
            showTicket.classList.remove('d-none'); 
        }

        ticketName.innerHTML = name.value;

        ticketCarriage.innerHTML = carriage;

        ticketCp.innerHTML = cp;    

    }

);

revert.addEventListener('click',

    function(){

        name.value ="";

        km.value = "";

        age.value ="";

        showTicket.classList.add('d-none');        
             

    }

);