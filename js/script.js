const priceKm = 0.21;
const discountUnder18 = 20 / 100;
const discountOver65 = 40 / 100;
// console.log(priceKm, discountUnder18, discountOver65);

const btnSubmit = document.getElementById('submit');
const btnReset = document.getElementById('reset');
console.log (submit, reset);


btnSubmit.addEventListener('click', 
function() {
    const passengerName = document.getElementById('name-surname').value;
    const nKm = parseInt(document.getElementById('nKm').value);
    const age = document.getElementById('age').value;

    if (nKm === ''|| passengerName === '' || age === '') {
        alert('Compila tutti i campi')
    } else if (isNaN(nKm)) {
        alert ('Inserisci un valore numerico per i km')
    } else {
        console.log (passengerName, nKm, age);

        const ticketContainer = document.querySelector('.ticket');
        ticketContainer.classList.remove ('d-none');
        const nameSurname = document.getElementById('passenger-name');
        nameSurname.innerHTML = passengerName;

        const offer = document.getElementById('offer');
        if (age === 'under') {
            offer.innerHTML = 'Promo Under18'
        } else if (age === 'over') {
            offer.innerHTML = 'Promo Over65'
        } else if (age === 'standard'){
            offer.innerHTML = 'Tariffa ordinaria'
        }
    }
}
)

btnReset.addEventListener('click',
function() {
    const ticketForm = document.getElementById("ticket-form");
    ticketForm.reset();
}
)

