"use strict";
(() => {
    let AudioLevel;
    (function (AudioLevel) {
        AudioLevel[AudioLevel["MUTE"] = 0] = "MUTE";
        AudioLevel[AudioLevel["LOW"] = 1] = "LOW";
        AudioLevel[AudioLevel["MEDIUM"] = 2] = "MEDIUM";
        AudioLevel[AudioLevel["HIGH"] = 3] = "HIGH";
    })(AudioLevel || (AudioLevel = {}));
    let currentAudio = AudioLevel.MEDIUM;
    console.log(currentAudio);
    console.log(AudioLevel);
})();
