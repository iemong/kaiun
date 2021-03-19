const player = require('node-wav-player');
const gpio = require('rpi-gpio').promise;

const sound1 = './sounds/power1.wav'
const sound2 = './sounds/power2.wav'
const sound3 = './sounds/power3.wav'

const playSound = () => {
    player.play({
        path: sound1,
        sync: true,
    }).then(() => {
        console.log('The wav file started to be played successfully.');
    }).catch((error) => {
        console.error(error);
    });
}
const setup = () => {
    gpio.setup(13, gpio.DIR_OUT).then(() => gpio.write(13, true)).catch(e => console.error(e))
}

setup()