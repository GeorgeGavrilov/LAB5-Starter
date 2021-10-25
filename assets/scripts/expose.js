// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {

  const jsConfetti = new JSConfetti();

  var selectHornImage = document.getElementById('horn-select');
  selectHornImage.addEventListener('change', (event) => {
    var result = event.target.value;
    var newImagePath = "assets/images/" + result + ".svg";
    document.querySelector('#expose img').src = newImagePath;
    //console.log(document.querySelector('#expose img').src);
    //console.log(newImagePath);
    var newAudioPath = "assets/audio/" + result + ".mp3";
    document.querySelector('#expose audio').src = newAudioPath;
    //console.log(document.querySelector('#expose audio').src);
    //console.log(document.querySelector('#expose audio'));
  });

  var audioButton = document.getElementsByTagName('button');
  audioButton[0].addEventListener('click', (event) => {
    var audio = document.querySelector('#expose audio');
    audio.volume = document.querySelector('#volume-controls input').value / 100;
    if (document.getElementById('horn-select').value == 'party-horn') {
      jsConfetti.addConfetti({
        emojis: ['🌈', '⚡️', '💥', '✨', '💫', '🌸'],
      });
    }
    audio.play();
  });

  var volumeChanger = document.getElementById('volume-controls');
  volumeChanger.addEventListener('change', (event) => {
    var volumeResult = event.target.value;
    document.querySelector('#volume-controls input').value = volumeResult;
    if (volumeResult == 0) {
      document.querySelector('#volume-controls img').src = "assets/icons/volume-level-0.svg";

    }
    else if (volumeResult >= 1 && volumeResult < 33) {
      document.querySelector('#volume-controls img').src = "assets/icons/volume-level-1.svg";

    }
    else if (volumeResult >= 33 && volumeResult < 67) {
      document.querySelector('#volume-controls img').src = "assets/icons/volume-level-2.svg";

    }
    else if (volumeResult >= 67) {
      document.querySelector('#volume-controls img').src = "assets/icons/volume-level-3.svg";

    }
  });
}