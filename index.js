const player = require('node-wav-player');

const sound1 = './sounds/power1.wav'
const sound2 = './sounds/power2.wav'
const sound3 = './sounds/power3.wav'

player.play({
    path: sound3,
    sync: true,
}).then(() => {
    console.log('The wav file started to be played successfully.');
}).catch((error) => {
    console.error(error);
});