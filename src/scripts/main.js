//DOM elements
const fromMenu = document.getElementById("from");
const fromValue = document.getElementById("from-value");

const toMenu = document.getElementById("to");
const toValue = document.getElementById("to-value");

const submitButton = document.getElementById("submit");

//API

const apiKey = '95d27d6cedc8c320cba92066';

const fetchData = (valueOne, valueTwo, key = apiKey) => {

    return fetch(`https://v6.exchangerate-api.com/v6/${key}/pair/${valueOne}/${valueTwo}`).then( ( respond ) => { return respond.json() } );

}

async function getData(firstCurrency, secondCurrency) {
    const response = await fetchData(firstCurrency, secondCurrency);
    const respond = response.conversion_rate;

    return respond;
}

//check correction

const areDifferent = (firstValue, secondValue) => firstValue !== secondValue;

//button listener

submitButton.addEventListener("click", async () => {

    const firstCurrency = fromMenu.value;
    const secondCurrency = toMenu.value;

    if (areDifferent(firstCurrency, secondCurrency)) {

        const result = await getData(firstCurrency, secondCurrency);
        const inputValue = parseFloat(fromValue.value);
        const convertedValue = result*inputValue;

        toValue.value = convertedValue.toFixed(2);

    } else {

        toValue.value = fromValue.value;

    }
})