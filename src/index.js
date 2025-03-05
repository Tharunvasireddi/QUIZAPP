document.addEventListener("DOMContentLoaded", () => {
  const questions = [
      {
          question: "What is the capital of France?",
          choices: ["Paris", "Berlin", "Rome", "Madrid"],
          answer: "Paris",
      },
      {
          question: "Which planet is known as the Red Planet?",
          choices: ["Earth", "Mars", "Jupiter", "Venus"],
          answer: "Mars",
      }
  ];

  let start = document.getElementById("start");
  let questionContainer = document.getElementById("question");
  let options = document.getElementById("options");
  let next = document.getElementById("next");
  let displayScore = document.getElementById("score");
  let restart = document.getElementById("restart");
  let questionIndex = 0;
  let marks = 0;
  let answered = false;

  start.addEventListener("click", () => {
      start.classList.add("hidden");
      quiz.classList.remove("hidden");
      marks = 0;
      questionIndex = 0;
      showQuestion();
  });

  function showQuestion() {
      options.innerHTML = "";
      restart.classList.add("hidden");
      displayScore.classList.add("hidden");
      next.style.display = "none";
      answered = false;

      const { question, choices, answer } = questions[questionIndex];
      questionContainer.innerHTML = question;

      choices.forEach((choice) => {
          let btn = document.createElement("button");
          btn.classList.add("bg-gray-700", "text-white", "font-medium", "text-lg", "py-1", "px-2", "rounded-md", "w-full", "text-center", "hover:bg-blue-500", "hover:scale-105", "cursor-pointer", "transition-all");
          btn.innerHTML = choice;
          options.appendChild(btn);
      });
  }

  options.addEventListener("click", (e) => {
      if (!answered && e.target.tagName === "BUTTON") {
          const selectedAnswer = e.target.innerText;
          const correctAnswer = questions[questionIndex].answer;

          answered = true; 
          if (selectedAnswer === correctAnswer) {
              marks++;
          }
          Array.from(options.children).forEach((btn) => {
              btn.disabled = true;
              btn.classList.add("opacity-50", "cursor-not-allowed");
          });
          next.style.display = "block";
      }
  });

  next.addEventListener("click", () => {
      questionIndex++;
      if (questionIndex >= questions.length) {
          quiz.classList.add("hidden");
          displayScore.classList.remove("hidden");
          displayScore.innerHTML = `Your score: ${marks}/${questions.length}`;
          alert("Quiz is completed");
          restart.classList.remove("hidden");
      } else {
          showQuestion();
      }
  });

  restart.addEventListener("click", () => {
      start.classList.remove("hidden");
      displayScore.classList.add("hidden");
      restart.classList.add("hidden");
      marks = 0;
      questionIndex = 0;
  });
});
