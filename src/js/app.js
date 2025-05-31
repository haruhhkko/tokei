import Clock from './clock.js';

window.addEventListener('DOMContentLoaded', () => {
    const clock = new Clock();
    
    document.getElementById('start').addEventListener('click', () => {
        clock.start();
    });

    document.getElementById('stop').addEventListener('click', () => {
        clock.stop();
    });

    // 初期表示時に時計を開始
    clock.start();
});