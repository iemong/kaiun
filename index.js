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
const setup = async () => {
    try {

    } catch (e) {
        console.error(e)
    } finally {
        console.log('finish')
    }
    gpio.on('change', (channel, value) => {
        console.log(channel, value)
        if(channel === 11) {
            console.log(value)
        }
    })

    await gpio.setup(7, gpio.DIR_OUT)
    await gpio.write(7, true);

    await gpio.setup(11, gpio.DIR_IN, gpio.EDGE_BOTH)
}

setup()