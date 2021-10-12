const participant = parseInt(prompt('몇 명이 참가하나요?'));
const yesOrNo = confirm(`${participant}명 맞나요?`);

const orderNumber = document.querySelector('.order-number');
const submitWord = document.querySelector('.submit-word');
const allForm = document.querySelector('form');
const input = document.querySelector('input');
const button = document.querySelector('button');

let word;
let newWord;

function handleClickButton(event) {
  event.preventDefault();

  if (!word || word[word.length - 1] === newWord[0]) {
    word = newWord;
    submitWord.textContent = word;
    const order = parseInt(orderNumber.textContent);

    if (order + 1 > participant) {
      orderNumber.textContent = 1;
    } else {
      orderNumber.textContent = order + 1;
    }
  } else {
    alert('올바르지 않은 단어입니다!');
  }
  input.value = '';
  input.focus();
}

function handleSubmitText(event) {
  newWord = event.target.value;
}

allForm.addEventListener('submit', handleClickButton);
input.addEventListener('input', handleSubmitText);

const coloringFont = document.querySelector('#coloring');
let colorList = ['teal', 'rgb(184, 130, 235)', 'cornflowerblue', 'tomato'];
let count = 0;

function randomColor() {
  const randomNumber = Math.floor(Math.random() * colorList.length);
  coloringFont.style.color = colorList[randomNumber];
}

randomColor();
setInterval(randomColor, 500);

