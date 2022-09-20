function createAssemblyLine() {
    let result = {
        hasClima: function (myCar) {
            myCar.temp = 21;
            myCar.tempSettings = 21;
            myCar.adjustTemp = () => {
                if (myCar.temp > myCar.tempSettings) {
                    myCar.temp--
                }
                if (myCar.temp < myCar.tempSettings) {
                    myCar.temp++
                }
            }
        },

        hasAudio: function (myCar) {
            myCar.currentTrack = {};
            myCar.nowPlaying = () => {
                myCar.currentTrack = `Now playing '${myCar.currentTrack.name}' by ${myCar.currentTrack.artist}`;
                console.log(myCar.currentTrack);
            }
        },

        hasParktronic: function (myCar) {
            myCar.checkDistance = (distance) => {
                if (distance < 0.1) {
                    console.log("Beep! Beep! Beep!");
                } else if (distance < 0.25) {
                    console.log("Beep! Beep!");
                } else if (distance < 0.5) {
                    console.log("Beep!");
                } else {
                    console.log('')
                }
            }
        }

    }
    return result;
}

const assemblyLine = createAssemblyLine();

const myCar = {
    make: 'Toyota',
    model: 'Avensis'
};
assemblyLine.hasAudio(myCar);
myCar.currentTrack = {
    name: 'Never Gonna Give You Up',
    artist: 'Rick Astley'
};
myCar.nowPlaying();