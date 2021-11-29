const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const hundredth = document.getElementById('hundredth');

// buttons
const btn_start = document.getElementById('start');
const btn_pause = document.getElementById('pause');
const btn_reset = document.getElementById('reset');

//containers
const container = document.getElementById('container');
const btn_container = document.getElementById('btn-container');

// global variables
var changeTimer = null;
var lapOn = false;
var lapContainerExist = false;
var [hr, min, sec, hd] = [0, 0, 0, 0];
var [hrFormat, minFormat, secFormat, hdFormat] = ['00', '00', '00', '00'];
var lapQuantity = 0;


btn_start.addEventListener('click', () => {
    startTimer();
    if(lapOn === false){
        freezeLapOn();
        lapOn = true;
    }
})

btn_pause.addEventListener('click', () => {
    pauseTimer();
})

btn_reset.addEventListener('click', () => {
    resetTimer();
    if(lapOn === true){
        freezeLapOff();
        lapOn = false;
    }
})

function startTimer() {
    changeTimer = setInterval(() => {
        hd += 1
        if(hd === 100){
            hd = 0;
            sec += 1
            if(sec === 60){
                sec = 0; //reset seconds value
                min += 1; //plus in minutes
                if(min === 60){
                    min = 0; //reset minutes value
                    hr += 1; // plus in hours
                    hrFormat = formatTime(hr, hrFormat);
                    hours.innerHTML = hrFormat;
                }
                minFormat = formatTime(min, minFormat);
                minutes.innerHTML = minFormat;
            }
            secFormat = formatTime(sec,secFormat);
            seconds.innerHTML = secFormat;
            }
            hdFormat = formatTime(hd,hdFormat);
        hundredth.innerHTML = hdFormat;
        
    }, 10)
}

function pauseTimer() {
    clearInterval(changeTimer);
}

function resetTimer() {
    [hr, min, sec, hd] = [0, 0, 0, 0]
    hours.innerHTML = '00';
    minutes.innerHTML = '00';
    seconds.innerHTML = '00';
    hundredth.innerHTML = '00';
    clearInterval(changeTimer)
}

function formatTime(timeToFormat, timeFormated) {
    timeToFormat < 10? (timeFormated = '0' + timeToFormat) : (timeFormated = parseInt(timeToFormat));
    return timeFormated;
}

function createBtn(text, id) {
    const btn = document.createElement('button');
    btn.innerHTML = text;
    btn.id = id;

    return btn;
}

function freezeLapOn() {
    const btn_lap = createBtn('FREEZE LAP', 'freeze')
    btn_container.appendChild(btn_lap);

    if(lapContainerExist === false){
        createLapContainer();
        lapContainerExist = true;
    }
    
    btn_lap.addEventListener('click', () =>{
        freezeLapTime();
    })
}

function freezeLapOff() {
    const btn = document.getElementById('freeze');
    const lap_container = document.getElementById('lap-container');

    btn.remove();
    lap_container.remove();
    lapQuantity = 0;
    lapContainerExist = false;
}

function createLapContainer() {
    const lap_container = document.createElement('div');
    lap_container.id = 'lap-container';
    container.appendChild(lap_container);
}

function freezeLapTime() {
    const lap = document.createElement('p');
    const lap_container = document.getElementById('lap-container');

    hrFormat = formatTime(hr, hrFormat);
    minFormat = formatTime(min, minFormat);
    secFormat = formatTime(sec,secFormat);
    hdFormat = formatTime(hd,hdFormat);

    lap.innerHTML = `Lap ${lapQuantity}: ${hrFormat}:${minFormat}:${secFormat}.${hdFormat}`;
    lapQuantity++;
    lap_container.appendChild(lap);
}