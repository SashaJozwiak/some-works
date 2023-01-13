
const lng = document.querySelector('.lng');

//цитаты
const quoteBlock = document.querySelector('.quote-block');

const photo = document.querySelector('.photo');
const quoteText = document.querySelector('.quote');
const quoteAuthor = document.querySelector('.author');

//годы
const yearFirst = document.querySelector('.year1')
const yearSecond = document.querySelector('.year2')


const button = document.querySelector('.btn');

//язык
const langBtns = document.querySelector('.lng-switch');
const BtnEn = document.querySelector('.lng-en');
const BtnRu = document.querySelector('.lng-ru');

//перевод
const langBtn = document.querySelector('.btn');
const lngTitle = document.querySelector('.title');

async function getQuotes() {

    const quotes = './json/ru.json';
    const res = await fetch(quotes);
    const data = await res.json();

    let randQuote = Math.floor(Math.random() * data.length)

    photo.src = data[randQuote].img;


    if (BtnEn.classList.contains('lng-active')) {
        quoteText.innerText = '«' + data[randQuote].text_en + '»';
        quoteAuthor.innerText = '= ' + data[randQuote].author_en + ' =';
    } else if (BtnRu.classList.contains('lng-active')) {
        quoteText.innerText = '«' + data[randQuote].text + '»';
        quoteAuthor.innerText = '= ' + data[randQuote].author + ' =';
    }

    BtnEn.addEventListener('click', function () {
        quoteText.innerText = '«' + data[randQuote].text_en + '»';
        quoteAuthor.innerText = '= ' + data[randQuote].author_en + ' =';

        lngTitle.innerText = 'RANDOM QUOTE';
        langBtn.innerText = 'Get a quote';

    })

    BtnRu.addEventListener('click', function () {
        quoteText.innerText = '«' + data[randQuote].text + '»';
        quoteAuthor.innerText = '= ' + data[randQuote].author + ' =';

        langBtn.innerText = 'Цитату';
        lngTitle.innerText = 'Случайная цитата';

    })

    photo.addEventListener('mouseover', function () {
        yearFirst.innerText = data[randQuote].year1;
        yearSecond.innerText = data[randQuote].year2;
    })

    photo.addEventListener('mouseout', function () {
        yearFirst.innerText = '';
        yearSecond.innerText = '';
    })



}


getQuotes()

langBtns.addEventListener('click', changeLangv);

button.addEventListener('click', getQuotes);

// animation 

button.addEventListener('click', animQu)

function animQu() {

    quoteAuthor.classList.add('author-2')
    quoteBlock.classList.add('quote-block-2')
}


quoteAuthor.addEventListener("animationend", AnimationHandler, false);

function AnimationHandler() {
    // del class with animation

    quoteAuthor.classList.remove('author-2')
    quoteBlock.classList.remove('quote-block-2')
}




//LANG



let lang = 'en';

langBtns.addEventListener('click', changeLangv);

function changeLangv(event) {
    if (event.target.classList.contains('lng')) {
        if (event.target.classList.contains('lng-ru')) {
            BtnEn.classList.remove('lng-active');
            BtnRu.classList.add('lng-active');
            lang = 'ru';
        } else {
            BtnRu.classList.remove('lng-active');
            BtnEn.classList.add('lng-active');
            lang = 'en';
        }
        localStorage.setItem('lang', lang);

    }
}


function changeLangvLoad(lng) {
    if (lng === 'ru') {
        BtnEn.classList.remove('lng-active');
        BtnRu.classList.add('lng-active');
        lang = 'ru';
    } else {
        BtnRu.classList.remove('lng-active');
        BtnEn.classList.add('lng-active');
        lang = 'en';
    }

}


//LOCAL STORAGE не требуется по заданию


/* window.addEventListener('load', getLocalStorage);


function getLocalStorage() {

    const lang = localStorage.getItem('lang');
    changeLangvLoad(lang);


} */

console.log('1. Вёрстка +10\n — на странице есть цитата и кнопка для смены цитаты +5\n — в футере приложения есть ссылка на гитхаб автора приложения, год создания приложения, логотип курса со ссылкой на курс +5\n2. При загрузке страницы приложения отображается рандомная цитата +10\n3. При перезагрузке страницы цитата обновляется (заменяется на другую) +10\n4. Есть кнопка, при клике по которой цитата обновляется (заменяется на другую) +10\n5. Смена цитаты сопровождается любым другим эффектом, например, изменяется изображение или меняется фоновый цвет страницы, или проигрывается звук и т.д +10\n6. Можно выбрать один из двух языков отображения цитат: en/ru или en/be +10\n7. Очень высокое качество оформления приложения и/или дополнительный не предусмотренный в задании функционал, улучшающий качество приложения +10\n — высокое качество оформления приложения предполагает собственное оригинальное оформление равное или отличающееся в лучшую сторону по сравнению с демо     \n\n+смена изображения (фото автора) \n+при клике на кнопку смены цитаты подпись автора появляется с анимацией \n+при наведении курсора на фото автора (на моб. устройствах при клике) отображаются годы жизни текущего автора \n+при смене языка переводится интерфейс, текущая цитата и следующие при клике по кнопке смены цитаты\n(Local Storage не использовал, этого нет в требованиях и чек-листе)\n(цитат 10 шт.)       \n\n----------\nИТОГО: 70 \n----------\nОжидаемая оценка: максимальный балл.\n\nДля связи прямая ссылка в лс дискорда Zwiak#7233: https://discordapp.com/users/924587955794874388 (второй вариант связи в тг: https://t.me/zwiak)\n\nСпасибо за проверку!');