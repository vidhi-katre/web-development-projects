// ==========================================
// PREPMATE QUIZ APP
// ==========================================


// ================= QUESTIONS =================

const questionBank = {

    javascript: {

        easy: [
            {
                question: "Which keyword is used to declare a variable that cannot be reassigned?",
                options: ["var", "let", "const", "static"],
                answer: 2
            },

            {
                question: "Which symbol is used for single-line comments in JavaScript?",
                options: ["//", "/*", "#", "<!--"],
                answer: 0
            },

            {
                question: "Which method is used to print something in the browser console?",
                options: [
                    "print()",
                    "console.log()",
                    "display()",
                    "write.log()"
                ],
                answer: 1
            },

            {
                question: "Which of these is a JavaScript data type?",
                options: [
                    "String",
                    "Paragraph",
                    "Style",
                    "HTML"
                ],
                answer: 0
            },

            {
                question: "Which operator is used for strict equality?",
                options: ["=", "==", "===", "!="],
                answer: 2
            }
        ],

        medium: [
            {
                question: "What does DOM stand for?",
                options: [
                    "Document Object Model",
                    "Data Object Model",
                    "Document Oriented Method",
                    "Digital Object Method"
                ],
                answer: 0
            },

            {
                question: "Which method adds an element to the end of an array?",
                options: [
                    "push()",
                    "pop()",
                    "shift()",
                    "slice()"
                ],
                answer: 0
            },

            {
                question: "Which method removes the last element from an array?",
                options: [
                    "push()",
                    "pop()",
                    "shift()",
                    "remove()"
                ],
                answer: 1
            },

            {
                question: "What does JSON stand for?",
                options: [
                    "JavaScript Object Notation",
                    "Java Source Object Network",
                    "JavaScript Online Network",
                    "Java Object Notation"
                ],
                answer: 0
            },

            {
                question: "Which method converts a JSON string into a JavaScript object?",
                options: [
                    "JSON.parse()",
                    "JSON.convert()",
                    "JSON.object()",
                    "JSON.stringify()"
                ],
                answer: 0
            }
        ],

        hard: [
            {
                question: "What is a closure in JavaScript?",
                options: [
                    "A function with access to its outer scope",
                    "A closed browser window",
                    "A type of loop",
                    "A CSS property"
                ],
                answer: 0
            },

            {
                question: "Which method creates a new array by applying a function to every element?",
                options: [
                    "filter()",
                    "map()",
                    "reduce()",
                    "find()"
                ],
                answer: 1
            },

            {
                question: "What does the 'this' keyword generally refer to?",
                options: [
                    "The current execution context",
                    "The previous function",
                    "The browser only",
                    "The global variable"
                ],
                answer: 0
            },

            {
                question: "Which method executes a function for each array element?",
                options: [
                    "forEach()",
                    "each()",
                    "loop()",
                    "iterate()"
                ],
                answer: 0
            },

            {
                question: "Which keyword is used to create a Promise that can be awaited?",
                options: [
                    "async",
                    "wait",
                    "promise",
                    "awaited"
                ],
                answer: 0
            }
        ]

    },


    html: {

        easy: [
            {
                question: "What does HTML stand for?",
                options: [
                    "Hyper Text Markup Language",
                    "High Text Machine Language",
                    "Hyper Tool Markup Language",
                    "Home Text Markup Language"
                ],
                answer: 0
            },

            {
                question: "Which tag is used for the largest heading?",
                options: ["<h6>", "<heading>", "<h1>", "<head>"],
                answer: 2
            },

            {
                question: "Which tag is used to create a paragraph?",
                options: ["<p>", "<para>", "<text>", "<paragraph>"],
                answer: 0
            },

            {
                question: "Which tag creates a hyperlink?",
                options: ["<link>", "<a>", "<href>", "<url>"],
                answer: 1
            },

            {
                question: "Which tag is used to insert an image?",
                options: ["<image>", "<img>", "<picture>", "<src>"],
                answer: 1
            }
        ],

        medium: [
            {
                question: "Which attribute provides alternative text for an image?",
                options: ["src", "alt", "title", "href"],
                answer: 1
            },

            {
                question: "Which tag is used to create an unordered list?",
                options: ["<ol>", "<ul>", "<li>", "<list>"],
                answer: 1
            },

            {
                question: "Which HTML element is used for navigation links?",
                options: ["<nav>", "<navigate>", "<navigation>", "<links>"],
                answer: 0
            },

            {
                question: "Which tag is used to create a table row?",
                options: ["<td>", "<th>", "<tr>", "<row>"],
                answer: 2
            },

            {
                question: "Which attribute is used to uniquely identify an HTML element?",
                options: ["class", "id", "name", "unique"],
                answer: 1
            }
        ],

        hard: [
            {
                question: "Which HTML element is used to define independent content?",
                options: [
                    "<article>",
                    "<content>",
                    "<section>",
                    "<main-content>"
                ],
                answer: 0
            },

            {
                question: "Which element represents the main content of a document?",
                options: [
                    "<body>",
                    "<main>",
                    "<content>",
                    "<section>"
                ],
                answer: 1
            },

            {
                question: "Which attribute specifies where a form should send its data?",
                options: [
                    "method",
                    "action",
                    "target",
                    "send"
                ],
                answer: 1
            },

            {
                question: "Which input type allows users to select multiple options?",
                options: [
                    "radio",
                    "checkbox",
                    "multiple",
                    "select"
                ],
                answer: 1
            },

            {
                question: "Which element is used to embed another webpage?",
                options: [
                    "<frame>",
                    "<iframe>",
                    "<embed-page>",
                    "<web>"
                ],
                answer: 1
            }
        ]

    },


    css: {

        easy: [
            {
                question: "What does CSS stand for?",
                options: [
                    "Cascading Style Sheets",
                    "Computer Style Sheets",
                    "Creative Style System",
                    "Colorful Style Sheets"
                ],
                answer: 0
            },

            {
                question: "Which property changes text color?",
                options: [
                    "font-color",
                    "text-color",
                    "color",
                    "foreground"
                ],
                answer: 2
            },

            {
                question: "Which property changes the background color?",
                options: [
                    "background-color",
                    "bgcolor",
                    "background",
                    "color-background"
                ],
                answer: 0
            },

            {
                question: "Which property controls text size?",
                options: [
                    "text-size",
                    "font-size",
                    "size",
                    "text-style"
                ],
                answer: 1
            },

            {
                question: "Which symbol selects an element by its ID?",
                options: [".", "#", "*", "&"],
                answer: 1
            }
        ],

        medium: [
            {
                question: "Which CSS layout system is one-dimensional?",
                options: [
                    "Grid",
                    "Flexbox",
                    "Table",
                    "Float"
                ],
                answer: 1
            },

            {
                question: "Which property controls the space inside an element?",
                options: [
                    "margin",
                    "padding",
                    "border",
                    "spacing"
                ],
                answer: 1
            },

            {
                question: "Which property controls the space outside an element?",
                options: [
                    "margin",
                    "padding",
                    "border",
                    "outside"
                ],
                answer: 0
            },

            {
                question: "Which property is used to make an element flexible?",
                options: [
                    "display: flex",
                    "position: flex",
                    "flex: display",
                    "layout: flex"
                ],
                answer: 0
            },

            {
                question: "Which property makes corners rounded?",
                options: [
                    "corner-radius",
                    "border-radius",
                    "radius",
                    "round-border"
                ],
                answer: 1
            }
        ],

        hard: [
            {
                question: "Which CSS property controls the stacking order of elements?",
                options: [
                    "stack",
                    "z-index",
                    "layer",
                    "order"
                ],
                answer: 1
            },

            {
                question: "What does box-sizing: border-box do?",
                options: [
                    "Includes padding and border in element dimensions",
                    "Removes padding",
                    "Removes border",
                    "Adds extra margin"
                ],
                answer: 0
            },

            {
                question: "Which unit is relative to the root element's font size?",
                options: [
                    "em",
                    "rem",
                    "%",
                    "vh"
                ],
                answer: 1
            },

            {
                question: "Which property controls how an element behaves when content overflows?",
                options: [
                    "overflow",
                    "overlap",
                    "content-flow",
                    "display"
                ],
                answer: 0
            },

            {
                question: "Which CSS feature allows defining reusable values?",
                options: [
                    "CSS variables",
                    "CSS functions",
                    "CSS constants",
                    "CSS objects"
                ],
                answer: 0
            }
        ]

    }

};


// ================= VARIABLES =================

let selectedSubject = "javascript";

let selectedDifficulty = "easy";

let questions = [];

let currentIndex = 0;

let score = 0;

let timeLeft = 30;

let timerInterval;

let userAnswers = [];


// ================= DOM ELEMENTS =================

const homeScreen = document.getElementById("homeScreen");

const quizScreen = document.getElementById("quizScreen");

const resultScreen = document.getElementById("resultScreen");

const reviewScreen = document.getElementById("reviewScreen");

const startBtn = document.getElementById("startBtn");

const nextBtn = document.getElementById("nextBtn");

const restartBtn = document.getElementById("restartBtn");

const reviewBtn = document.getElementById("reviewBtn");

const backResultBtn = document.getElementById("backResultBtn");

const reviewRestartBtn = document.getElementById("reviewRestartBtn");

const themeBtn = document.getElementById("themeBtn");

const questionElement = document.getElementById("question");

const optionsContainer =
    document.getElementById("optionsContainer");

const currentQuestionElement =
    document.getElementById("currentQuestion");

const totalQuestionsElement =
    document.getElementById("totalQuestions");

const progressBar =
    document.getElementById("progressBar");

const timerElement =
    document.getElementById("timer");

const questionTag =
    document.getElementById("questionTag");


// ================= SUBJECT SELECTION =================

const subjectButtons =
    document.querySelectorAll(".select-btn");


subjectButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        subjectButtons.forEach(function(btn) {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        selectedSubject =
            button.dataset.subject;

    });

});


// ================= DIFFICULTY SELECTION =================

const difficultyButtons =
    document.querySelectorAll(".difficulty-btn");


difficultyButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        difficultyButtons.forEach(function(btn) {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        selectedDifficulty =
            button.dataset.level;

    });

});


// ================= START QUIZ =================

startBtn.addEventListener("click", startQuiz);


function startQuiz() {

    questions =
        questionBank[selectedSubject][selectedDifficulty];

    currentIndex = 0;

    score = 0;

    userAnswers = [];

    homeScreen.classList.add("hidden");

    resultScreen.classList.add("hidden");

    reviewScreen.classList.add("hidden");

    quizScreen.classList.remove("hidden");

    totalQuestionsElement.textContent =
        questions.length;

    loadQuestion();

}


// ================= LOAD QUESTION =================

function loadQuestion() {

    clearInterval(timerInterval);

    timeLeft = 30;

    timerElement.textContent = timeLeft;

    nextBtn.disabled = true;

    nextBtn.textContent =
        currentIndex === questions.length - 1
        ? "Finish Quiz ✓"
        : "Next Question →";


    const currentQuestion =
        questions[currentIndex];


    currentQuestionElement.textContent =
        currentIndex + 1;


    questionElement.textContent =
        currentQuestion.question;


    questionTag.textContent =
        selectedSubject.toUpperCase();


    optionsContainer.innerHTML = "";


    currentQuestion.options.forEach(
        function(option, index) {

            const button =
                document.createElement("button");

            button.classList.add("answer-btn");

            button.textContent =
                String.fromCharCode(65 + index)
                + ". "
                + option;


            button.addEventListener(
                "click",
                function() {
                    selectAnswer(index, button);
                }
            );


            optionsContainer.appendChild(button);

        }
    );


    updateProgress();

    startTimer();

}


// ================= SELECT ANSWER =================

function selectAnswer(selectedIndex, clickedButton) {

    const currentQuestion =
        questions[currentIndex];


    const buttons =
        document.querySelectorAll(".answer-btn");


    buttons.forEach(function(button) {
        button.classList.add("disabled");
    });


    const isCorrect =
        selectedIndex === currentQuestion.answer;


    if (isCorrect) {

        clickedButton.classList.add("correct");

        score++;

    } else {

        clickedButton.classList.add("wrong");

        buttons[currentQuestion.answer]
            .classList.add("correct");

    }


    userAnswers.push({

        question: currentQuestion.question,

        selected: selectedIndex,

        correct: currentQuestion.answer,

        options: currentQuestion.options,

        isCorrect: isCorrect

    });


    nextBtn.disabled = false;

    clearInterval(timerInterval);

}


// ================= TIMER =================

function startTimer() {

    timerInterval =
        setInterval(function() {

            timeLeft--;

            timerElement.textContent =
                timeLeft;


            if (timeLeft <= 0) {

                clearInterval(timerInterval);

                timeUp();

            }

        }, 1000);

}


// ================= TIME UP =================

function timeUp() {

    const currentQuestion =
        questions[currentIndex];


    const buttons =
        document.querySelectorAll(".answer-btn");


    buttons.forEach(function(button) {
        button.classList.add("disabled");
    });


    buttons[currentQuestion.answer]
        .classList.add("correct");


    userAnswers.push({

        question: currentQuestion.question,

        selected: -1,

        correct: currentQuestion.answer,

        options: currentQuestion.options,

        isCorrect: false

    });


    nextBtn.disabled = false;

}


// ================= NEXT QUESTION =================

nextBtn.addEventListener("click", function() {

    if (currentIndex < questions.length - 1) {

        currentIndex++;

        loadQuestion();

    } else {

        showResult();

    }

});


// ================= PROGRESS =================

function updateProgress() {

    const progress =
        ((currentIndex + 1) / questions.length) * 100;

    progressBar.style.width =
        progress + "%";

}


// ================= RESULT =================

function showResult() {

    clearInterval(timerInterval);

    quizScreen.classList.add("hidden");

    resultScreen.classList.remove("hidden");


    const total =
        questions.length;


    const wrong =
        total - score;


    const percentage =
        Math.round((score / total) * 100);


    document.getElementById("finalScore")
        .textContent = score;


    document.getElementById("correctAnswers")
        .textContent = score;


    document.getElementById("wrongAnswers")
        .textContent = wrong;


    document.getElementById("percentage")
        .textContent = percentage + "%";


    // SCORE CIRCLE

    const degree =
        percentage * 3.6;


    document.querySelector(".score-circle")
        .style.background =
        `conic-gradient(
            var(--primary) ${degree}deg,
            #e5e7eb ${degree}deg
        )`;


    // RESULT MESSAGE

    let message;


    if (percentage >= 80) {

        message =
            "Excellent! You really know your stuff! 🔥";

    } else if (percentage >= 60) {

        message =
            "Good job! Keep practicing and you'll improve! 💪";

    } else {

        message =
            "Don't give up! Practice makes progress! 🚀";

    }


    document.getElementById("resultMessage")
        .textContent = message;


    saveBestScore(score);

}


// ================= BEST SCORE =================

function saveBestScore(score) {

    const key =
        "bestScore_" +
        selectedSubject +
        "_" +
        selectedDifficulty;


    const oldScore =
        Number(localStorage.getItem(key)) || 0;


    if (score > oldScore) {

        localStorage.setItem(
            key,
            score
        );

    }


    updateBestScore();

}


// ================= DISPLAY BEST SCORE =================

function updateBestScore() {

    const key =
        "bestScore_" +
        selectedSubject +
        "_" +
        selectedDifficulty;


    const best =
        Number(localStorage.getItem(key)) || 0;


    document.getElementById("bestScore")
        .textContent = best;

}


// ================= STREAK =================

function updateStreak() {

    let streak =
        Number(localStorage.getItem("quizStreak")) || 0;


    streak++;


    localStorage.setItem(
        "quizStreak",
        streak
    );


    document.getElementById("streak")
        .textContent = streak;

}


// ================= REVIEW =================

reviewBtn.addEventListener(
    "click",
    showReview
);


function showReview() {

    resultScreen.classList.add("hidden");

    reviewScreen.classList.remove("hidden");


    const reviewContainer =
        document.getElementById("reviewContainer");


    reviewContainer.innerHTML = "";


    userAnswers.forEach(
        function(item, index) {

            const div =
                document.createElement("div");


            div.classList.add("review-item");


            let userAnswer;


            if (item.selected === -1) {

                userAnswer =
                    "Not Answered";

            } else {

                userAnswer =
                    item.options[item.selected];

            }


            const correctAnswer =
                item.options[item.correct];


            div.innerHTML = `

                <h3>
                    ${index + 1}. ${item.question}
                </h3>

                <div class="review-answer ${
                    item.isCorrect
                    ? "correct-answer"
                    : "user-wrong"
                }">

                    Your Answer:
                    <strong>${userAnswer}</strong>

                </div>

                <div class="review-answer correct-answer">

                    Correct Answer:
                    <strong>${correctAnswer}</strong>

                </div>

            `;


            reviewContainer.appendChild(div);

        }
    );

}


// ================= RESTART =================

restartBtn.addEventListener(
    "click",
    startQuiz
);


reviewRestartBtn.addEventListener(
    "click",
    function() {

        reviewScreen.classList.add("hidden");

        startQuiz();

    }
);


// ================= BACK =================

backResultBtn.addEventListener(
    "click",
    function() {

        reviewScreen.classList.add("hidden");

        resultScreen.classList.remove("hidden");

    }
);


// ================= DARK MODE =================

themeBtn.addEventListener(
    "click",
    function() {

        document.body.classList.toggle("dark");


        if (document.body.classList.contains("dark")) {

            themeBtn.textContent = "☀️";

            localStorage.setItem(
                "theme",
                "dark"
            );

        } else {

            themeBtn.textContent = "🌙";

            localStorage.setItem(
                "theme",
                "light"
            );

        }

    }
);


// ================= LOAD SAVED THEME =================

function loadTheme() {

    const theme =
        localStorage.getItem("theme");


    if (theme === "dark") {

        document.body.classList.add("dark");

        themeBtn.textContent = "☀️";

    }

}


// ================= INITIALIZATION =================

loadTheme();

updateBestScore();

document.getElementById("streak")
    .textContent =
    localStorage.getItem("quizStreak") || 0;