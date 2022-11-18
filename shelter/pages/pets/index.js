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








// ===== CAROUSEL LOAD ===== //






const area = document.querySelector('.our-friends-items');


let arrRandomNum = [0, 1, 2, 3, 4, 5, 6, 7];
let arrRandomNum2 = [0, 1, 2, 3, 4, 5, 6, 7];
let arrRandomNum3 = [0, 1, 2, 3, 4, 5, 6, 7];
let arrRandomNum4 = [0, 1, 2, 3, 4, 5, 6, 7];
let arrRandomNum5 = [0, 1, 2, 3, 4, 5, 6, 7];
let arrRandomNum6 = [0, 1, 2, 3, 4, 5, 6, 7];






function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}



shuffle(arrRandomNum);
shuffle(arrRandomNum2);
shuffle(arrRandomNum3);
shuffle(arrRandomNum4);
shuffle(arrRandomNum5);
shuffle(arrRandomNum6);

const elem0 = document.getElementById(`${arrRandomNum[0]}`);
const elem1 = document.getElementById(`${arrRandomNum[1]}`);
const elem2 = document.getElementById(`${arrRandomNum[2]}`);
const elem3 = document.getElementById(`${arrRandomNum[3]}`);
const elem4 = document.getElementById(`${arrRandomNum[4]}`);
const elem5 = document.getElementById(`${arrRandomNum[5]}`);
const elem6 = document.getElementById(`${arrRandomNum[6]}`);
const elem7 = document.getElementById(`${arrRandomNum[7]}`);

area.append(elem0);
area.append(elem1);
area.append(elem2);
area.append(elem3);
area.append(elem4);
area.append(elem5);
area.append(elem6);
area.append(elem7);


// ================================================== PAGINATION =========================================================== //


const moveLeftEnd = document.querySelector(".btn-left-end");
const moveLeft = document.querySelector(".btn-left");

const btnNum = document.querySelector("#dummybodyid > div.wrapper > main > section > div > div.our-friends-pagination > button.btn.btn-inactive.btn-active")
const btnNumSpan = document.querySelector(".pagenum")

const moveRight = document.querySelector(".btn-right");
const moveRightEnd = document.querySelector(".btn-right-end");





function moveToRight() {

    if (window.innerWidth < 768) {

        if ((Number(btnNumSpan.textContent)) < 16) {

            let PageNum = Number(btnNumSpan.textContent) + 1;

            btnNumSpan.innerHTML = PageNum;


            if ((Number(btnNumSpan.textContent)) === 16) {
                moveRightEnd.disabled = true;
                moveRight.disabled = true;

            }

        }



        if ((Number(btnNumSpan.textContent)) > 1) {

            moveLeft.disabled = false;
            moveLeftEnd.disabled = false;


        }


    } else if (window.innerWidth < 1280) {


        if ((Number(btnNumSpan.textContent)) < 8) {

            let PageNum = Number(btnNumSpan.textContent) + 1;

            btnNumSpan.innerHTML = PageNum;


            if ((Number(btnNumSpan.textContent)) === 8) {
                moveRightEnd.disabled = true;
                moveRight.disabled = true;

            }

        }



        if ((Number(btnNumSpan.textContent)) > 1) {

            moveLeft.disabled = false;
            moveLeftEnd.disabled = false;


        }




    } else {


        if ((Number(btnNumSpan.textContent)) < 6) {

            let PageNum = Number(btnNumSpan.textContent) + 1;

            btnNumSpan.innerHTML = PageNum;


            if ((Number(btnNumSpan.textContent)) === 6) {
                moveRightEnd.disabled = true;
                moveRight.disabled = true;

            }

        }



        if ((Number(btnNumSpan.textContent)) > 1) {

            moveLeft.disabled = false;
            moveLeftEnd.disabled = false;


        }

    }

}




function moveToLeft() {


    if (window.innerWidth < 768) {


        if ((Number(btnNumSpan.textContent)) > 1) {

            let PageNum = Number(btnNumSpan.textContent) - 1;

            btnNumSpan.innerHTML = PageNum;



        }

        if ((Number(btnNumSpan.textContent)) === 1) {

            moveLeft.disabled = true;
            moveLeftEnd.disabled = true;
        }

        if ((Number(btnNumSpan.textContent)) < 16) {
            moveRightEnd.disabled = false;
            moveRight.disabled = false;
        }


    } else if (window.innerWidth < 1280) {
        if ((Number(btnNumSpan.textContent)) > 1) {

            let PageNum = Number(btnNumSpan.textContent) - 1;

            btnNumSpan.innerHTML = PageNum;



        }

        if ((Number(btnNumSpan.textContent)) === 1) {

            moveLeft.disabled = true;
            moveLeftEnd.disabled = true;
        }

        if ((Number(btnNumSpan.textContent)) < 8) {
            moveRightEnd.disabled = false;
            moveRight.disabled = false;
        }
    } else {
        if ((Number(btnNumSpan.textContent)) > 1) {

            let PageNum = Number(btnNumSpan.textContent) - 1;

            btnNumSpan.innerHTML = PageNum;



        }

        if ((Number(btnNumSpan.textContent)) === 1) {

            moveLeft.disabled = true;
            moveLeftEnd.disabled = true;
        }

        if ((Number(btnNumSpan.textContent)) < 6) {
            moveRightEnd.disabled = false;
            moveRight.disabled = false;
        }
    }



}


function moveToRightEnd() {


    if (window.innerWidth < 1280) {

        if ((Number(btnNumSpan.textContent)) < 8) {

            btnNumSpan.innerHTML = 8;

            moveRightEnd.disabled = true;
            moveRight.disabled = true;

            moveLeftEnd.disabled = false;
            moveLeft.disabled = false;


        }

    }


    if (window.innerWidth < 768) {

        if ((Number(btnNumSpan.textContent)) < 16) {

            btnNumSpan.innerHTML = 16;

            moveRightEnd.disabled = true;
            moveRight.disabled = true;

            moveLeftEnd.disabled = false;
            moveLeft.disabled = false;


        }


    }






    if ((Number(btnNumSpan.textContent)) < 6) {

        btnNumSpan.innerHTML = 6;

        moveRightEnd.disabled = true;
        moveRight.disabled = true;

        moveLeftEnd.disabled = false;
        moveLeft.disabled = false;


    }

}

function moveToLeftEnd() {




    if ((Number(btnNumSpan.textContent)) > 1) {

        btnNumSpan.innerHTML = 1;

        moveLeftEnd.disabled = true;
        moveLeft.disabled = true;

        moveRightEnd.disabled = false;
        moveRight.disabled = false;


    }

}



moveRight.addEventListener('click', moveToRight)
moveRightEnd.addEventListener('click', moveToRightEnd)


moveLeft.addEventListener('click', moveToLeft)
moveLeftEnd.addEventListener('click', moveToLeftEnd)



// ================================================== CAROUSEL =========================================================== //



document.querySelector('.our-friends-pagination').addEventListener('click', () => {


    if (Number(btnNumSpan.textContent) === 1) {


        const elem0 = document.getElementById(`${arrRandomNum[0]}`);
        const elem1 = document.getElementById(`${arrRandomNum[1]}`);
        const elem2 = document.getElementById(`${arrRandomNum[2]}`);
        const elem3 = document.getElementById(`${arrRandomNum[3]}`);
        const elem4 = document.getElementById(`${arrRandomNum[4]}`);
        const elem5 = document.getElementById(`${arrRandomNum[5]}`);
        const elem6 = document.getElementById(`${arrRandomNum[6]}`);
        const elem7 = document.getElementById(`${arrRandomNum[7]}`);

        area.append(elem0);
        area.append(elem1);
        area.append(elem2);
        area.append(elem3);
        area.append(elem4);
        area.append(elem5);
        area.append(elem6);
        area.append(elem7);
    }

    if (Number(btnNumSpan.textContent) === 2) {


        const elem0 = document.getElementById(`${arrRandomNum2[0]}`);
        const elem1 = document.getElementById(`${arrRandomNum2[1]}`);
        const elem2 = document.getElementById(`${arrRandomNum2[2]}`);
        const elem3 = document.getElementById(`${arrRandomNum2[3]}`);
        const elem4 = document.getElementById(`${arrRandomNum2[4]}`);
        const elem5 = document.getElementById(`${arrRandomNum2[5]}`);
        const elem6 = document.getElementById(`${arrRandomNum2[6]}`);
        const elem7 = document.getElementById(`${arrRandomNum2[7]}`);

        area.append(elem0);
        area.append(elem1);
        area.append(elem2);
        area.append(elem3);
        area.append(elem4);
        area.append(elem5);
        area.append(elem6);
        area.append(elem7);
    }

    if (Number(btnNumSpan.textContent) === 3) {


        const elem0 = document.getElementById(`${arrRandomNum3[0]}`);
        const elem1 = document.getElementById(`${arrRandomNum3[1]}`);
        const elem2 = document.getElementById(`${arrRandomNum3[2]}`);
        const elem3 = document.getElementById(`${arrRandomNum3[3]}`);
        const elem4 = document.getElementById(`${arrRandomNum3[4]}`);
        const elem5 = document.getElementById(`${arrRandomNum3[5]}`);
        const elem6 = document.getElementById(`${arrRandomNum3[6]}`);
        const elem7 = document.getElementById(`${arrRandomNum3[7]}`);

        area.append(elem0);
        area.append(elem1);
        area.append(elem2);
        area.append(elem3);
        area.append(elem4);
        area.append(elem5);
        area.append(elem6);
        area.append(elem7);
    }

    if (Number(btnNumSpan.textContent) === 4) {


        const elem0 = document.getElementById(`${arrRandomNum4[0]}`);
        const elem1 = document.getElementById(`${arrRandomNum4[1]}`);
        const elem2 = document.getElementById(`${arrRandomNum4[2]}`);
        const elem3 = document.getElementById(`${arrRandomNum4[3]}`);
        const elem4 = document.getElementById(`${arrRandomNum4[4]}`);
        const elem5 = document.getElementById(`${arrRandomNum4[5]}`);
        const elem6 = document.getElementById(`${arrRandomNum4[6]}`);
        const elem7 = document.getElementById(`${arrRandomNum4[7]}`);

        area.append(elem0);
        area.append(elem1);
        area.append(elem2);
        area.append(elem3);
        area.append(elem4);
        area.append(elem5);
        area.append(elem6);
        area.append(elem7);
    }

    if (Number(btnNumSpan.textContent) === 5) {


        const elem0 = document.getElementById(`${arrRandomNum5[0]}`);
        const elem1 = document.getElementById(`${arrRandomNum5[1]}`);
        const elem2 = document.getElementById(`${arrRandomNum5[2]}`);
        const elem3 = document.getElementById(`${arrRandomNum5[3]}`);
        const elem4 = document.getElementById(`${arrRandomNum5[4]}`);
        const elem5 = document.getElementById(`${arrRandomNum5[5]}`);
        const elem6 = document.getElementById(`${arrRandomNum5[6]}`);
        const elem7 = document.getElementById(`${arrRandomNum5[7]}`);

        area.append(elem0);
        area.append(elem1);
        area.append(elem2);
        area.append(elem3);
        area.append(elem4);
        area.append(elem5);
        area.append(elem6);
        area.append(elem7);
    }

    if (Number(btnNumSpan.textContent) === 6) {


        const elem0 = document.getElementById(`${arrRandomNum6[0]}`);
        const elem1 = document.getElementById(`${arrRandomNum6[1]}`);
        const elem2 = document.getElementById(`${arrRandomNum6[2]}`);
        const elem3 = document.getElementById(`${arrRandomNum6[3]}`);
        const elem4 = document.getElementById(`${arrRandomNum6[4]}`);
        const elem5 = document.getElementById(`${arrRandomNum6[5]}`);
        const elem6 = document.getElementById(`${arrRandomNum6[6]}`);
        const elem7 = document.getElementById(`${arrRandomNum6[7]}`);

        area.append(elem0);
        area.append(elem1);
        area.append(elem2);
        area.append(elem3);
        area.append(elem4);
        area.append(elem5);
        area.append(elem6);
        area.append(elem7);
    }


    if (Number(btnNumSpan.textContent) === 7) {


        const elem0 = document.getElementById(`${arrRandomNum[0]}`);
        const elem1 = document.getElementById(`${arrRandomNum[1]}`);
        const elem2 = document.getElementById(`${arrRandomNum[2]}`);
        const elem3 = document.getElementById(`${arrRandomNum[3]}`);
        const elem4 = document.getElementById(`${arrRandomNum[4]}`);
        const elem5 = document.getElementById(`${arrRandomNum[5]}`);
        const elem6 = document.getElementById(`${arrRandomNum[6]}`);
        const elem7 = document.getElementById(`${arrRandomNum[7]}`);

        area.append(elem0);
        area.append(elem1);
        area.append(elem2);
        area.append(elem3);
        area.append(elem4);
        area.append(elem5);
        area.append(elem6);
        area.append(elem7);
    }

    if (Number(btnNumSpan.textContent) === 8) {


        const elem0 = document.getElementById(`${arrRandomNum2[0]}`);
        const elem1 = document.getElementById(`${arrRandomNum2[1]}`);
        const elem2 = document.getElementById(`${arrRandomNum2[2]}`);
        const elem3 = document.getElementById(`${arrRandomNum2[3]}`);
        const elem4 = document.getElementById(`${arrRandomNum2[4]}`);
        const elem5 = document.getElementById(`${arrRandomNum2[5]}`);
        const elem6 = document.getElementById(`${arrRandomNum2[6]}`);
        const elem7 = document.getElementById(`${arrRandomNum2[7]}`);

        area.append(elem0);
        area.append(elem1);
        area.append(elem2);
        area.append(elem3);
        area.append(elem4);
        area.append(elem5);
        area.append(elem6);
        area.append(elem7);

    }



    if (Number(btnNumSpan.textContent) === 9) {


        const elem0 = document.getElementById(`${arrRandomNum3[0]}`);
        const elem1 = document.getElementById(`${arrRandomNum3[1]}`);
        const elem2 = document.getElementById(`${arrRandomNum3[2]}`);
        const elem3 = document.getElementById(`${arrRandomNum3[3]}`);
        const elem4 = document.getElementById(`${arrRandomNum3[4]}`);
        const elem5 = document.getElementById(`${arrRandomNum3[5]}`);
        const elem6 = document.getElementById(`${arrRandomNum3[6]}`);
        const elem7 = document.getElementById(`${arrRandomNum3[7]}`);

        area.append(elem0);
        area.append(elem1);
        area.append(elem2);
        area.append(elem3);
        area.append(elem4);
        area.append(elem5);
        area.append(elem6);
        area.append(elem7);
    }

    if (Number(btnNumSpan.textContent) === 10) {


        const elem0 = document.getElementById(`${arrRandomNum4[0]}`);
        const elem1 = document.getElementById(`${arrRandomNum4[1]}`);
        const elem2 = document.getElementById(`${arrRandomNum4[2]}`);
        const elem3 = document.getElementById(`${arrRandomNum4[3]}`);
        const elem4 = document.getElementById(`${arrRandomNum4[4]}`);
        const elem5 = document.getElementById(`${arrRandomNum4[5]}`);
        const elem6 = document.getElementById(`${arrRandomNum4[6]}`);
        const elem7 = document.getElementById(`${arrRandomNum4[7]}`);

        area.append(elem0);
        area.append(elem1);
        area.append(elem2);
        area.append(elem3);
        area.append(elem4);
        area.append(elem5);
        area.append(elem6);
        area.append(elem7);
    }


    if (Number(btnNumSpan.textContent) === 11) {


        const elem0 = document.getElementById(`${arrRandomNum5[0]}`);
        const elem1 = document.getElementById(`${arrRandomNum5[1]}`);
        const elem2 = document.getElementById(`${arrRandomNum5[2]}`);
        const elem3 = document.getElementById(`${arrRandomNum5[3]}`);
        const elem4 = document.getElementById(`${arrRandomNum5[4]}`);
        const elem5 = document.getElementById(`${arrRandomNum5[5]}`);
        const elem6 = document.getElementById(`${arrRandomNum5[6]}`);
        const elem7 = document.getElementById(`${arrRandomNum5[7]}`);

        area.append(elem0);
        area.append(elem1);
        area.append(elem2);
        area.append(elem3);
        area.append(elem4);
        area.append(elem5);
        area.append(elem6);
        area.append(elem7);
    }


    if (Number(btnNumSpan.textContent) === 12) {


        const elem0 = document.getElementById(`${arrRandomNum6[0]}`);
        const elem1 = document.getElementById(`${arrRandomNum6[1]}`);
        const elem2 = document.getElementById(`${arrRandomNum6[2]}`);
        const elem3 = document.getElementById(`${arrRandomNum6[3]}`);
        const elem4 = document.getElementById(`${arrRandomNum6[4]}`);
        const elem5 = document.getElementById(`${arrRandomNum6[5]}`);
        const elem6 = document.getElementById(`${arrRandomNum6[6]}`);
        const elem7 = document.getElementById(`${arrRandomNum6[7]}`);

        area.append(elem0);
        area.append(elem1);
        area.append(elem2);
        area.append(elem3);
        area.append(elem4);
        area.append(elem5);
        area.append(elem6);
        area.append(elem7);
    }


    if (Number(btnNumSpan.textContent) === 13) {


        const elem0 = document.getElementById(`${arrRandomNum[0]}`);
        const elem1 = document.getElementById(`${arrRandomNum[1]}`);
        const elem2 = document.getElementById(`${arrRandomNum[2]}`);
        const elem3 = document.getElementById(`${arrRandomNum[3]}`);
        const elem4 = document.getElementById(`${arrRandomNum[4]}`);
        const elem5 = document.getElementById(`${arrRandomNum[5]}`);
        const elem6 = document.getElementById(`${arrRandomNum[6]}`);
        const elem7 = document.getElementById(`${arrRandomNum[7]}`);

        area.append(elem0);
        area.append(elem1);
        area.append(elem2);
        area.append(elem3);
        area.append(elem4);
        area.append(elem5);
        area.append(elem6);
        area.append(elem7);
    }


    if (Number(btnNumSpan.textContent) === 14) {


        const elem0 = document.getElementById(`${arrRandomNum2[0]}`);
        const elem1 = document.getElementById(`${arrRandomNum2[1]}`);
        const elem2 = document.getElementById(`${arrRandomNum2[2]}`);
        const elem3 = document.getElementById(`${arrRandomNum2[3]}`);
        const elem4 = document.getElementById(`${arrRandomNum2[4]}`);
        const elem5 = document.getElementById(`${arrRandomNum2[5]}`);
        const elem6 = document.getElementById(`${arrRandomNum2[6]}`);
        const elem7 = document.getElementById(`${arrRandomNum2[7]}`);

        area.append(elem0);
        area.append(elem1);
        area.append(elem2);
        area.append(elem3);
        area.append(elem4);
        area.append(elem5);
        area.append(elem6);
        area.append(elem7);

    }


    if (Number(btnNumSpan.textContent) === 15) {


        const elem0 = document.getElementById(`${arrRandomNum3[0]}`);
        const elem1 = document.getElementById(`${arrRandomNum3[1]}`);
        const elem2 = document.getElementById(`${arrRandomNum3[2]}`);
        const elem3 = document.getElementById(`${arrRandomNum3[3]}`);
        const elem4 = document.getElementById(`${arrRandomNum3[4]}`);
        const elem5 = document.getElementById(`${arrRandomNum3[5]}`);
        const elem6 = document.getElementById(`${arrRandomNum3[6]}`);
        const elem7 = document.getElementById(`${arrRandomNum3[7]}`);

        area.append(elem0);
        area.append(elem1);
        area.append(elem2);
        area.append(elem3);
        area.append(elem4);
        area.append(elem5);
        area.append(elem6);
        area.append(elem7);
    }


    if (Number(btnNumSpan.textContent) === 16) {


        const elem0 = document.getElementById(`${arrRandomNum4[0]}`);
        const elem1 = document.getElementById(`${arrRandomNum4[1]}`);
        const elem2 = document.getElementById(`${arrRandomNum4[2]}`);
        const elem3 = document.getElementById(`${arrRandomNum4[3]}`);
        const elem4 = document.getElementById(`${arrRandomNum4[4]}`);
        const elem5 = document.getElementById(`${arrRandomNum4[5]}`);
        const elem6 = document.getElementById(`${arrRandomNum4[6]}`);
        const elem7 = document.getElementById(`${arrRandomNum4[7]}`);

        area.append(elem0);
        area.append(elem1);
        area.append(elem2);
        area.append(elem3);
        area.append(elem4);
        area.append(elem5);
        area.append(elem6);
        area.append(elem7);
    }


});

// ↑ да, СТЫДНО


// ==================================================  POPUP =========================================================== //





const overlay = document.querySelector(".overlay");
const windowModal = document.querySelector('.modal-wrapper');



const artPets = document.querySelectorAll(".our-friends-item");
const carousel = document.getElementById("carouselka");


const openModal = () => {
    windowModal.style.display = 'block';


    document.querySelector("html").classList.add('hidden')


}

const closeModal = () => {
    windowModal.style.display = 'none';


    document.querySelector("html").classList.remove('hidden')
}


carousel.addEventListener('click', e => {

    let articlePet = e.target.closest('.our-friends-item')

    if (!articlePet) return;

    openModal();



    let indexPet = e.target.closest('.our-friends-item').dataset.index;
    console.log(indexPet)
    createPopup(indexPet);

});


const popupButtonX = document.querySelector('.popup__buttonX')


overlay.addEventListener('click', closeModal);
popupButtonX.addEventListener('click', closeModal);




// =================================================== POPUP ====================================== //


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