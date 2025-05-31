describe('Clock class', () => {
    let clock;

    beforeEach(() => {
        clock = new Clock();
    });

    test('should start the clock', () => {
        clock.start();
        expect(clock.isRunning).toBe(true);
    });

    test('should stop the clock', () => {
        clock.start();
        clock.stop();
        expect(clock.isRunning).toBe(false);
    });

    test('should update the time', () => {
        clock.start();
        const initialTime = clock.currentTime;
        clock.update();
        expect(clock.currentTime).not.toBe(initialTime);
    });

    test('should not update time when stopped', () => {
        clock.start();
        clock.stop();
        const initialTime = clock.currentTime;
        clock.update();
        expect(clock.currentTime).toBe(initialTime);
    });
});