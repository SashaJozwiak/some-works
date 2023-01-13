
const player = document.querySelector('.player'),
    playBtn = document.querySelector('.play'),
    prevBtn = document.querySelector('.prev'),
    nextBtn = document.querySelector('.next'),
    audio = document.querySelector('.audio'),
    progressContainer = document.querySelector('.progress__container'),
    progress = document.querySelector('.progress'),
    title = document.querySelector('.song'),
    cover = document.querySelector('.cover__img'),
    imgSrc = document.querySelector('.img-play'),
    time = document.querySelector('.time'),
    volume = document.querySelector('.volume__container'),
    progressVolume = document.querySelector('.progress_volume'),
    muteVol = document.querySelector('.img-vol'),
    mute = document.querySelector('mute'),
    body = document.querySelector('body')


const songs = ['Alphaville — Forever Young', 'Armin van Buuren — In And Out Of Love', 'Rick Astley — Never Gonna Give You Up']

//default

let songIndex = 0;


//init 

const loadSong = (song) => {
    title.innerHTML = song;
    audio.src = `assets/audio/${song}.mp3`
    cover.src = `assets/cover/cover${songIndex + 1}.jpg`
}

loadSong(songs[songIndex])


//play

const playSong = () => {
    player.classList.add('play')
    cover.classList.add('active')
    body.classList.add('body-active')
    imgSrc.src = './assets/buttons/pause.png'
    audio.play()


}


const pauseSong = () => {
    player.classList.remove('play')
    cover.classList.remove('active')
    body.classList.remove('body-active')
    imgSrc.src = './assets/buttons/play.png'
    audio.pause()

}

playBtn.addEventListener('click', () => {
    const isPlaying = player.classList.contains('play')
    if (isPlaying) {
        pauseSong();

    } else {
        playSong()
    }
})

//next song

const nextSong = () => {
    songIndex++;

    if (songIndex > songs.length - 1) {
        songIndex = 0;
    }
    loadSong(songs[songIndex])
    playSong()
}


nextBtn.addEventListener('click', nextSong)


//prev song

const prevSong = () => {
    songIndex--;

    if (songIndex < 0) {
        songIndex = songs.length - 1;
    }
    loadSong(songs[songIndex])
    playSong()
}


prevBtn.addEventListener('click', prevSong)

//progress bar and time

const updateProgress = (e) => {
    const { duration, currentTime } = e.srcElement
    const progressPercent = (currentTime / duration) * 100

    progress.style.width = `${progressPercent}%`

    time.innerHTML = getTimeCodeFromNum(currentTime) + ' | ' + getTimeCodeFromNum(duration)


    const isPlaying = player.classList.contains('play')
    if (isPlaying) {
        time.innerHTML = getTimeCodeFromNum(currentTime) + ' / ' + checkTrack()
    } else {
        time.innerHTML = getTimeCodeFromNum(currentTime) + ' / ' + checkTrack()
    }

}



function checkTrack() {
    if (songs[songIndex] === 'Alphaville — Forever Young') {
        return '3:46'
    } else if (songs[songIndex] === 'Armin van Buuren — In And Out Of Love') {
        return '3:00'
    } else if (songs[songIndex] === 'Rick Astley — Never Gonna Give You Up') {
        return '3:36'
    } else if (songs[songIndex] === 'undefined') { return '0:00' }
}


audio.addEventListener('timeupdate', updateProgress)


//set progress

function setProgress(e) {
    const width = this.clientWidth;
    const clickX = e.offsetX
    const duration = audio.duration

    audio.currentTime = (clickX / width) * duration

}


progressContainer.addEventListener('click', setProgress)

//autonextplay


audio.addEventListener('ended', nextSong)


//volume


audio.volume = 0.25;

volume.addEventListener('click', e => {

    const sliderWidth = window.getComputedStyle(volume).width;
    const newVolume = e.offsetX / parseInt(sliderWidth);
    audio.volume = newVolume;
    progressVolume.style.width = newVolume * 100 + '%';
    muteVol.src = './assets/buttons/vol.png'



}, false)


// mute

function muteVolumeOn() {

    muteVol.src = './assets/buttons/mute.png'
    audio.volume = 0.000;
    /* muteVol.classList.add('mute') */

}

function muteVolumeOff() {

    muteVol.src = './assets/buttons/vol.png'
    let volP = progressVolume.style.width
    audio.volume = ((Number(volP.slice(0, -1))) / 100) + 0.07
    /* muteVol.classList.remove('mute') */

}

muteVol.addEventListener('click', muteVolume)


function muteVolume() {

    if (audio.volume < 0.001) {
        muteVolumeOff()
    }
    else if (audio.volume > 0.000) {
        muteVolumeOn()
    }
}

//numtotime


function getTimeCodeFromNum(num) {
    let seconds = parseInt(num);
    let minutes = parseInt(seconds / 60);
    seconds -= minutes * 60;
    const hours = parseInt(minutes / 60);
    minutes -= hours * 60;
    if (hours === 0) return `${minutes}:${String(seconds % 60).padStart(2, 0)}`;
}


console.log('1. Вёрстка +10\n — вёрстка аудиоплеера: есть кнопка Play/Pause, кнопки "Вперёд" и "Назад" для пролистывания аудиотреков, прогресс-бар, отображается название и автор трека +5\n — в футере приложения есть ссылка на гитхаб автора приложения, год создания приложения, логотип курса со ссылкой на курс +5\n2. Кнопка Play/Pause +10\n — есть кнопка Play/Pause, при клике по которой можно запустить или остановить проигрывание аудиотрека +5\n — внешний вид и функционал кнопки Play/Pause изменяется в зависимости от того, проигрывается ли в данный момент аудиотрек +5\n3. При кликах по кнопкам "Вперёд" и "Назад" переключается проигрываемый аудиотрек. Аудиотреки пролистываются по кругу - после последнего идёт первый +10\n4. При смене аудиотрека меняется изображение - обложка аудиотрека +10\n5. Прогресс-бар отображает прогресс проигрывания текущего аудиотрека. При перемещении ползунка вручную меняется текущее время проигрывания аудиотрека +10\n6. Отображается продолжительность аудиотрека и его текущее время проигрывания +10\n7. Очень высокое качество оформления приложения и/или дополнительный не предусмотренный в задании функционал, улучшающий качество приложения +10\n — высокое качество оформления приложения предполагает собственное оригинальное оформление равное или отличающееся в лучшую сторону по сравнению с демо\n\n +регулятор громкости +mute +интерактивные обложки +интерактивный бэкграунд               \n\n----------\nИТОГО: 70 \n----------\nОжидаемая оценка: максимальный балл.\n\nДля связи прямая ссылка в лс дискорда Zwiak#7233: https://discordapp.com/users/924587955794874388 (второй вариант связи в тг: https://t.me/zwiak)\n\nСпасибо за проверку!');
