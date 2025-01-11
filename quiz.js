// Storing Data

const questionData = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    correctAnswer: 2, // Index of the correct answer in the options array
  },
  {
    question: "What is 5 + 4?",
    options: ["6", "7", "8", "9"],
    correctAnswer: 3,
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Venus"],
    correctAnswer: 1,
  },
];
let pageNo = 1;
let pageIndex = 0;
const choice = document.querySelectorAll(".choice");

function displayPage() {
  document.querySelector(".pagesInfo").textContent = `Page ${pageNo}`;
  document.querySelector(".question").innerHTML =
    questionData[pageIndex].question;
  choice.forEach((button, index) => {
    button.textContent = questionData[pageIndex].options[index];
    button.removeEventListener("click", checkAnswer);
    button.addEventListener("click", () => {
      checkAnswer(button, index);
    });
  });
}

function nextPage() {
  pageNo++
  pageIndex++;
  displayPage();
  choice.forEach((button, index) => {
    button.disabled = false;
    button.style.backgroundColor = "";
  });
}
function previousPage() {
  pageNo--;
  pageIndex--;
  displayPage();
}

function checkAnswer(button, index) {
  if (index == questionData[pageIndex].correctAnswer) {
    button.style.backgroundColor = "green";
  } else {
    console.log("wrong");
    button.style.backgroundColor = "red";
  }
  choice.forEach((button, index) => {
    button.disabled = true;
  });
}
displayPage();
document.querySelector(".nextPage").addEventListener("click", nextPage);
document.querySelector(".previousPage").addEventListener("click", previousPage);
