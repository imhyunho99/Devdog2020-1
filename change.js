let limited = localStorage.currentLimit;
let change;
let btn;
changeToAnother = 1;//소주를 다른 알코올로 바꾼거 몇잔인지

function changer(liquor) {

    switch (liquor) {
        case "소주":
            changeToAnother = limited * 1;
            break;
        case "맥주":
            changeToAnother = limited * 1 / 3;
            break;
        case "보드카":
            changeToAnother = limited * 0.7;
            break;
        case "와인":
            changeToAnother = limited * 0.2;
            break;
        case "위스키":
            changeToAnother = limited * 1;
            break;
        case "소맥":
            changeToAnother = limited * 0.35;
            break;
        case "바카디":
            changeToAnother = limited * 0.35;

    }

    changeToAnother = changeToAnother.toFixed(0);
    change.innerText = `당신은 ${liquor}을 ${changeToAnother}잔 마실 수 있습니다.`;
}


function __init() {
    btn.addEventListener('click', function () {
        limited = localStorage.currentLimit; // 변경
        let liquor = document.querySelector('#liquor').value;
        changer(liquor);
    })
}

window.onload = function() {
    clockContainer = document.querySelector(".js-clock");
    clockTitle = clockContainer.querySelector("h1");
    init();
    // clock

    form = document.querySelector(".js-form");
    input = form.querySelector("input");
    greeting = document.querySelector(".js-greeting");
    formLimit = document.querySelector(".js-limit");
    inputLimit = formLimit.querySelector("input");
    greetingLimit = document.querySelector(".js-greetingLimit");
    _init();
    // limit

    alcoholLeft = document.querySelector(".js-alcoholLeft");
    // game

    change = document.querySelector(".js-change");
    btn = document.querySelector("#choose");
    limited = localStorage.currentLimit;
    changeToAnother = 1;
    // change
    __init();
}