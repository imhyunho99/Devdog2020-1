var form,
    input,
    greeting,
    formLimit,
    inputLimit,
    greetingLimit,
    greetingBirthday;

const USER_LS = "currentUser",//local storage
    SHOWING_CN = "showing", //ClassName
    LIMIT_LS = "currentLimit", 
    SHOWINGLIMIT_CN = "showingLimit",
    BIRTHDAY_LS="birthday",
    SHOWINGBIRTHDAY_CN="showingBirthday";

function saveName(text) {//이름저장
    localStorage.setItem(USER_LS, text);
}

function saveLimit(number){//주량저장
    localStorage.setItem(LIMIT_LS,number);
}
function saveBirthday(date){//생일저장
    localStorage.setItem(BIRTHDAY_LS, date);
}
function handlesubmit(event) {
    event.preventDefault();//submit하면 자동으로 input에 쓰여있던 value가 사라지는걸 막는다.
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
function handlesubmitBirthday(event){
    event.preventDefault();
    const birthday=(document.getElementById("birthday").value).toString();//localstorage는 date타입을 저장 할 수 없어서 문자열로 변환
    paintBirthday();
    saveBirthday(birthday);
}
function askName() {
    form.classList.add(SHOWING_CN);//showing이란 클래스이름 추가
    form.addEventListener("submit", handlesubmit);//저장을 하면 handlesubmit이 실행
}

function askLimit(){
    formLimit.classList.add(SHOWINGLIMIT_CN);
    formLimit.addEventListener("submit",handlesubmitLimit);
}
function askBirthday(){
    document.querySelector(".js-birthday").classList.add(SHOWINGBIRTHDAY_CN);
    document.querySelector(".js-birthday").addEventListener("submit",handlesubmitBirthday);
}
function paintGreeting(text) {
    form.classList.remove(SHOWING_CN);//입력을 받은 후에 showing이란 클래스이름을 삭제한다
    greeting.classList.add(SHOWING_CN);//greeting에 showing클래스이름 추가
    greeting.innerText = `Hello ${text}`;//이름 화면에 출력
}

function paintLimit(number){
    formLimit.classList.remove(SHOWINGLIMIT_CN);
    greetingLimit.classList.add(SHOWINGLIMIT_CN);
    greetingLimit.innerText=`당신의 주량은 소주 ${number}잔입니다.`//주량 화면에 출력
}
function paintBirthday(){
    document.querySelector(".js-birthday").classList.remove(SHOWINGBIRTHDAY_CN);//생일을 받은 후엔 보이지않게 showingbirthday를 지운다
}
function load() {
    const currentUser = localStorage.getItem(USER_LS);//localstorage에서 이름 가져오기
    const currentLimit = localStorage.getItem(LIMIT_LS);//localstorage에서 주량 가져오기
    const birthday = localStorage.getItem(BIRTHDAY_LS);//localstorage에서 생일 가져오기
    if (currentUser === null) {//이름이 저장되어있지않으면 askName동작
        askName();
    }
    else {
        paintGreeting(currentUser);//아니면 안내문 출력
    }
    if(currentLimit===null){
        askLimit();
    }else{
        paintLimit(currentLimit);
    }
    if(birthday===null){
        askBirthday();
    }
}

function _init() {
    //localStorage.clear();
    load();
}