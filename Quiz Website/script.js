function quizAppGame() {

    function userSelectOption(data, currentQuestionIndex) {

        let quizOptionClickCount = 0;
        let correctAnswerCount = 0;

        let count = 0;

        const quizOptiosnEl = document.querySelectorAll(".quiz-option");

        quizOptiosnEl.forEach((quizOption) => {

            quizOption.addEventListener("click", () => {

                count++;

                if (quizOptionClickCount === 0) {

                    quizOption.classList.add("chooseAnswer");

                    let userSelectAnswer = quizOption.children[0].children[1].innerText;
                    let correctAnswer = data.questions[currentQuestionIndex].answer;

                    if (userSelectAnswer === correctAnswer) {
                        quizOption.classList.add("correctAnswer");

                        const createImageEl = document.createElement("img");
                        createImageEl.src = "/assets/images/icon-correct.svg";
                        createImageEl.alt = "correct icon";
                        createImageEl.id = "icon";
                        quizOption.appendChild(createImageEl);

                        correctAnswerCount++;
                    } else {
                        quizOption.classList.add("incorrectAnswer");

                        const createImageEl = document.createElement("img");
                        createImageEl.src = "/assets/images/icon-incorrect.svg";
                        createImageEl.alt = "incorrect icon";
                        createImageEl.id = "icon";
                        quizOption.appendChild(createImageEl);
                    }
                }

                quizOptionClickCount++;

            });
        });


        let nextQuestionBtn = document.querySelector(".submit-container");
        nextQuestionBtn.addEventListener("click", () => {

            if (count > 0) {

                quizOptionClickCount = 0;

               removeClasses();

                document.querySelectorAll("#icon").forEach(el => el.remove());

                if (currentQuestionIndex < 9) {
                    currentQuestionIndex++;
                    changeUI(data, currentQuestionIndex);
                } else {
                    finishedGame(correctAnswerCount);
                }

            }

            count = 0;

        });

    }

    function changeUI(data, currentQuestionIndex) {

        let questionEl = document.querySelector(".question");
        questionEl.innerText = data.questions[currentQuestionIndex].question;

        let quizOption1 = document.querySelector("#quiz-option-1");
        let quizOption2 = document.querySelector("#quiz-option-2");
        let quizOption3 = document.querySelector("#quiz-option-3");
        let quizOption4 = document.querySelector("#quiz-option-4");

        quizOption1.innerText = data.questions[currentQuestionIndex].options[0];
        quizOption2.innerText = data.questions[currentQuestionIndex].options[1];
        quizOption3.innerText = data.questions[currentQuestionIndex].options[2];
        quizOption4.innerText = data.questions[currentQuestionIndex].options[3];

        let currentQuestionIndexEl = document.querySelector("#current-question-index");
        currentQuestionIndexEl.innerText = currentQuestionIndex + 1;

    }

    function finishedGame(correctAnswerCount) {
        const incorrectAnswerCount = 10 - correctAnswerCount;
        const resultText = ` <b> Correct Answer: </b> ${correctAnswerCount} <br> <b> Incorrect Answer: </b> ${incorrectAnswerCount}`;
        document.getElementById("resultText").innerHTML = resultText;
        document.getElementById("gameOverModal").style.display = "flex";
    }

    const closeModelBtn = document.querySelector("#close-model");
    closeModelBtn.addEventListener("click", () => {
        document.getElementById("gameOverModal").style.display = "none";
        goBack();
    })

    function goBack() {
        location.reload();
    }

    function removeClasses() {
        const quizOptiosnEl = document.querySelectorAll(".quiz-option");

        quizOptiosnEl.forEach(option => {
            option.classList.remove("chooseAnswer");
            option.classList.remove("correctAnswer");
            option.classList.remove("incorrectAnswer");
        });
    }

    const goBackBtn = document.querySelector("#go-back");
    goBackBtn.addEventListener("click", () => {
        goBack();
    })

    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            closeModal();
        }
    });


    function showDataUI(data) {

        let currentPageImageEl = document.querySelector("#current-page-image");
        currentPageImageEl.src = data.icon;
        currentPageImageEl.alt = `${data.title} icon`;

        let currentPageTitle = document.querySelector("#current-page-title");
        currentPageTitle.innerHTML = data.title;

        let currentQuestionIndex = 0;

        changeUI(data, currentQuestionIndex);
        userSelectOption(data, currentQuestionIndex);
    }

    function quizPage(quizType) {
        const fetchData = fetch("/data.json");
        fetchData.then(response => response.json()).then((quizData) => {
            let currentPageData = quizData.quizzes[quizType - 1];
            showDataUI(currentPageData);
        })
    }

    const quizSelectBox = document.querySelectorAll(".quiz-select-box");
    quizSelectBox.forEach((quizBox) => {
        quizBox.addEventListener("click", () => {

           removeClasses();


            const homePageEl = document.querySelector(".home-page-container");
            homePageEl.classList.add("hidden");

            const quizPageEl = document.querySelector(".quiz-page");
            quizPageEl.classList.remove("hidden");

            let clickeQuizType = parseInt(quizBox.id);

            quizPage(clickeQuizType);
        });
    });

}



quizAppGame();