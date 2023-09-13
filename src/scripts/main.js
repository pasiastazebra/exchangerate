//DOM elements
const fromMenu = document.getElementById(from);
const fromValue = document.getElementById(from-value);

const toMenu = document.getElementById(to);
const toValue = document.getElementById(to-value);

const submitButton = document.getElementById(submit);

//API

const apiKey = '95d27d6cedc8c320cba92066';

const getData = (key, valueOne, valueTwo) => {
    const response = fetch(`https://v6.exchangerate-api.com/v6/${key}/pair/${valueOne}/${valueTwo}`);
}
