class Clock {
    constructor() {
        this.intervalId = null;
        this.time = 0;
    }

    start() {
        if (!this.intervalId) {
            this.intervalId = setInterval(() => {
                this.update();
            }, 1000);
        }
    }

    stop() {
        if (this.intervalId) {
            clearInterval(this.intervalId);
            this.intervalId = null;
        }
    }

    update() {
        this.time++;
        this.displayTime();
    }

    displayTime() {
        const hours = String(Math.floor(this.time / 3600)).padStart(2, '0');
        const minutes = String(Math.floor((this.time % 3600) / 60)).padStart(2, '0');
        const seconds = String(this.time % 60).padStart(2, '0');
        console.log(`${hours}:${minutes}:${seconds}`);
    }
}

export default Clock;