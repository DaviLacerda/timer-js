const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');

// buttons
const btn_start = document.getElementById('start');
const btn_pause = document.getElementById('pause');
const btn_reset = document.getElementById('reset');

// global variables
var changeTimer = null;
var [hr, min, sec] = [4, 59, 55]

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
    let [hrFormat, minFormat, secFormat] = ['00', '00', '00'] //for beautiful timer :)
    changeTimer = setInterval(() => {
        sec += 1
        if(sec === 60){
            sec = 0; //reset seconds value
            min += 1; //plus in minutes
            if(min === 60){
                min = 0; //reset minutes value
                hr += 1; // plus in hours
                hr < 10? (hrFormat = '0' + hr) : (hrFormat = parseInt(hr));
                hours.innerHTML = hrFormat;
            }
            min < 10? (minFormat = '0' + min) : (minFormat = parseInt(min));
            minutes.innerHTML = minFormat;
        }
        sec < 10? (secFormat = '0' + sec) : (secFormat = parseInt(sec));
        seconds.innerHTML = secFormat;
    }, 1000)
}

function pauseTimer() {
    clearInterval(changeTimer);
}

function resetTimer() {
    [hr, min, sec] = [0, 0, 0]
    hours.innerHTML = '00';
    minutes.innerHTML = '00';
    seconds.innerHTML = '00';
    clearInterval(changeTimer)
}