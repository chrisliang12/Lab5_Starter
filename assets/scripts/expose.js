// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // get the elements we need
  const audio = document.querySelector("audio");
  const hornImg = document.querySelector("img");
  const menu = document.querySelector("#horn-select");
  const volume = document.querySelector("#volume");
  const icon = document.querySelector("div>img");
  const btn = document.querySelector("button");

  // change the img based on user input on menu
  menu.addEventListener('change', () => {
    hornImg.setAttribute("src", `/assets/images/${menu.value}.svg`);
    audio.setAttribute("src", `/assets/audio/${menu.value}.mp3`);
    console.log(menu.value);
  });

  // change the icon based on the volume level
  volume.addEventListener('change', () => {
    //console.log(typeof(volume.value));
    if (volume.value == 0) {
      icon.setAttribute('src', "assets/icons/volume-level-0.svg");
    } else if (volume.value >= 1 && volume.value < 33) {
      icon.setAttribute('src', "assets/icons/volume-level-1.svg");
    } else if (volume.value >=33 && volume.value < 67) {
      icon.setAttribute('src', "assets/icons/volume-level-2.svg");
    } else {
      icon.setAttribute('src', "assets/icons/volume-level-3.svg");
    }
  });

  const jsConfetti = new JSConfetti();
  // play the sound when click the button
  btn.addEventListener('click', () => {
    audio.play();
    jsConfetti.addConfetti();
  });
}