import i18Obj from './translate.js'

//console.log('1. Вёрстка валидная(https://validator.w3.org/: Document checking completed. No errors or warnings to show)  +10 \n2. Вёрстка семантическая +20 \n   В коде странице присутствуют следующие элементы (указано минимальное! количество, может быть больше) \n — <header>, <main>, <footer> +2\n — шесть элементов <section> (по количеству секций) +2\n — только один заголовок <h1> +2\n — пять заголовков <h2> (количество секций минус одна, у которой заголовок <h1>) +2\n — один элемент <nav> (панель навигации) +2\n — два списка ul > li > a (панель навигации, ссылки на соцсети) +2\n — десять кнопок <button> +2\n — два инпута: <input type="email"> и <input type="tel"> +2 (от автора: из условия этого пункта "может быть больше!" — в этой работе ещё +2 инпута для переключения языка)\n — один элемент <textarea> +2 \n — три атрибута placeholder +2 \n3. Вёрстка соответствует макету +48\n — блок <header> +6 \n — секция hero +6\n — секция skills +6\n — секция portfolio +6\n — секция video +6\n — секция price +6\n — секция contacts +6\n — блок <footer> +6\n4. Требования к css + 12\n — для построения сетки используются флексы или гриды +2\n — при уменьшении масштаба страницы браузера вёрстка размещается по центру, а не сдвигается в сторону +2\n — фоновый цвет тянется на всю ширину страницы +2 \n — иконки добавлены в формате .svg. SVG может быть добавлен любым способом. Обращаем внимание на формат, а не на способ добавления +2\n — изображения добавлены в формате .jpg +2\n — есть favicon +2\n5. Интерактивность, реализуемая через css +20\n — плавная прокрутка по якорям +5\n — ссылки в футере ведут на гитхаб автора проекта и на страницу курса https://rs.school/js-stage0/ +5\n — интерактивность включает в себя не только изменение внешнего вида курсора, например, при помощи свойства cursor: pointer, но и другие визуальные эффекты, например, изменение цвета фона или цвета шрифта. Если в макете указаны стили при наведении и клике, для элемента указываем эти стили. Если в макете стили не указаны, реализуете их по своему усмотрению, руководствуясь общим стилем макета +5\n — обязательное требование к интерактивности: плавное изменение внешнего вида элемента при наведении и клике не влияющее на соседние элементы +5\n----------\nИТОГО: 110 \n----------\nОжидаемая оценка: максимальный балл.\nДля связи прямая ссылка в лс дискорда Zwiak#7233: https://discordapp.com/users/924587955794874388 (второй вариант связи в тг: https://t.me/zwiak)\nСпасибо за проверку!');
//console.log('1. Вёрстка соответствует макету. Ширина экрана 768px +48\n — блок <header>  +6\n — секция hero +6\n — секция skills  +6\n — секция portfolio  +6\n — секция video  +6\n — секция price +6\n — секция contacts +6\n — блок <footer> +6\n\n2. Ни на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки. Весь контент страницы при этом сохраняется: не обрезается и не удаляется +15\n — нет полосы прокрутки при ширине страницы от 1440рх до 768рх +5\n — нет полосы прокрутки при ширине страницы от 768рх до 480рх +5\n — нет полосы прокрутки при ширине страницы от 480рх до 320рх +5\n\n3.На ширине экрана 768рх и меньше реализовано адаптивное меню +22\n — при ширине страницы 768рх панель навигации скрывается, появляется бургер-иконка +2\n — при нажатии на бургер-иконку справа плавно появляется адаптивное меню, бургер-иконка изменяется на крестик +4\n — высота адаптивного меню занимает всю высоту экрана. При ширине экрана 768-620рх(!) вёрстка меню соответствует макету(!), когда экран становится уже, меню занимает всю ширину экрана (от автора: 768-620px включительный диапазон, т.е. меню начинает занимать всю ширину экрана с 619 и менее) +4\n — при нажатии на крестик адаптивное меню плавно скрывается уезжая за правую часть экрана, крестик превращается в бургер-иконку +4\n — бургер-иконка, которая при клике превращается в крестик, создана при помощи css-анимаций без использования изображений +2\n — ссылки в адаптивном меню работают, обеспечивая плавную прокрутку по якорям +2\n — при клике по ссылке в адаптивном меню адаптивное меню плавно скрывается, крестик превращается в бургер-иконку +4\n\n----------\nИТОГО: 85 \n----------\nОжидаемая оценка: максимальный балл.\n\nИз указанного в разделе "Особенности проверки" может появляться черная полоса справа после перестраивания верстки.\nЛечится обновлением страницы (F5) (в коде этого отступа нет и на реальных мобильных устройствах не воспроизводится, проверил) \n\nДля связи прямая ссылка в лс дискорда Zwiak#7233: https://discordapp.com/users/924587955794874388 (второй вариант связи в тг: https://t.me/zwiak)\nСпасибо за проверку!');
console.log('1. Смена изображений в секции portfolio +25\n — при кликах по кнопкам Winter, Spring, Summer, Autumn в секции portfolio отображаются изображения из папки с соответствующим названием +20\n — кнопка, по которой кликнули, становится активной т.е. выделяется стилем. Другие кнопки при этом будут неактивными +5\n2. Перевод страницы на два языка +25\n — при клике по надписи ru англоязычная страница переводится на русский язык +10\n — при клике по надписи en русскоязычная страница переводится на английский язык +10\n — надписи en или ru, соответствующие текущему языку страницы, становятся активными т.е. выделяются стилем +5\n3. Переключение светлой и тёмной темы +25\n — тёмная тема приложения сменяется светлой +10\n — светлая тема приложения сменяется тёмной +10\n — после смены светлой и тёмной темы интерактивные элементы по-прежнему изменяют внешний вид при наведении и клике и при этом остаются видимыми на странице (нет ситуации с белым шрифтом на белом фоне) +5\n4. Дополнительный функционал: выбранный пользователем язык отображения страницы и светлая или тёмная тема сохраняются при перезагрузке страницы +5\n5. Дополнительный функционал: сложные эффекты для кнопок при наведении и/или клике +5 (Box-shadow Button)\n----------\nИТОГО: 85 \n----------\nОжидаемая оценка: максимальный балл.\n\nДля связи прямая ссылка в лс дискорда Zwiak#7233: https://discordapp.com/users/924587955794874388 (второй вариант связи в тг: https://t.me/zwiak)');

// СМЕНА БУРГЕРА И ОТКРЫТИЕ/ЗАКРЫТИЕ НАВИГАЦИИ ПО КЛИКУ НА БУРГЕР + БЛОКИРОВКА ПРОКРУТКИ (через добавление классов)

document.querySelector('.burger').onclick = () => {
    document.querySelector('.burger-menu').classList.toggle('active');
    document.body.classList.toggle('hidden')
    document.querySelector('.burger').classList.toggle('active');
}

// СКРЫТИЕ НАВИГАЦИИ ПРИ ПЕРЕХОДЕ ПО ССЫЛКЕ (через делегирование событий)

document.querySelector('.burger-menu-list').addEventListener('click', event => {
    if (event.target.className === 'burger-nav-link') {
        document.querySelector('.burger-menu').classList.remove('active');
        document.body.classList.remove('hidden');
        document.querySelector('.burger').classList.remove('active');
    }
})


//ПОРТФОЛИО 

const portfolioBtn = document.querySelectorAll('.portfolio-button');
const portfolioImage = document.querySelectorAll('.portfolio-image');

const portfolioBtns = document.querySelector('.portfolio-buttons');
const portfolioBtnsImages = document.querySelectorAll('.portfolio-button');

// ПЕРЕКЛЮЧЕНИЕ КНОПОК

portfolioBtns.addEventListener('click', changeBtn);

function changeBtn(event) {
    if (event.target.classList.contains('portfolio-button')) {
        for (let i of portfolioBtnsImages) {
            if (i.classList.contains('portfolio-button') && i.classList.contains('active')) {
                i.classList.remove('active');
            }
        }
        event.target.classList.add('active');
    }
}

//ПЕРЕКЛЮЧЕНИЕ ФОТО

portfolioBtn.forEach(element =>
    element.addEventListener('click', () => {
        let value = element.dataset.season;

        portfolioImage.forEach((img, index) => img.src = `./assets/img/${value}/${index + 1}.jpg`);
    })
);

// ФОТО

function preloadImages() {
    const seasons = ['winter', 'spring', 'summer', 'autumn']
    for (let s in seasons) {
        for (let i = 1; i <= 6; i++) {
            const img = new Image();
            img.src = `./assets/img/${seasons[s]}/${i}.jpg`;
        }
    }
}
preloadImages();


//СМЕНА ТЕМЫ


const themeBtn = document.querySelector('.theme');

let theme = 'light';

themeBtn.addEventListener('click', changeTheme);

function changeTheme(event) {
    const classesArr = [
        'skills',
        'skills-title',
        'portfolio',
        'portfolio-title',
        'portfolio-buttons',
        'video-title',
        'video',
        'price',
        'price-title',
        'burger-menu',
        'burger',
        'burger-menu-list'
    ];
    themeBtn.classList.contains('light-theme-icon') ? themeBtn.classList.remove('light-theme-icon') : themeBtn.classList.add('light-theme-icon');
    for (let i of classesArr) {
        const element = document.querySelector(`.${i}`);
        themeBtn.classList.contains('light-theme-icon') ? element.classList.add('light-theme') : element.classList.remove('light-theme');
        themeBtn.classList.contains('light-theme-icon') ? theme = 'light' : theme = 'dark';
    }
    localStorage.setItem('theme', theme);
}

function changeThemeLoad(theme) {
    const classesArr = [
        'skills',
        'skills-title',
        'portfolio',
        'portfolio-title',
        'portfolio-buttons',
        'video',
        'video-title',
        'price',
        'price-title',
        'burger-menu',
        'burger',
        'burger-menu-list'
    ];
    if (theme === 'dark') {
        themeBtn.classList.remove('light-theme-icon');
    } else {
        themeBtn.classList.add('light-theme-icon');
    }
    for (let i of classesArr) {
        const element = document.querySelector(`.${i}`);
        themeBtn.classList.contains('light-theme-icon') ? element.classList.add('light-theme') : element.classList.remove('light-theme');
        themeBtn.classList.contains('light-theme-icon') ? theme = 'light' : theme = 'dark';
    }
}

//ПЕРЕВОД

let lang = 'ru';

const langBtns = document.querySelector('.lng-switch');
const BtnEn = document.querySelector('.lng-en');
const BtnRu = document.querySelector('.lng-ru');

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
        getTranslate(lang);
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
    getTranslate(lang);
}

function getTranslate(lng) {
    const collectionData = document.querySelectorAll('[data-i18]');
    for (let i of collectionData) {
        if (i.placeholder) {
            i.placeholder = i18Obj[lng][i.dataset.i18];
        } else {
            i.textContent = i18Obj[lng][i.dataset.i18];
        }
    }
}


// ========  Local Storage ======== //

window.addEventListener('load', getLocalStorage);

function getLocalStorage() {
    if (localStorage.getItem('lang')) {
        const lang = localStorage.getItem('lang');
        changeLangvLoad(lang);
    }
    if (localStorage.getItem('theme')) {
        const theme = localStorage.getItem('theme');
        changeThemeLoad(theme)
    }
}