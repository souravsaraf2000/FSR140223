let audioPlayer = document.getElementById('audio-player')
let playBtn = document.getElementById('play-button')
let pauseBtn = document.getElementById('pause-button')
let repeat = document.getElementById('repeat')
let slowSpeed  = document.getElementById('slow-speed')
let fastSpeed = document.getElementById('fast-speed')
let normalSpeed = document.getElementById('normal-speed')
let increment = document.getElementById('increment')
let decrement = document.getElementById('decrement')
let progress = document.getElementById('progress')

console.log(document.getElementsByTagName('audio'))

playBtn.addEventListener('click', function(){
    audioPlayer.play()
})

pauseBtn.addEventListener('click', function(){
    audioPlayer.pause()
})

repeat.addEventListener('click', function(){
    audioPlayer.currentTime = 0
})

slowSpeed.addEventListener('click', function(){
    audioPlayer.playbackRate = 0.5
})

normalSpeed.addEventListener('click', function(){
    audioPlayer.playbackRate = 1
})

fastSpeed.addEventListener('click', function(){
    audioPlayer.playbackRate = 2
})

increment.addEventListener('click', function(){
    audioPlayer.currentTime += 10
})

decrement.addEventListener('click', function(){
    audioPlayer.currentTime -= 10
})

audioPlayer.addEventListener('timeupdate', function(){
   progress.style.width = (audioPlayer.currentTime / audioPlayer.duration) * 100 + '%'
})