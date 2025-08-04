(() => {
  enum AudioLevel {
    MUTE = 0,
    LOW = 1,
    MEDIUM = 2,
    HIGH = 3,
  }
  let currentAudio = AudioLevel.MEDIUM;
  console.log(currentAudio);
  console.log(AudioLevel);
})();
