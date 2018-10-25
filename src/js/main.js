import "../scss/main.scss";


window.addEventListener("load", () => {

    let sliderR = document.querySelector(".slider--right");
    let sliderL = document.querySelector(".slider--left");

    let imgsR = sliderR.querySelectorAll(".slider__img");
    let imgsL = sliderL.querySelectorAll(".slider__img");
    let imgs = ["../img/image-1.jpg", "../img/image-2.jpg", "../img/image-3.jpg", "../img/image-4.jpg", "../img/image-5.jpg"];

    function Wrapper(arr) {
        let list = arr;
        let subscribers = [];

        this.push = function (img) {
            list.push(img);
            notify();
        }

        this.subscribe = function (sub) {
            subscribers.push(sub);
        }

        this.length = function () {
            return list.length;
        }

        this.getIndexes = function () {
            return [...list.keys()];
        }

        function notify() {
            subscribers.forEach(el => {
                el.push(this.length() - 1);
            });
        }
    }



    function initR() {

        let k = 1;

        setInterval(animation, 1500);

        function animation() {
            let n = k;

            for (let i = 0, l = imgsR.length; i < l; i++ , n++) {

                if (n >= indexesR.length) {
                    n = 0;
                }
                imgsR[i].src = imgs[indexesR[n]];
            }

            k++
            if (k >= indexesR.length) {
                k = 0;
            }
            ;
        }
    }

    function initL() {

        let k = indexesL.length - 1;

        setInterval(animation, 1500);

        function animation() {
            let n = k;

            for (let i = 0, l = imgsL.length; i < l; i++ , n++) {

                if (n >= indexesL.length) {
                    n = 0;
                }
                imgsL[i].src = imgs[indexesL[n]];
            }

            k--;
            if (k < 0) {
                k = indexesL.length - 1;
            }

        }
    }



    let imgsWrapper = new Wrapper(imgs);

    let indexesR = imgsWrapper.getIndexes();
    imgsWrapper.subscribe(indexesR);

    let indexesL = imgsWrapper.getIndexes();
    imgsWrapper.subscribe(indexesL);

    initR();
    initL();

});