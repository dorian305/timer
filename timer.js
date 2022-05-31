export class Timer {
    constructor(callback, delay) {
        this.callback = callback;     // Function that will execute when the timer expires
        this.remainingTime = delay;   // Time until the timer expires, in milliseconds
        this.startedTime = 0;         // Date when the timer was started, in milliseconds
        this.pausedTime = 0;          // Date when the timer was paused, in milliseconds
        this.timerId = 0;             // The ID of the timer
    }

    // Pausing the timer
    pause() {
        this.pausedTime = new Date();
        clearTimeout(this.timerId);
        this.remainingTime = this.remainingTime - (this.pausedTime - this.startedTime);
    }

    // Resuming the timer
    resume() {
        this.startedTime = new Date();
        clearTimeout(this.timerId);
        this.timerId = setTimeout(() => this.callback(), this.remainingTime);
    }

    // Start the timer
    start() {
        this.startedTime = new Date();
        this.timerId = setTimeout(() => this.callback(), this.remainingTime);
    }

    // Destroy the timer
    destroy() {
        clearTimeout(this.timerId);
    }
}
