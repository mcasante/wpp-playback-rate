window.addEventListener('load', init)

function init() {
  const app = document.querySelector('#app')

  const config = { attributes: true, childList: true, subtree: true };
  const knownMessages = new Set()
  const knownAudios = new Set()

  // const callback = function() {
  //   const messages = app.querySelectorAll('.focusable-list-item')

  //   for(const message of messages) {
  //     if(!knownMessages.has(message.getAttribute('data-id'))) {
  //       const audio = message.querySelector('audio')
  //       if(audio) {
  //         message.classList.add('is-audio')
  //       }
  //     }
  //   }
  // }

  // const observer = new MutationObserver(callback);
  // observer.observe(app, config);

  // setInterval(() => {
  //   const messages = app.querySelectorAll('.focusable-list-item')

  //   for(const message of messages) {
  //     const attr = message.getAttribute('data-id')
  //     if(!knownMessages.has(attr)) {
  //       const isAudio = !!message.querySelector('input[type=range]')
  //       if(isAudio) {
  //         message.classList.add('is-audio')
  //         knownAudios.add(message)
  //       }
  //     }
  //     knownMessages.add(attr)
  //   }
  // }, 1000)
}

function setRate(audio, rate) {
  audio.playbackRate = rate
}