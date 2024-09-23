import { questions } from "./question.js";

const questionText = document.querySelector(".question-text");
const optionsSecton = document.querySelector(".options");
const card = document.querySelector(".card");
const a = optionsSecton.querySelector(".a");
const b = optionsSecton.querySelector(".b");
const c = optionsSecton.querySelector(".c");
const d = optionsSecton.querySelector(".d");
let questionInd = 0;
const loadQuestion = (index) => {
  questionText.innerHTML = questions[index].question;
  a.innerHTML = questions[index].options[0];
  b.innerHTML = questions[index].options[1];
  c.innerHTML = questions[index].options[2];
  d.innerHTML = questions[index].options[3];
};

loadQuestion(questionInd);
a.addEventListener("click", () => {
  checkAnswear(1, questionInd);
});
b.addEventListener("click", () => {
  checkAnswear(2, questionInd);
});
c.addEventListener("click", () => {
  checkAnswear(3, questionInd);
});
d.addEventListener("click", () => {
  checkAnswear(4, questionInd);
});

const checkAnswear = (ans, id) => {
  const feedbackDiv = document.createElement("div");
  const nextButton = document.createElement("div");
  nextButton.style.cssText +=
    "padding:4px;border:2px solid green;margin-top:2px;background-color:blue;color:white";
  nextButton.innerHTML = "next";
  if (ans == questions[id].answear) {
    console.log("correct");
    feedbackDiv.style.cssText += "padding:4px;border:2px solid green";
  } else {
    feedbackDiv.style.cssText += "padding:4px;border:2px solid red";
    feedbackDiv.innerHTML = `incorrect,correct answear will be ${
      questions[id].options[ans - 1]
    }`;
  }
  card.appendChild(feedbackDiv);
  card.appendChild(nextButton);
  nextButton.addEventListener("click", () => {
    card.removeChild(feedbackDiv);
    card.removeChild(nextButton);
    nextQuestin();
  });
};
const nextQuestin = () => {
  if (questionInd == 4) questionInd = 0;
  loadQuestion(++questionInd);
};
