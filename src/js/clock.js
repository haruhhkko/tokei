class Clock {
    constructor() {
        this.timeElement = document.getElementById('time');
        this.intervalId = null;
    }

    start() {
        if (!this.intervalId) {
            this.update(); // 即座に時刻を表示
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
        const now = new Date();
        this.timeElement.textContent = now.toLocaleTimeString('ja-JP');
    }
}

export default Clock;