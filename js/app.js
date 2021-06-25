class Clock {
    formatted = false;

    constructor() {}

    getCurrentTime() {
        return new Date()
            .toLocaleTimeString('en-IT', {
                hour12: this.formatted
            });
    }

    toggleFormatting() {
        this.formatted = !this.formatted;
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
