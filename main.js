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