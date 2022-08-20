const charRNNOutput = document.querySelector('.charRNNOutput');
const charRNNStartButton = document.querySelector('#charRNNStartButton');
const markovOutput = document.querySelector('.markovOutput');
const markovStartButton = document.querySelector('#markovStartButton');

const charRNN = new ml5.charRNN('./models/games');

var markov = new Markov();
fetch('games.txt')
    .then((resp) => {resp.text().then((txt) => {txt.split('\n').forEach(line => markov.addStates(line))})})
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