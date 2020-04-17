let limited = localStorage.currentLimit;//자신의 주량을 변수 limited에 저장
let change;
let btn;
changeToAnother = 1;
//도수를 계산해 자신의 소주 주량을 다른 음료의 주량으로 계싼

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