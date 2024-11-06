const questions = [
    {
        title: "Soal 1",
        text: "Siapakah penemu bola lampu?",
        answers: ["Thomas Alva Edison", "Albert Einstein", "Nikola Tesla", "Galileo Galilei", "Isaac Newton"],
        correctAnswer: "Thomas Alva Edison"
    },
    {
        title: "Soal 2",
        text: "Apa nama planet terdekat dari Matahari?",
        answers: ["Merkurius", "Venus", "Bumi", "Mars", "Jupiter"],
        correctAnswer: "Merkurius"
    },
    {
        title: "Soal 3",
        text: "Berapa banyak planet dalam tata surya kita?",
        answers: ["6", "9", "11", "8", "7"],
        correctAnswer: "8"
    },
    {
        title: "Soal 4",
        text: "Apa nama sungai terpanjang di dunia?",
        answers: ["Sungai Kapuas", "Sungai Amazon", "Sungai Yangtze", "Sungai Mississipi", "Sungai Nil"],
        correctAnswer: "Sungai Nil"
    },
    {
        title: "Soal 5",
        text: "Apa yang merupakan simbol kimia untuk emas?",
        answers: ["Fe", "Au", "NaCl", "Cl", "H2"],
        correctAnswer: "Au"
    },
];

let indexQuestion = 0;
let userAnswer = [];
function showQuestion() {
    const questionTitle = document.getElementById("title-question");
    const questionText = document.getElementById("text-question");
    const optionContainer = document.getElementById("option-container");
    const currentQuestion = questions[indexQuestion];

    questionTitle.textContent = currentQuestion.title;
    questionText.textContent = currentQuestion.text;

    optionContainer.innerHTML = ""; 

    currentQuestion.answers.forEach(answer => {
        const label = document.createElement("label");
        label.classList.add("quizzz-soal");

        const input = document.createElement("input");
        input.type = "radio";
        input.name = "answer";
        input.value = answer;

        label.appendChild(input);
        label.append(answer);
        optionContainer.appendChild(label);
    });

    const nextButton = document.createElement(".next-question");
    if (indexQuestion === questions.length - 1) {
        nextButton.textContent = "Submit";
        optionContainer.appendChild(nextButton);
    } else {
        nextButton.textContent = "Next";
        optionContainer.appendChild(nextButton);
    }
}

function nextQuestion(event) {
    event.preventDefault();

    if (indexQuestion < questions.length - 1) {
        indexQuestion++;
        showQuestion();
    } else {
        alert("Kuis selesai!");
    }
}

document.querySelector(".next-question").addEventListener("click", nextQuestion);

showQuestion();
