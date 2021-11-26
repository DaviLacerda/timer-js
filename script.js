const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');

// buttons
const btn_start = document.getElementById('start');
const btn_pause = document.getElementById('pause');
const btn_reset = document.getElementById('reset');

// global variables
var changeTimer;
var [hr, min, sec] = [0, 0, 0]

btn_start.addEventListener('click', () => {
    startTimer();
})

btn_pause.addEventListener('click', () => {
    pauseTimer();
})

btn_reset.addEventListener('click', () => {
    resetTimer();
})

function startTimer() {
    changeTimer = setInterval(() => {
        sec += 1;
        if(sec === 60){
            sec = 0;
            min += 1;
            if(min === 60){
                min = 0;
                hr += 1;
                hours.innerHTML = hr;
            }
            minutes.innerHTML = min;
        }
        seconds.innerHTML = sec;
    }, 1000)
}

function pauseTimer() {
    clearInterval(changeTimer);
}

function resetTimer() {
    [hr, min, sec] = [0, 0, 0]
    hours.innerHTML = hr;
    minutes.innerHTML = min;
    seconds.innerHTML = sec;
    clearInterval(changeTimer)
}