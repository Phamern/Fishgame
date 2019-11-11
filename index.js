//"use strict"; gjør at man må være streng på reglene

const button = document.querySelector(".button");
const textOutput = document.querySelector(".output");
let btnIsClicked = [
  "Du fikk en torsk",
  "Du fikk en ørret",
  "Du fikk en makrell",
  "Du fikk en kveite",
  "Du fikk ikke fisk"
];

//Get random array index
function getRandomFish() {
  return btnIsClicked[Math.floor(Math.random() * btnIsClicked.length)];
}

function handleButton() {
  textOutput.textContent = "..."
  button.classList.add("hidden");
  // fix
}

function changeTextElement() {
  textOutput.textContent = getRandomFish();
  button.classList.remove("hidden");
}

button.addEventListener("click",  (event) => {
  let timerFish = Math.floor((Math.random() * 5000) + 1000);
  handleButton();
  setTimeout(() => {
    changeTextElement();
  }, timerFish
  );
  console.log("Button is clicked");
  // drop down
  // dropdown fix
});

// function handleButton(event) {
//   console.log("Button is clicked", event);
// };

// button.addEventListener("click", handleButton);