// explore.js
window.addEventListener("DOMContentLoaded", init);

function init() {
  const synth = window.speechSynthesis;
  const voiceSelect = document.querySelector("#voice-select");
  const startBtn = document.querySelector("button");
  const textInput = document.querySelector("textarea");
  const img = document.querySelector("img");

  let voices = [];

  synth.onvoiceschanged = () => {
    voices = synth.getVoices();
    voices.forEach((voice) => {
      const option = document.createElement("option");
      option.textContent = `${voice.name} (${voice.lang})`;
      option.setAttribute("data-lang", voice.lang);
      option.setAttribute("data-name", voice.name);
      voiceSelect.appendChild(option);
    });
  };

  startBtn.addEventListener('click', () => {
    let utterance = new SpeechSynthesisUtterance(textInput.value);
    voices.forEach(voice => {
      if (voice.name === voiceSelect.selectedOptions[0].getAttribute('data-name')) {
        utterance.voice = voice;
      }
    })
    synth.speak(utterance);

    // change img
    img.setAttribute('src', 'assets/images/smiling-open.png')

    utterance.addEventListener('end', () => {
      img.setAttribute('src', 'assets/images/smiling.png')
    });
  })
}
