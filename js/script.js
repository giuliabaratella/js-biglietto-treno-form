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
    }


}
)


