const num1 = Math.ceil(Math.random() * 10);
const num2 = Math.ceil(Math.random() * 10);

const questionEl = document.getElementById("question");

const inputEl = document.getElementById("input");

const formEl = document.getElementById("form");

const scoreEl = document.getElementById("score");

let score = JSON.parse(localStorage.getItem("score"));

if (!score) {
  score = 0;
}


scoreEl.innerText = `score: ${score}`;

// questionEl.innerText = `What is ${num1} multiplied by ${num2}?`;

const correctAns = num1 * num2;

formEl.addEventListener("submit", (e) => {
  e.preventDefault();
  const num1 = Math.ceil(Math.random() * 10);
  const num2 = Math.ceil(Math.random() * 10);
  questionEl.innerText = `What is ${num1} multiplied by ${num2}?`;
  
  const userAns = +inputEl.value;
  if (userAns === correctAns) {
    score++;
    updateLocalStorage();
  } else {
    score--;
    updateLocalStorage();
  }
});

function updateLocalStorage() {
  localStorage.setItem("score", JSON.stringify(score));
}

const loadingText = document.querySelector('.loading-text');
const bg = document.querySelector('.form');


var load = 0;
var int = setInterval(blurring, 30)
function blurring () {
    load++;
    if(load> 99){
        clearInterval(int);
    }
    
    loadingText.innerHTML= `${load}%`;
    loadingText.style.opacity=scale(load, 0, 100, 1, 0);
    bg.style.filter = `blur(${scale(load, 0, 100, 20, 0)}px)`
    setTimeout(function(){
      bg.style.zIndex = 1;
    }, 3000);
}

const scale = (num, in_min, in_max, out_min, out_max) => {
  return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}
