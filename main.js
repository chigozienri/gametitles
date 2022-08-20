const charRNNOutput = document.querySelector('.charRNNOutput');
const charRNNStartButton = document.querySelector('#charRNNStartButton');
const markovOutput = document.querySelector('.markovOutput');
const markovStartButton = document.querySelector('#markovStartButton');

const charRNN = new ml5.charRNN('./models/games');
const Markov = require('js-markov');

var markov = new Markov();
markov.addStates([
    'Today is sunny',
    'Today is rainy',
    'The weather is sunny',
    'The weather for tomorrow might be rainy'
  ]);
markov.train();

function getGameCharRNN() {
    charRNN.generate({seed: 'Game Jam:'}, (err, r) => {charRNNOutput.textContent = r.sample; console.log(r)});
}

function getGameMarkov() {
    var markovResult = markov.generate();
    markovOutput.textContent = markovResult;
    console.log(markovResult)
}

charRNNStartButton.addEventListener('click', getGameCharRNN);
markovStartButton.addEventListener('click', getGameMarkov);