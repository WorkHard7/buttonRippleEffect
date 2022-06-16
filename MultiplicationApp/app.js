// SELECTORS 

const question = document.querySelector('#question');
const input = document.querySelector('#input');
const button = document.querySelector('#btn');
const form = document.querySelector('#form');
const displayScore = document.getElementById('score');

const randNum1 = Math.floor(Math.random() * 10); // generating a random number from 0 to 10
const randNum2 = Math.floor(Math.random() * 10); // generating a random number from 0 to 10

let score = JSON.parse(localStorage.getItem('score')); // score equals with score from local memory
displayScore.innerText += `${score}`; // on screen score equals with score from local storage

if(!score){
    score = 0;
}

question.innerText = `What is ${randNum1} multiply by ${randNum2}?`; 

const correctAnswer = randNum1 * randNum2; 

form.addEventListener('submit', () => {
    userAnswer = +input.value;

    if(userAnswer === correctAnswer){
        score++;
        updateLocalStorage();
        input.value = '';
    }else{
        score--;
        updateLocalStorage();
        input.value = '';
    }
});

function updateLocalStorage(){ // function helps to store the score in local memory
    localStorage.setItem('score', JSON.stringify(score));
}
