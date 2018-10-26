export default function Wrapper(arr) {
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