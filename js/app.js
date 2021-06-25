class Clock {
    constructor() {}

    getCurrentTime() {
        const date = new Date();
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();

        if (hours < 10) hours = `0${hours}`
        if (minutes < 10) minutes = `0${minutes}`
        if (seconds < 10) seconds = `0${seconds}`

        return `${hours}:${minutes}:${seconds}`;
    }
}

const clock = new Clock();

const div_clock = document.querySelector('.clock');

div_clock.innerHTML = clock.getCurrentTime();
setInterval(() => div_clock.innerHTML = clock.getCurrentTime(), 1000);
