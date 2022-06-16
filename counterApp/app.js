// Selectors

const substract = document.querySelector('#substract');
const reset = document.querySelector('#reset');
const add = document.querySelector('#add');
const number = document.querySelector('#number');


add.addEventListener('click', () => {
    +number.innerText ++;
});

reset.addEventListener('click', () => {
    number.innerText = 0;
})

substract.addEventListener('click', () => {
    +number.innerText --;
});