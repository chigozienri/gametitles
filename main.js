const charRNNOutput = document.querySelector('.charRNNOutput');
const charRNNStartButton = document.querySelector('#charRNNStartButton');
const markovOutput = document.querySelector('.markovOutput');
const markovStartButton = document.querySelector('#markovStartButton');

const charRNN = new ml5.charRNN('./models/games');

function getGameCharRNN() {
    charRNN.generate({seed: 'Game Jam:'}, (err, r) => {charRNNOutput.textContent = r.sample; console.log(r)});
}

function getGameMarkov() {
    var markovResult = 'foobar';
    markovOutput.textContent = markovResult;
    console.log(markovResult)
}

charRNNStartButton.addEventListener('click', getGameCharRNN);
markovStartButton.addEventListener('click', getGameMarkov);