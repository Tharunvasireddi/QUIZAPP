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
      },
      {
        question: "What is the largest mammal in the world?",
        choices: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
        answer: "Blue Whale",
      },
      {
        question: "Who wrote the play 'Romeo and Juliet'?",
        choices: [
          "William Shakespeare",
          "Mark Twain",
          "Charles Dickens",
          "Jane Austen",
        ],
        answer: "William Shakespeare",
      },
      {
        question: "What is the boiling point of water at sea level?",
        choices: ["90°C", "100°C", "110°C", "120°C"],
        answer: "100°C",
      },
      {
        question: "What is the smallest prime number?",
        choices: ["1", "2", "3", "5"],
        answer: "2",
      },
      {
        question: "What is the chemical symbol for gold?",
        choices: ["Au", "Ag", "Pb", "Fe"],
        answer: "Au",
      },
      {
        question: "Who painted the Mona Lisa?",
        choices: [
          "Vincent van Gogh",
          "Pablo Picasso",
          "Leonardo da Vinci",
          "Claude Monet",
        ],
        answer: "Leonardo da Vinci",
      },
      {
        question: "What is the hardest natural substance on Earth?",
        choices: ["Gold", "Iron", "Diamond", "Platinum"],
        answer: "Diamond",
      },
      {
        question: "What is the largest planet in our solar system?",
        choices: ["Earth", "Mars", "Jupiter", "Saturn"],
        answer: "Jupiter",
      },
      {
        question: "What is the main ingredient in guacamole?",
        choices: ["Tomato", "Onion", "Avocado", "Pepper"],
        answer: "Avocado",
      },
      {
        question: "What is the capital of Japan?",
        choices: ["Beijing", "Seoul", "Tokyo", "Bangkok"],
        answer: "Tokyo",
      },
      {
        question: "What is the square root of 64?",
        choices: ["6", "7", "8", "9"],
        answer: "8",
      },
      {
        question: "Who developed the theory of relativity?",
        choices: [
          "Isaac Newton",
          "Albert Einstein",
          "Galileo Galilei",
          "Nikola Tesla",
        ],
        answer: "Albert Einstein",
      },
      {
        question: "What is the largest ocean on Earth?",
        choices: [
          "Atlantic Ocean",
          "Indian Ocean",
          "Arctic Ocean",
          "Pacific Ocean",
        ],
        answer: "Pacific Ocean",
      },
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
