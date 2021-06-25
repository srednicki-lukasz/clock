class Clock {
    isFormatted = false;

    constructor() {}

    getCurrentTime() {
        const currentTime = new Date().toLocaleTimeString('en-IT', { hour12: this.isFormatted });

        if (this.isFormatted && currentTime.charAt(0) < 10) {
            return `0${currentTime}`;
        }

        return currentTime;
    }

    toggleFormatting() {
        this.isFormatted = !this.isFormatted;
    }
}

const clock = new Clock();

const div_clock = document.querySelector('.clock');
const btn_format = document.querySelector('.format');

div_clock.innerHTML = clock.getCurrentTime();
setInterval(() => div_clock.innerHTML = clock.getCurrentTime(), 1000);

btn_format.addEventListener('click', () => {
    clock.toggleFormatting();
    div_clock.innerHTML = clock.getCurrentTime();
});
