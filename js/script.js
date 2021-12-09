"use strict";


window.addEventListener("load", (event => animationGo(event)))

function animationGo(event) {
    const textPageEl = document.querySelectorAll('.text-page__content p');
    const headerEl = document.querySelector('.header');
    const block1ElItem = document.querySelectorAll('.block1__item');
    const block2ImgBox = document.querySelectorAll('.block2__img-box');
    const block3ElItem = document.querySelectorAll('.block3__item-block');
    const block4Form = document.querySelector('.block4__form');
    const block4Contacts = document.querySelector('.block4__contacts');
    window.addEventListener("scroll", (ev => scroll(ev)));

    function scroll(ev) {
        const heightWindow = window.innerHeight;
        const valueGoAnimation = heightWindow * 65 / 100;
        const positionElHeader = headerEl.getBoundingClientRect();
        const positionTextPageEL1 = textPageEl[0].getBoundingClientRect();
        const positionTextPageEL2 = textPageEl[1].getBoundingClientRect();
        const positionTextPageEL3 = textPageEl[2].getBoundingClientRect();
        const positionTextPageEL4 = textPageEl[3].getBoundingClientRect();

        const positionBlock1El1 = block1ElItem[0].getBoundingClientRect();
        // const positionBlock1El2 = block1ElItem[1].getBoundingClientRect();
        // const positionBlock1El3 = block1ElItem[2].getBoundingClientRect();
        // const positionBlock1El4 = block1ElItem[3].getBoundingClientRect();

        if (positionElHeader.bottom <= valueGoAnimation) {
            textPageEl[0].classList.add("animate__rotateInDownLeft");
        } else {
            textPageEl[0].classList.remove("animate__rotateInDownLeft");
        }


        if (positionTextPageEL1.bottom <= valueGoAnimation) {
            textPageEl[1].classList.add("animate__rotateInDownRight");
        } else {
            textPageEl[1].classList.remove("animate__rotateInDownRight");
        }


        if (positionTextPageEL2.bottom <= valueGoAnimation) {
            textPageEl[2].style.cssText = "animation: backInUp 1s forwards; opacity: 1;";
        } else {
            textPageEl[2].style.removeProperty("animation");
            textPageEl[3].style.removeProperty("opacity");
        }


        if (positionTextPageEL3.bottom <= valueGoAnimation) {
            textPageEl[3].style.cssText = "animation: backInUp 1s forwards; opacity: 1;";
        } else {
            textPageEl[3].style.removeProperty("animation");
            textPageEl[3].style.removeProperty("opacity");
        }


        if (positionTextPageEL4.bottom <= valueGoAnimation) {
            block1ElItem[0].classList.add("animate__lightSpeedInLeft");
            block1ElItem[0].style.opacity = '1';
            block1ElItem[1].classList.add("animate__lightSpeedInRight");
            block1ElItem[1].style.opacity = '1';
        } else {
            block1ElItem[0].classList.remove("animate__lightSpeedInLeft");
            block1ElItem[0].style.opacity = '0';
            block1ElItem[1].classList.remove("animate__lightSpeedInRight");
            block1ElItem[1].style.opacity = '0';
        }


        if (positionBlock1El1.bottom <= valueGoAnimation + 50) {
            block1ElItem[2].classList.add("animate__lightSpeedInLeft");
            block1ElItem[2].style.opacity = '1';
            block1ElItem[3].classList.add("animate__lightSpeedInRight");
            block1ElItem[3].style.opacity = '1';
        } else {
            block1ElItem[2].classList.remove("animate__lightSpeedInLeft");
            block1ElItem[2].style.opacity = '0';
            block1ElItem[3].classList.remove("animate__lightSpeedInRight");
            block1ElItem[3].style.opacity = '0';
        }


        if (document.querySelector('.block1').getBoundingClientRect().bottom <= valueGoAnimation) {
            block2ImgBox[0].style.cssText = 'animation: fadeln 1s forwards;'
            block2ImgBox[1].style.cssText = 'animation: fadeln 1s 0.2s forwards;'
            block2ImgBox[2].style.cssText = 'animation: fadeln 1s 0.4s forwards;'
            block2ImgBox[3].style.cssText = 'animation: fadeln 1s 0.6s forwards;'
        } else {
            block2ImgBox[0].style.removeProperty('animation');
            block2ImgBox[1].style.removeProperty('animation');
            block2ImgBox[2].style.removeProperty('animation');
            block2ImgBox[3].style.removeProperty('animation');
        }


        if (document.querySelector('.block2').getBoundingClientRect().bottom <= valueGoAnimation) {
            block3ElItem[2].classList.add("animate__flipInY");
        } else {
            block3ElItem[2].classList.remove("animate__flipInY");
        }

        if (document.querySelector('.block2').getBoundingClientRect().bottom <= valueGoAnimation - 150) {
            block3ElItem[1].classList.add("animate__flipInY");
        } else {
            block3ElItem[1].classList.remove("animate__flipInY");
        }

        if (document.querySelector('.block2').getBoundingClientRect().bottom <= valueGoAnimation - 300) {
            block3ElItem[0].classList.add("animate__flipInY");
        } else {
            block3ElItem[0].classList.remove("animate__flipInY");
        }


        if (document.querySelector('.block3').getBoundingClientRect().bottom <= valueGoAnimation) {
            block4Form.classList.add("animate__zoomInLeft");
            block4Form.style.opacity = '1';
            block4Contacts.classList.add("animate__zoomInRight");
            block4Contacts.style.opacity = '1';
        } else {
            block4Form.classList.remove("animate__zoomInLeft");
            block4Form.style.opacity = '0';
            block4Contacts.classList.remove("animate__zoomInRight");
            block4Contacts.style.opacity = '0';
        }

    }
}