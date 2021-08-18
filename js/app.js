function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if (pinString.length == 4) {
        return pin;
    }
    else {
        // console.log('got 3 digit and calling again', pin)
        return getPin();
    }

}
function generatePin() {
    const pin = getPin();
    console.log(pin);
    document.getElementById('display-pin').value = pin
}

document.getElementById('keypad').addEventListener('click', function () {
    const number = event.target.innerText;
    const calcInput = document.getElementById('typed-numbers');
    if (isNaN(number)) {
        console.log(number);
        if (number == 'C') {
            calcInput.value = '';
        }
    }
    else {

        const previousNumber = calcInput.value;
        const newcalc = previousNumber + number;
        calcInput.value = newcalc;

    }
})
function verifyPin() {
    const pin = document.getElementById('display-pin').value;
    const typedNumbers = document.getElementById('typed-numbers').value;
    const successMessage = document.getElementById('notify-passed');
    const failError = document.getElementById('notify-failed');

    if (pin == typedNumbers) {
        successMessage.style.display = 'block'
        failError.style.display = 'none'
    }
    else {

        failError.style.display = 'block'
        successMessage.style.display = 'none'

    }
}