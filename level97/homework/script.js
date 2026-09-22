const progressBar = document.getElementById("progress")
let posX = 0;
function moveforward() {
    progressBar.style.position = `relative`
    posX += 5
    if (posX >= 0 && posX <= 485) {
        progressBar.style.width = `${posX}px`
    }  else {
        clearInterval(interval)
    }
}
interval = setInterval(moveforward, 10)


const h1 = document.getElementById("h1")
let seconds = 0;

const interval1 = setInterval(() => {
    seconds++;
    if (seconds >= 0 && seconds <= 60) {
        h1.textContent = `Elapsed time: ${seconds}s`;
    } else {
        clearInterval(interval1)
    }
}, 25)