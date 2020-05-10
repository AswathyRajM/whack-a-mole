
const square = document.querySelectorAll('.square');
const mole = document.querySelectorAll('.mole');
var timeLeft = document.querySelector('#time-left');
var score = document.querySelector('#score');
score.textContent = 0;
var result = 0;

var currentTime = timeLeft.textContent;
currentTime = 60;

function restart(){
    let c = confirm(" Play Again?");
    if(c){
        currentTime = 60;
        result = 0 ;
        score.textContent = result;
    }

}
function randomSquare() {
    square.forEach(className => {
        className.classList.remove('mole');
    })
    let randomPosition = square[Math.floor(Math.random() * 9)];
    randomPosition.classList.add('mole');
    hitPosition = randomPosition.id;
    if(currentTime===-1)
    {
        square.forEach(className => {
        className.classList.remove('mole');
        })
        
    }
}
square.forEach(id => {
    return (id.addEventListener('mouseup', () => {
        if (id.id === hitPosition) {
            result += 1;
            score.textContent = result;
        }
    }));
})

function moveMole() {
    let timerId = null;
    timerId = setInterval(randomSquare, 1100);
}
moveMole();

function countDown(){
    timeLeft.textContent = currentTime;
    currentTime --;
    if (currentTime === -1){
        clearInterval(timerId);
        alert('GAME OVER!! YOUR FINAL SCORE IS '+ result);
    }
}
let timerId = setInterval(countDown, 1000);
