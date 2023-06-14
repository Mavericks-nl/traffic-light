let countDown = null;
let currentColor = null;
let isStarted = false; // Boolean
let countDownVariable;
let startValue;

// COLORS INITIAL DECLARATIONS
let color = {
    red: {
        secondButton: {
            start: {
                isCountDown: true,
                start: 30,
                speed: 1 // Seconds
            }
        },
        thirdButton: {
            start: {
                isCountDown: true,
                start: 50,
                speed: 0.1 // Seconds
            }
        },
    },
    yellow: {
        secondButton: {
            start: {
                isCountDown: true,
                start: 8,
                speed: 1 // Seconds
            }
        },
        thirdButton: {
            start: {
                isCountDown: true,
                start: 30,
                speed: 0.1 // Seconds
            }
        },
    },
    green: {
        secondButton: {
            start: {
                isCountDown: false,
                start: 0,
                speed: 1 // Seconds
            }
        },
        thirdButton: {
            start: {
                isCountDown: false,
                start: 0,
                speed: 0.1 // Seconds
            }
        },
    }
}


const startTrafficLight = (start, speed, color, button) => {
    document.querySelectorAll(`.tLight>div`)
    .forEach((v)=>v.classList.remove("active"));
    setTimeout(() => {
        document.querySelector(`.tLight>div.${color}`).classList.add("active");
    }, speed);
    startCountDown (start, speed, color, button);
}

const switchTrafficLightButton = (start, speed, color, button) => {
    document.querySelectorAll(`.tLight>div`)
    .forEach((v)=>v.classList.remove("active"));
    setTimeout(() => {
        document.querySelector(`.tLight>div.${color}`).classList.add("active");
    }, speed);
    clearInterval(countDownVariable);
    startCountDown (start, speed, color, button);
}

const nextCountDown = (colorList, button) => {
    if(colorList == "red"){
        currentColor = "yellow";
    } else {
        currentColor = "green";
    }
    isStarted = true;
    let isCountDown = color[currentColor][button+"Button"].start.isCountDown;
    let start = color[currentColor][button+"Button"].start.start;
    let speed = color[currentColor][button+"Button"].start.speed;

    clearInterval (countDownVariable);
    if (currentColor == "green") {
        document.querySelectorAll(`.tLight>div`)
        .forEach((v)=>v.classList.remove("active"));
        document.querySelector(`.tLight>div.${currentColor}`).classList.add("active");
        toScreen (0);
    } else {
        if(isCountDown === true)
            startTrafficLight (start, speed, currentColor, button);
    }
}

const startCountDown = (start, speed, color, button) => {
    startValue = start;
    countDownVariable = setInterval(() => {
        toScreen (startValue);
        if(startValue == 1) {
            nextCountDown (color, button);
        }
        startValue = (parseFloat(startValue) - 1);
    }, (parseFloat(speed)*1000));
}

const toScreen = (v) => {
    document.querySelector("div.count>input").value = v;
}

const stopFunction = () => {
    document.querySelectorAll(`.tLight>div`)
    .forEach((v)=>v.classList.remove("active"));
    clearInterval (countDownVariable);
    toScreen ("");
    countDown = null;
    currentColor = null;
    isStarted = false; 
}

const secondStartFunction = () => {
    
    // If countdown is started ===============
    if(isStarted) {

        if(currentColor){
            let isCountDown = color[currentColor].secondButton.start.isCountDown;
            let start = startValue;
            let speed = color[currentColor].secondButton.start.speed;
            if(isCountDown === true){
                switchTrafficLightButton (start, speed, currentColor, "second");
            }
        }

    // If countdown is not started ===============
    } else {
        isStarted = true;
        if(currentColor == null){
            currentColor = "red";
            let isCountDown = color[currentColor].secondButton.start.isCountDown;
            let start = color[currentColor].secondButton.start.start;
            let speed = color[currentColor].secondButton.start.speed;
            if(isCountDown === true){
                startTrafficLight (start, speed, currentColor, "second");
            }
        }
    }
}
const thirdStartFunction = () => {
    
    // If countdown is started ===============
    if(isStarted) {

        if(currentColor){
            let isCountDown = color[currentColor].thirdButton.start.isCountDown;
            let start = startValue;
            let speed = color[currentColor].thirdButton.start.speed;
            if(isCountDown === true){
                switchTrafficLightButton (start, speed, currentColor, "third");
            }
        }

    // If countdown is not started ===============
    } else {
        isStarted = true;
        if(currentColor == null){
            currentColor = "red";
            let isCountDown = color[currentColor].thirdButton.start.isCountDown;
            let start = color[currentColor].thirdButton.start.start;
            let speed = color[currentColor].thirdButton.start.speed;
            if(isCountDown === true){
                startTrafficLight (start, speed, currentColor, "third");
            }
        }
    }
}

let getButtons = document.querySelectorAll(".buttons>button");
getButtons.forEach( (v) => {
    v.onclick = (v) => {
        let class_ = v.target.className;
        switch (class_) {
            case "stopper":
                stopFunction ();
                break;
            case "second-start":
                secondStartFunction ();
                break;
            case "third-start":
                thirdStartFunction ();
                break;
            default:
                break;
        }
    }
})