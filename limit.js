const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greeting"),
    formLimit = document.querySelector(".js-limit"),
    inputLimit = formLimit.querySelector("input");
    greetingLimit = document.querySelector(".js-greetingLimit");


const USER_LS = "currentUser",//local storage
    SHOWING_CN = "showing", 
    LIMIT_LS = "currentLimit", 
    SHOWINGLIMIT_CN = "showingLimit";

function saveName(text) {
    localStorage.setItem(USER_LS, text);
}
function saveLimit(number){
    localStorage.setItem(LIMIT_LS,number);
}

function handlesubmit(event) {
    event.preventDefault();
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}
function handlesubmitLimit(event){
    event.preventDefault();
    const currentLimit=inputLimit.value;
    paintLimit(currentLimit);
    saveLimit(currentLimit);
}
function askForName() {
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handlesubmit);
}
function askLimit(){
    formLimit.classList.add(SHOWINGLIMIT_CN);
    formLimit.addEventListener("submit",handlesubmitLimit);
}
function paintGreeting(text) {
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello ${text}`;
}
function paintLimit(number){
    formLimit.classList.remove(SHOWINGLIMIT_CN);
    greetingLimit.classList.add(SHOWINGLIMIT_CN);
    greetingLimit.innerText=`당신의 주량은 소주${number}잔입니다.`
}
function loadName() {
    const currentUser = localStorage.getItem(USER_LS);
    const currentLimit = localStorage.getItem(LIMIT_LS);
    if (currentUser === null) {
        askForName();
    }
    else {
        paintGreeting(currentUser);
    }
    if(currentLimit===null){
        askLimit();
    }else{
        paintLimit(currentLimit);
    }
}
function init() {
    loadName();
}
init();