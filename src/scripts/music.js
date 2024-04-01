const song1 = document.getElementById("song1");
const song2 = document.getElementById("song2");
const song3 = document.getElementById("song3");
const song4 = document.getElementById("song4");
const music1 = document.getElementById('music1')
const music2 = document.getElementById('music2')
const music3 = document.getElementById('music3')
const music4 = document.getElementById('music4')
const playSvg1 = document.getElementById('play-svg1')
const playSvg2 = document.getElementById('play-svg2')
const playSvg3 = document.getElementById('play-svg3')
const playSvg4 = document.getElementById('play-svg4')


music1.addEventListener('click', () => {
  if(song1.paused) {
    playSvg1.src='playing.svg'
    song1.play()
  } else {
    playSvg1.src='play.svg'
    song1.pause()
  }
})
music2.addEventListener('click', () => {
  if(song2.paused) {
    playSvg2.src='playing.svg'
    song2.play()
  } else {
    playSvg2.src='play.svg'
    song2.pause()
  }
})
music3.addEventListener('click', () => {
  if(song3.paused) {
    playSvg3.src='playing.svg'
    song3.play()
  } else {
    playSvg3.src='play.svg'
    song3.pause()
  }
})
music4.addEventListener('click', () => {
  if(song4.paused) {
    playSvg4.src='playing.svg'
    song4.play()
  } else {
    playSvg4.src='play.svg'
    song4.pause()
  }
})
song1.addEventListener('ended', () => {
  playSvg1.src = 'play.svg'
})
song2.addEventListener('ended', () => {
  playSvg2.src = 'play.svg'
})
song3.addEventListener('ended', () => {
  playSvg3.src = 'play.svg'
})
song4.addEventListener('ended', () => {
  playSvg4.src = 'play.svg'
})