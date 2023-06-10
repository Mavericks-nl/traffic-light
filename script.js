const red = document.querySelector(".red");
const yellow = document.querySelector(".yellow");
const green = document.querySelector(".green");

const clickOne = document.querySelector(".first-start");
const clickTwo = document.querySelector(".second-start");
const stopper = document.querySelector(".stopper")
let countdownDisplay = document.querySelector("#input"); // HTML element to display the countdown
let countdownDuration = 60; // Countdown duration in seconds



//function to change light colors
const redLight = () => {
    red.classList.add('active')
    setTimeout(() => {
        red.classList.remove('active')
    }, 30000);
}
const yellowLight = () => {
    yellow.classList.add('active')
    setTimeout(() => {
        yellow.classList.remove('active')
    }, 8000);
}
const greenLight = () => {
    green.classList.add('active')
    setTimeout(() => {
        green.classList.remove('active')
    }, 10000);

}


function countdownTimer(duration, inputElement) {
    let timer = duration, seconds;

    let countdownInterval = setInterval(function () {
        seconds = Math.floor(timer % 60);

        seconds = seconds < 10 ? "0" + seconds : seconds;

        inputElement.value = seconds;

        if (--timer < 0) {
            clearInterval(countdownInterval);
        }
    }, 1000);
}


countdownTimer(countdownDuration, countdownDisplay);


//function call to switc lite on at click of first button.
const myFirstButton = () => {
    setTimeout(() => {
        redLight()
    }, 0);
    setTimeout(() => {
        yellowLight()
    }, 30000);
    setTimeout(() => {
        greenLight()
    }, 38000);
}





clickOne.addEventListener("click", myFirstButton(

));
//clickTwo.addEventListener("click", mySecondButton);
//stopper.addEventListener("click", stopAllLight);







