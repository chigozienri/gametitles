const output = document.querySelector('.output');
const startButton = document.querySelector('#startButton');

const charRNN = new ml5.charRNN('./models/games');

function getGame() {
    charRNN.generate({seed: 'Game Jam:'}, (err, r) => {output.textContent = r.sample; console.log(r)});
}

startButton.addEventListener('click', getGame);