const progressInnner = document.querySelector(".progress-inner");
const startBtn = document.querySelector("#start-btn");
const stopBtn = document.querySelector("#stop-btn");
const resetBtn = document.querySelector("#reset-btn");

let width = 0;
let interval = null;

startBtn.addEventListener("click", () => {
    if (!interval) { 
        interval = setInterval(() => {
            if (width >= 101) {
                clearInterval(interval);
                interval = null;
            } else {
                progressInnner.style.width = `${width}%`;
                width++;
            }
        }, 50);
    }
});

stopBtn.addEventListener("click", () => {
    if (interval) {
        clearInterval(interval);
        interval = null;
    }
});

resetBtn.addEventListener("click", () => {
    width = 0;
    progressInnner.style.width = `${width}%`;
    if (interval) {
        clearInterval(interval);
        interval = null;
    }
});
