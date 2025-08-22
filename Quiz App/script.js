const questionsData = [
    {
        question: "What does HTML stand for?",
        options: [
            "Hyper Trainer Marking Language",
            "Hyper Text Markup Language",
            "Hyper Text Marketing Language",
            "High Text Markup Language"
        ],
        correctAnswer: "Hyper Text Markup Language"
    },
    {
        question: "What is the correct tag for inserting a line break in HTML?",
        options: ["<break>", "<br>", "<lb>", "<newline>"],
        correctAnswer: "<br>"
    },
    {
        question: "Which language is used to style web pages?",
        options: ["HTML", "JQuery", "CSS", "XML"],
        correctAnswer: "CSS"
    },
    {
        question: "Which one is a JavaScript data type?",
        options: ["float", "boolean", "character", "integer"],
        correctAnswer: "boolean"
    },
    {
        question: "Which of the following is used to display a message in JavaScript?",
        options: ["alert()", "msg()", "prompt()", "display()"],
        correctAnswer: "alert()"
    },
    {
        question: "What symbol is used for single-line comments in JavaScript?",
        options: ["<!--", "//", "**", "##"],
        correctAnswer: "//"
    },
    {
        question: "Which tag is used to create an unordered list in HTML?",
        options: ["<ul>", "<ol>", "<li>", "<list>"],
        correctAnswer: "<ul>"
    },
    {
        question: "Which of these is not a valid variable name in JavaScript?",
        options: ["_name", "2name", "name", "$name"],
        correctAnswer: "2name"
    },
    {
        question: "What does CSS stand for?",
        options: [
            "Computer Style Sheets",
            "Colorful Style Sheets",
            "Creative Style Sheets",
            "Cascading Style Sheets"
        ],
        correctAnswer: "Cascading Style Sheets"
    },
    {
        question: "Which keyword is used to declare a variable in JavaScript?",
        options: ["var", "int", "String", "dim"],
        correctAnswer: "var"
    }
];

const container = document.querySelector(".container");

function quizApp() {

    let clickCount = 0;
    let correctAnswerCount = 0;

    let disabledBtn = false;

    const optionEl = document.querySelectorAll(".option");

    function checkAnswer() {
        optionEl.forEach((option) => {
            option.addEventListener("click", (e) => {
                if (disabledBtn !== true) {
                    let correctAns = questionsData[clickCount].correctAnswer;
                    let userAns = e.target.innerText;
                    if (userAns === correctAns) {
                        e.target.parentElement.classList.add("correct");
                        correctAnswerCount++;
                    } else {
                        e.target.parentElement.classList.add("wrong");
                    }

                    disabledBtn = true;
                }
            });
        })
    }

    checkAnswer();


    const nextBtn = document.querySelector("#next-btn");
    const questionEl = document.querySelector("#question");

    const opt_1 = document.querySelector(".option-1");
    const opt_2 = document.querySelector(".option-2");
    const opt_3 = document.querySelector(".option-3");
    const opt_4 = document.querySelector(".option-4");



    nextBtn.addEventListener("click", () => {
        disabledBtn = false;

        if (clickCount < 9) {
            clickCount++;
            let questionElContent = `Que${clickCount + 1}: ${questionsData[clickCount].question}`;
            questionEl.innerHTML = questionElContent;

            opt_1.innerText = questionsData[clickCount].options[0];
            opt_2.innerText = questionsData[clickCount].options[1];
            opt_3.innerText = questionsData[clickCount].options[2];
            opt_4.innerText = questionsData[clickCount].options[3];
        } else {
            container.innerHTML = "";
            let h1 = `<h1> Your Score is ${correctAnswerCount} out of 10 </h1>`;
            container.innerHTML = h1;

            let resetBtn = document.createElement("button");
            resetBtn.classList.add("reset-btn");
            resetBtn.innerText = "Reset";

            resetBtn.addEventListener("click", () => {
                location.reload();
            })

            container.appendChild(resetBtn);
        }

        optionEl.forEach((option) => {
            option.classList.remove("correct");
            option.classList.remove("wrong");
        });

    });
}

quizApp();