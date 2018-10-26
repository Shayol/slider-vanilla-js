import "@babel/polyfill";
import "../scss/main.scss";

import Wrapper from "./wrapper";
import shuffleArray from "./shufflearray";



window.addEventListener("load", () => {

    let sliderR = document.querySelector(".slider--right");
    let sliderL = document.querySelector(".slider--left");

    let imgsR = sliderR.querySelectorAll(".slider__img");
    let imgsL = sliderL.querySelectorAll(".slider__img");
    let imgs = ["../img/image-1.jpg", "../img/image-2.jpg", "../img/image-3.jpg", "../img/image-4.jpg", "../img/image-5.jpg"];

    let shuffleR = sliderR.querySelector(".slider__shuffle");
    let shuffleL = sliderL.querySelector(".slider__shuffle");

    let addImg = document.querySelector("form.add-img");


    // imgsR.forEach(img => {
    //     img.addEventListener("load", () => {
    //         img.style.opacity = "1";
    //     });
    // });




    function initR() {

        let k = 1;

        setTimeout(animation, 2500);

        async function animation() {
            let n = k;

            for (let i = 0, l = imgsR.length; i < l; i++) {
                imgsR[i].style.opacity = "0";
            }


            await new Promise((resolve, reject) => {

                setTimeout(() => {

                    for (let i = 0, l = imgsR.length; i < l; i++ , n++) {
                        if (n >= indexesR.length) {
                            n = 0;
                        }

                        imgsR[i].style.backgroundImage = `url(${imgs[indexesR[n]]})`;
                        imgsR[i].innerText = indexesR[n] + 1;
                        imgsR[i].style.opacity = "1";
                    }

                    resolve();
                }, 700);

            });

            k++
            if (k >= indexesR.length) {
                k = 0;
            }
            setTimeout(animation, 2500);
        }
    }

    function initL() {

        let k = indexesL.length - 1;

        setTimeout(animation, 2500);

        async function animation() {
            let n = k;

            for (let i = 0, l = imgsL.length; i < l; i++) {
                imgsL[i].style.opacity = "0";
            }

            await new Promise((resolve, reject) => {

                setTimeout(() => {

                    for (let i = 0, l = imgsL.length; i < l; i++ , n++) {
                        if (n >= indexesL.length) {
                            n = 0;
                        }
                        imgsL[i].style.backgroundImage = `url(${imgs[indexesL[n]]})`;
                        imgsL[i].innerText = indexesL[n] + 1;
                        imgsL[i].style.opacity = "1";
                    }

                    resolve();
                }, 700);

            });

            k--;
            if (k < 0) {
                k = indexesL.length - 1;
            }
            setTimeout(animation, 2500);

        }
    }



    let imgsWrapper = new Wrapper(imgs);

    let indexesR = imgsWrapper.getIndexes();
    imgsWrapper.subscribe(indexesR);

    let indexesL = imgsWrapper.getIndexes();
    imgsWrapper.subscribe(indexesL);

    shuffleR.addEventListener('click', () => shuffleArray(indexesR));
    shuffleL.addEventListener('click', () => shuffleArray(indexesL));

    initR();
    initL();

});