window.addEventListener('load', init)

function createElement(node = 'div', className = '', innerHTML = '') {
  const el = document.createElement(node)
  el.className = className
  el.innerHTML = innerHTML
  return el
}

// const knownAudios = new Set()

const SPEEDS = [1, 1.5, 2]

const SPEED_RANGE = {
  min: 0.5,
  max: 3,
  step: 0.5,
}

function init() {
  const interval = setInterval(setAudios, 3000)
}

function setAudios() {
  const audios = document.querySelectorAll('audio')

  for(const audio of audios) {
    const theId = audio.getAttribute('data-the-id')

    if(!theId) {
      const buttons = createRange(audio)
      const wrapper = audio.closest('.focusable-list-item > div > div')
      wrapper.classList.add('is-audio')

      wrapper.append(buttons)
      audio.setAttribute('data-the-id', theId)
    }
  }
}

function createRange(audio) {
  const wrapper = createElement('span', 'wpp-pbr-note')

  const display = createElement('div', 'speed-display', '1x')
  const input = createElement('input', 'speed-range')
  input.type = 'range'
  input.min = SPEED_RANGE.min
  input.max = SPEED_RANGE.max
  input.step = SPEED_RANGE.step
  input.value = 1

  input.addEventListener('input', ({ target }) => {
    setRate(audio, target.value)
    display.innerHTML = `${target.value}x`
  })

  wrapper.appendChild(input)
  wrapper.appendChild(display)

  return wrapper
}

// function createButtons(audio) {
//   const wrapper = createElement('span', 'wpp-pbr-note')

//   SPEEDS.map(s => {
//     return {
//       speed: s,
//       element: createElement('button', 'wpp-pbr-button', `${s}x`)
//     }
//   }).forEach(({ element, speed }) => {
//     element.addEventListener('click', () => setRate(audio, speed))
//     wrapper.appendChild(element)
//   })

//   return wrapper
// }

function setRate(audio, speed) {
  audio.playbackRate = speed
}