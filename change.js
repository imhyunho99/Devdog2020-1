var limited = localStorage.currentLimit;
var change = document.querySelector(".js-change");
var btn = document.querySelector("#choose");
var changeToAnother = 1;//소주를 다른 알코올로 바꾼거 몇잔인지

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
function init() {
    btn.addEventListener('click', function () {
        let liquor = document.querySelector('#liquor').value;
        changer(liquor);
    })
}

init();