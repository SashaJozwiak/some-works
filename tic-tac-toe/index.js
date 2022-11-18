console.log('1. Вёрстка +10\n — реализован интерфейс игры +5\n — в футере приложения есть ссылка на гитхаб автора приложения, год создания приложения, логотип курса со ссылкой на курс +5\n2. При кликах по игровому полю по очереди отображаются крестики и нолики. Первая фигура всегда крестик +10\n3. Игра завершается, когда три фигуры выстроились в ряд по вертикали, горизонтали или диагонали +10\n4. По окончанию игры выводится её результат - выигравшая фигура и количество ходов от начала игры до её завершения +10\n5. Результаты последних 10 игр сохраняются в local storage. Есть таблица рекордов, в которой отображаются результаты предыдущих 10 игр +10\n6. Анимации или звуки, или настройки игры. Баллы начисляются за любой из перечисленных пунктов +10\n7. Очень высокое качество оформления приложения и/или дополнительный не предусмотренный в задании функционал, улучшающий качество приложения +10\n — высокое качество оформления приложения предполагает собственное оригинальное оформление равное или отличающееся в лучшую сторону по сравнению с демо\n ----------\n + над игровым полем информация о том, кто сейчас делает ход\n + звуки и поворачивающаяся кукла\n + разные модальные окна и звук в зав-ти от того, кто победил\n ----------\n(только для 2 живых игроков — pvp)\n(общая тематика и кукла никак не влияют на механику классических крестиков ноликов — только на нервы игроков)\n(сорри за неудобства — не успел адаптив и добавить mute или регулятор громкости для звуков (уже делал это в аудиоплеере))\n\nОфициальный чек-лист для проверки js30-tic-tac-toe: https://tic-tac-toe-cross-check.netlify.app/      \n\n----------\nИТОГО: 70 \n----------\nОжидаемая оценка: максимальный балл.\n\nДля связи прямая ссылка в лс дискорда Zwiak#7233: https://discordapp.com/users/924587955794874388 (второй вариант связи в тг: https://t.me/zwiak) В этот раз с 21.02.2022 по 26.02.2022 в больнице на операции без доступа к ПК. Надеюсь, что такой ситуации не возникнет, но что-то критически важное поменять в работе не смогу, однако на связи постараюсь быть почти всегда.\n\nСпасибо за проверку! \n\n(В консоли ↓ может быть ошибка TypeError, она уходит, когда в истории игр >= 10 записей).');

const area = document.querySelector('.area');
const boxes = document.getElementsByClassName('box');
const contentWrapper = document.querySelector('.content');
const modalResult = document.querySelector('.modal-wrapper');
const overlay = document.querySelector('.overlay');
const btnNewGame = document.querySelector('.btn-new-game');

//table

const btnStat = document.querySelector('.leader-board');
const modalStat = document.querySelector('.modal-wrapper-stat');
const overlayStat = document.querySelector('.overlay-stat');
const btnCloseStat = document.querySelector('.close-stat');
const lbTest = document.querySelector('.lb-test');

//audio-go

const audio = document.querySelector('.audio');
const audio2 = document.querySelector('.audio2');
const audio3 = document.querySelector('.audio3');
const audio4 = document.querySelector('.audio4');

const dollPhoto = document.querySelector('.photo2');

//audio

function audioPlay() {
    audio.play();
    /* audio.loop = false; */
    dollPhoto.src = './img/doll-behind-custom.jpg'
    audio.ended ? dollPhoto.src = './img/doll-front-custom.jpg' : false;


}

function audioPause() {
    audio.pause();

    dollPhoto.src = './img/doll-front-custom.jpg'

}

area.addEventListener('mouseover', function () {

    audioPlay()

})

area.addEventListener('mouseout', function () {
    audioPause();
})

area.addEventListener('click', function () {
    audioPause();
})

//solution

let result = '';
let move = 0;

if (move === 0) {
    document.querySelector('.player-move').innerHTML = 'Player\'s move: <p class="for-X">X</p>';
}

area.addEventListener('mousedown', e => {
    if ((e.target.className === 'box') && (e.target.innerHTML !== '<p class="for-X">X</>') && (e.target.innerHTML !== '<p class="for-O">O</p>')) {
        move % 2 === 0 ? e.target.innerHTML = '<p class="for-X">X</p>' : e.target.innerHTML = '<p class="for-O">O</p>';

        move++;

        move % 2 === 0 ? document.querySelector('.player-move').innerHTML = 'Player\'s move: <p class="for-X">X</p>' : document.querySelector('.player-move').innerHTML = 'Player\'s move: <p class="for-O">O</p>';
        if (move === 9) { document.querySelector('.player-move').innerHTML = 'No more moves' }

        check()
    }
})

const check = () => {

    let arr = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]

    for (let i = 0; i < arr.length; i++) {

        if (boxes[arr[i][0]].innerHTML == '<p class="for-X">X</p>' && boxes[arr[i][1]].innerHTML == '<p class="for-X">X</p>' && boxes[arr[i][2]].innerHTML == '<p class="for-X">X</p>') {
            result = '<p class="for-X">X</p>';
            prepareResult(result);
            audio3.play();
            audio3.loop = false;


        } else if (boxes[arr[i][0]].innerHTML == '<p class="for-O">O</p>' && boxes[arr[i][1]].innerHTML == '<p class="for-O">O</p>' && boxes[arr[i][2]].innerHTML == '<p class="for-O">O</p>') {
            result = '<p class="for-O">O</p>';
            document.querySelector('.modal-window').style.backgroundImage = 'url(./img/red-win.JPG)';
            prepareResult(result);
            audio2.play();
            audio2.loop = false;

        } else if (move === 9 && result !== 'X' && result !== 'O') {
            result = '<p class="for-F">Friendship</p>';
            document.querySelector('.modal-window').style.backgroundImage = 'url(./img/green-win.JPG)';
            prepareResult(result);
            audio3.play();
            audio3.loop = false;
        }

    }
}


const prepareResult = winner => {

    let resSum = `<h1> ${winner} won in ${move} moves!</h1>`;
    contentWrapper.innerHTML = resSum;

    modalResult.style.display = 'block';

    let dateTime = `${dateD}.0${month + 1} ${hourse}:${minutes}:${seconds}`;

    setlocalStorage(winner, dateTime);

}


const closeModal = () => {
    modalResult.style.display = 'none';
    location.reload();

}

const openStat = () => {
    modalStat.style.display = 'block';
    audio4.play();
    audio3.loop = true;

}

const closeStat = () => {
    modalStat.style.display = 'none';
    audio4.pause();


}


btnNewGame.addEventListener('click', closeModal)

btnStat.addEventListener('click', openStat)
overlayStat.addEventListener('click', closeStat)
btnCloseStat.addEventListener('click', closeStat)


let date = new Date();
let month = date.getMonth()
let dateD = date.getDate()
let hourse = addZero(date.getHours())
let minutes = addZero(date.getMinutes())
let seconds = addZero(date.getSeconds())

function addZero(i) {
    if (i < 10) { i = '0' + i }
    return i;
}

let now = new Date();

let sumLocalStorage = localStorage.length;


if (localStorage.length < 11) {
    sumLocalStorage = Date.now()

}

if (localStorage.length >= 11) {
    let arrKeyLS = [];
    for (let i = 0; i < 11; i++) {

        arrKeyLS.push(localStorage.key(i))
    }


    let sortArrKeyLS = arrKeyLS.sort((a, b) => b - a)

    let filteredSortArrKeyLS = sortArrKeyLS.filter(function (el) {
        return el != null;
    });

    /* console.log(Math.min(...filteredSortArrKeyLS)); */

    /* localStorage.removeItem(Math.min(...filteredSortArrKeyLS)); */

    sumLocalStorage = Date.now()

}

function setlocalStorage(winner, dateTime) {
    localStorage.setItem(String(sumLocalStorage), [winner, move, dateTime]);
};



function getlocalStorage() {

    let getStorage = localStorage.getItem(`${sumLocalStorage - 1}`);
    let arrSrorage = getStorage.split(',');
    console.log(arrSrorage, sumLocalStorage, localStorage.length);

};


function SortLocalStorage() {
    let localStorageArray = new Array();

    if (localStorage.length > 0) {

        for (let i = 0; i < localStorage.length; i++) {
            localStorageArray[i] = localStorage.key(i) + ',' + localStorage.getItem(localStorage.key(i));

        }
    }

    let sortedArray = localStorageArray.sort().reverse();

    let sortedArray2 = [];



    for (let i = 0; i < sortedArray.length; i++) {

        if (sortedArray[i].slice(0, 2) === '16') {
            sortedArray2.push(sortedArray[i].split(','))
        }

    }





    let arrSortedArray = []


    for (let i = 0; i < sortedArray2.length; i++) {

        arrSortedArray.push(sortedArray2[i]/* .split(',') */)
    }



    arrSortedArray = arrSortedArray.sort().reverse();



    lbTest.innerHTML = `<div class = "line-stat">${arrSortedArray[0][1]} won in ${arrSortedArray[0][2]} moves, date: ${arrSortedArray[0][3]}</div>`;
    lbTest.innerHTML += `<div class = "line-stat">${arrSortedArray[1][1]} won in ${arrSortedArray[1][2]} moves, date: ${arrSortedArray[1][3]}</div>`;
    lbTest.innerHTML += `<div class = "line-stat">${arrSortedArray[2][1]} won in ${arrSortedArray[2][2]} moves, date: ${arrSortedArray[2][3]}</div>`;
    lbTest.innerHTML += `<div class = "line-stat">${arrSortedArray[3][1]} won in ${arrSortedArray[3][2]} moves, date: ${arrSortedArray[3][3]}</div>`;
    lbTest.innerHTML += `<div class = "line-stat">${arrSortedArray[4][1]} won in ${arrSortedArray[4][2]} moves, date: ${arrSortedArray[4][3]}</div>`;
    lbTest.innerHTML += `<div class = "line-stat">${arrSortedArray[5][1]} won in ${arrSortedArray[5][2]} moves, date: ${arrSortedArray[5][3]}</div>`;
    lbTest.innerHTML += `<div class = "line-stat">${arrSortedArray[6][1]} won in ${arrSortedArray[6][2]} moves, date: ${arrSortedArray[6][3]}</div>`;
    lbTest.innerHTML += `<div class = "line-stat">${arrSortedArray[7][1]} won in ${arrSortedArray[7][2]} moves, date: ${arrSortedArray[7][3]}</div>`;
    lbTest.innerHTML += `<div class = "line-stat">${arrSortedArray[8][1]} won in ${arrSortedArray[8][2]} moves, date: ${arrSortedArray[8][3]}</div>`;
    lbTest.innerHTML += `<div class = "line-stat">${arrSortedArray[9][1]} won in ${arrSortedArray[9][2]} moves, date: ${arrSortedArray[9][3]}</div>`;
}

SortLocalStorage()

