const output = document.querySelector('.output');
const charRNNStartButton = document.querySelector('#charRNNStartButton');

const charRNN = new ml5.charRNN('./models/games');

function getGame() {
    charRNN.generate({seed: 'Game Jam:'}, (err, r) => {output.textContent = r.sample; console.log(r)});
}

charRNNStartButton.addEventListener('click', getGame);