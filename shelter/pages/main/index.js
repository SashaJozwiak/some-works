import pets from "./../../assets/json/pets.js";



// ===== OPEN & CLOSE BURGER =====



document.querySelector('.burger').onclick = () => {
    document.querySelector('.burger-menu').classList.toggle('active');
    document.body.classList.toggle('hidden')
    document.querySelector('.burger').classList.toggle('active');

}


document.addEventListener('click', e => {
    let clickWrapper = e.target.closest('.wrapper')
    let burg = e.target.closest('.burger')
    let burgMenu = e.target.closest('.burger-menu')
    if (!clickWrapper || burg || burgMenu) return;

    document.querySelector('.burger-menu').classList.remove('active')
    document.body.classList.remove('hidden')
    document.querySelector('.burger').classList.remove('active');


})





// ===== CLICK TO HIDE BURGER =====







document.addEventListener('click', event => {
    if (event.target.className === 'burger-nav-link') {
        document.querySelector('.burger-menu').classList.remove('active');
        document.body.classList.remove('hidden');
        document.querySelector('.burger').classList.remove('active');

    }

})








// ===== CAROUSEL LOAD =====







let arrRandomNum = [];

RandomNum()

function RandomNum() {
    let articleNum = Math.floor(Math.random() * (9 - 2 + 1)) + 2;
    let articleNumTwo = Math.floor(Math.random() * (9 - 2 + 1)) + 2;
    let articleNumThree = Math.floor(Math.random() * (9 - 2 + 1)) + 2;

    if (articleNum !== articleNumTwo && articleNumTwo !== articleNumThree && articleNumThree !== articleNum) {
        arrRandomNum = [articleNum, articleNumTwo, articleNumThree]
        return arrRandomNum;
    } else RandomNum();

}





let article = document.querySelector(`#our > div.container.carousel > article:nth-child(${arrRandomNum[0]})`);
let article2 = document.querySelector(`#our > div.container.carousel > article:nth-child(${arrRandomNum[1]})`);
let article3 = document.querySelector(`#our > div.container.carousel > article:nth-child(${arrRandomNum[2]})`);









// ===== CAROUSEL LOAD — id for hide =====






let arrDefaultNum = [2, 3, 4, 5, 6, 7, 8, 9];

let arrForHide = arrDefaultNum.filter((value) => value !== arrRandomNum[0] && value !== arrRandomNum[1] && value !== arrRandomNum[2]);

document.querySelector(`#our > div.container.carousel > article:nth-child(${arrForHide[0]})`).classList.add("article-pet-hidden")
document.querySelector(`#our > div.container.carousel > article:nth-child(${arrForHide[1]})`).classList.add("article-pet-hidden")
document.querySelector(`#our > div.container.carousel > article:nth-child(${arrForHide[2]})`).classList.add("article-pet-hidden")
document.querySelector(`#our > div.container.carousel > article:nth-child(${arrForHide[3]})`).classList.add("article-pet-hidden")
document.querySelector(`#our > div.container.carousel > article:nth-child(${arrForHide[4]})`).classList.add("article-pet-hidden")





function checkMediaQuery() {

    if (window.innerWidth < 1280) {
        document.querySelector(`#our > div.container.carousel > article:nth-child(${arrRandomNum[2]})`).classList.add("article-pet-hidden")
    } else if (window.innerWidth >= 1280) {
        document.querySelector(`#our > div.container.carousel > article:nth-child(${arrRandomNum[2]})`).classList.remove("article-pet-hidden")
    }

    if (window.innerWidth < 768) {
        document.querySelector(`#our > div.container.carousel > article:nth-child(${arrRandomNum[1]})`).classList.add("article-pet-hidden")
    } else if (window.innerWidth >= 768) {
        document.querySelector(`#our > div.container.carousel > article:nth-child(${arrRandomNum[1]})`).classList.remove("article-pet-hidden")


    }
}


checkMediaQuery()
window.addEventListener('resize', checkMediaQuery);








// ===== CLICK TO GO =====









const LEFT_BTN = document.querySelector("#our > div.container.carousel > div.btn-left");
const RIGHT_BTN = document.querySelector("#our > div.container.carousel > div.btn-right");

const LEFT_BTN320 = document.querySelector("#our > div.container.carousel > div.btn-320 > div.btn-320-left");
const RIGHT_BTN320 = document.querySelector("#our > div.container.carousel > div.btn-320 > div.btn-320-right");





function rightMove() {


    document.querySelector(`#our > div.container.carousel > article:nth-child(${arrForHide[0]})`).classList.remove("article-pet-hidden")
    document.querySelector(`#our > div.container.carousel > article:nth-child(${arrForHide[1]})`).classList.remove("article-pet-hidden")
    document.querySelector(`#our > div.container.carousel > article:nth-child(${arrForHide[2]})`).classList.remove("article-pet-hidden")
    document.querySelector(`#our > div.container.carousel > article:nth-child(${arrForHide[3]})`).classList.add("article-pet-hidden")
    document.querySelector(`#our > div.container.carousel > article:nth-child(${arrForHide[4]})`).classList.add("article-pet-hidden")

    document.querySelector(`#our > div.container.carousel > article:nth-child(${arrRandomNum[0]})`).classList.add("article-pet-hidden")
    document.querySelector(`#our > div.container.carousel > article:nth-child(${arrRandomNum[1]})`).classList.add("article-pet-hidden")
    document.querySelector(`#our > div.container.carousel > article:nth-child(${arrRandomNum[2]})`).classList.add("article-pet-hidden")


    let oldArrRandomNum = arrRandomNum;


    RandomNum()




    reRandom()

    function reRandom() {
        RandomNum()
        let setArr = Array.from(new Set(oldArrRandomNum.concat(arrRandomNum)));

        if (setArr.length < 6) {
            reRandom()
        }

    }






    arrForHide = arrDefaultNum.filter((value) => value !== arrRandomNum[0] && value !== arrRandomNum[1] && value !== arrRandomNum[2]);



    document.querySelector(`#our > div.container.carousel > article:nth-child(${arrForHide[0]})`).classList.add("article-pet-hidden")
    document.querySelector(`#our > div.container.carousel > article:nth-child(${arrForHide[1]})`).classList.add("article-pet-hidden")
    document.querySelector(`#our > div.container.carousel > article:nth-child(${arrForHide[2]})`).classList.add("article-pet-hidden")
    document.querySelector(`#our > div.container.carousel > article:nth-child(${arrForHide[3]})`).classList.add("article-pet-hidden")
    document.querySelector(`#our > div.container.carousel > article:nth-child(${arrForHide[4]})`).classList.add("article-pet-hidden")

    document.querySelector(`#our > div.container.carousel > article:nth-child(${arrRandomNum[0]})`).classList.remove("article-pet-hidden")
    document.querySelector(`#our > div.container.carousel > article:nth-child(${arrRandomNum[1]})`).classList.remove("article-pet-hidden")
    document.querySelector(`#our > div.container.carousel > article:nth-child(${arrRandomNum[2]})`).classList.remove("article-pet-hidden")


    if (window.innerWidth < 1280) {
        document.querySelector(`#our > div.container.carousel > article:nth-child(${arrRandomNum[2]})`).classList.add("article-pet-hidden")
    }

    if (window.innerWidth < 768) {
        document.querySelector(`#our > div.container.carousel > article:nth-child(${arrRandomNum[1]})`).classList.add("article-pet-hidden")
    }

    document.querySelector('.carousel').classList.add('transition-right');
    LEFT_BTN.classList.add('transition-left-btn');
    RIGHT_BTN.classList.add('transition-right-btn');



    document.querySelector('.carousel').addEventListener('animationend', () => {


        document.querySelector('.carousel').classList.remove('transition-right');
        LEFT_BTN.classList.remove('transition-left-btn');
        RIGHT_BTN.classList.remove('transition-right-btn');


    });



};

// LEFT MOVE 

function leftMove() {


    document.querySelector(`#our > div.container.carousel > article:nth-child(${arrForHide[0]})`).classList.remove("article-pet-hidden")
    document.querySelector(`#our > div.container.carousel > article:nth-child(${arrForHide[1]})`).classList.remove("article-pet-hidden")
    document.querySelector(`#our > div.container.carousel > article:nth-child(${arrForHide[2]})`).classList.remove("article-pet-hidden")
    document.querySelector(`#our > div.container.carousel > article:nth-child(${arrForHide[3]})`).classList.add("article-pet-hidden")
    document.querySelector(`#our > div.container.carousel > article:nth-child(${arrForHide[4]})`).classList.add("article-pet-hidden")

    document.querySelector(`#our > div.container.carousel > article:nth-child(${arrRandomNum[0]})`).classList.add("article-pet-hidden")
    document.querySelector(`#our > div.container.carousel > article:nth-child(${arrRandomNum[1]})`).classList.add("article-pet-hidden")
    document.querySelector(`#our > div.container.carousel > article:nth-child(${arrRandomNum[2]})`).classList.add("article-pet-hidden")


    let oldArrRandomNum = arrRandomNum;


    RandomNum()




    reRandom()

    function reRandom() {
        RandomNum()
        let setArr = Array.from(new Set(oldArrRandomNum.concat(arrRandomNum)));

        if (setArr.length < 6) {
            reRandom()
        }

    }






    arrForHide = arrDefaultNum.filter((value) => value !== arrRandomNum[0] && value !== arrRandomNum[1] && value !== arrRandomNum[2]);



    document.querySelector(`#our > div.container.carousel > article:nth-child(${arrForHide[0]})`).classList.add("article-pet-hidden")
    document.querySelector(`#our > div.container.carousel > article:nth-child(${arrForHide[1]})`).classList.add("article-pet-hidden")
    document.querySelector(`#our > div.container.carousel > article:nth-child(${arrForHide[2]})`).classList.add("article-pet-hidden")
    document.querySelector(`#our > div.container.carousel > article:nth-child(${arrForHide[3]})`).classList.add("article-pet-hidden")
    document.querySelector(`#our > div.container.carousel > article:nth-child(${arrForHide[4]})`).classList.add("article-pet-hidden")

    document.querySelector(`#our > div.container.carousel > article:nth-child(${arrRandomNum[0]})`).classList.remove("article-pet-hidden")
    document.querySelector(`#our > div.container.carousel > article:nth-child(${arrRandomNum[1]})`).classList.remove("article-pet-hidden")
    document.querySelector(`#our > div.container.carousel > article:nth-child(${arrRandomNum[2]})`).classList.remove("article-pet-hidden")


    if (window.innerWidth < 1280) {
        document.querySelector(`#our > div.container.carousel > article:nth-child(${arrRandomNum[2]})`).classList.add("article-pet-hidden")
    }

    if (window.innerWidth < 768) {
        document.querySelector(`#our > div.container.carousel > article:nth-child(${arrRandomNum[1]})`).classList.add("article-pet-hidden")
    }

    document.querySelector('.carousel').classList.add('transition-left');
    LEFT_BTN.classList.add('transition-left-btn');
    RIGHT_BTN.classList.add('transition-right-btn');




    document.querySelector('.carousel').addEventListener('animationend', () => {


        document.querySelector('.carousel').classList.remove('transition-left');
        LEFT_BTN.classList.remove('transition-left-btn');
        RIGHT_BTN.classList.remove('transition-right-btn');


    });



};











RIGHT_BTN.addEventListener('click', rightMove);
LEFT_BTN.addEventListener('click', leftMove);

RIGHT_BTN320.addEventListener('click', rightMove);
LEFT_BTN320.addEventListener('click', leftMove);



// ===== ANY =====

const overlay = document.querySelector(".overlay");
const windowModal = document.querySelector('.modal-wrapper');


const carousel = document.getElementById('main_carousel');
/* const carousel = document.getElementsByClassName('.carousel'); */
const artPets = document.querySelectorAll(".article-pet");




/* console.log(artPets[0]); */

/* for (let i = 0; i < artPets.length; i++) {
    artPets[i].addEventListener('click', e => {
        console.log(e.target)
    })
} */


const openModal = () => {
    windowModal.style.display = 'block';


    document.querySelector("html").classList.add('hidden')


}

const closeModal = () => {
    windowModal.style.display = 'none';


    document.querySelector("html").classList.remove('hidden')
}



carousel.addEventListener('click', e => {

    let articlePet = e.target.closest('.article-pet')

    if (!articlePet) return;

    openModal();



    let indexPet = e.target.closest('.article-pet').dataset.index;
    console.log(indexPet)
    createPopup(indexPet);

});



const popupButtonX = document.querySelector('.popup__buttonX')


overlay.addEventListener('click', closeModal);
popupButtonX.addEventListener('click', closeModal);




// ======= POPUP =======


function createPopup(index) {
    windowModal.querySelector('.description__tittle').textContent = pets[index].name;
    windowModal.querySelector('.description__type').textContent = pets[index].type;
    windowModal.querySelector('.description__bread').textContent = pets[index].breed;
    windowModal.querySelector('.description__text').textContent = pets[index].description;
    windowModal.querySelector('img').src = pets[index].img;
    windowModal.querySelector('.description__age').textContent = pets[index].age;
    windowModal.querySelector('.description__inoculations').textContent = pets[index].inoculations.join(", ");
    windowModal.querySelector('.description__diseases').textContent = pets[index].diseases.join(", ");
    windowModal.querySelector('.description__parasites').textContent = pets[index].parasites.join(", ");



}









