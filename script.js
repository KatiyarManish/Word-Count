const textArea = document.getElementById("text");
const btn = document.querySelector(".btn");
const word = document.querySelector(".wordcount");
const character = document.querySelector(".charactercount");

btn.addEventListener("click", calculate);

function calculate() {
  const cha_length = textArea.value.length;
  character.innerText = `Total characters are: ${cha_length}`;

  const count = textArea.value.split(" ").length;
  word.innerText = `Total words are: ${count}`;
}
