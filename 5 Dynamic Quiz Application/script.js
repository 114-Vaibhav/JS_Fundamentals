const question = document.getElementById("question");
const option1 = document.getElementById("option1");
const option2 = document.getElementById("option2");
const option3 = document.getElementById("option3");
const option4 = document.getElementById("option4");
const submit = document.getElementById("submit");
const questionNumber = document.getElementById("question-number");
const result = document.getElementById("result");
const nextQuestion = document.getElementById("next-question");
let score = 0;
let data = [
    {
        "question": "What is the capital of France?",
        "options": ["Berlin", "Madrid", "Paris", "Rome"],
        "answer": "Paris",
        "explanation": "Paris is the capital and largest city of France."
    },
    {
        "question": "Which element has the chemical symbol 'O'?",
        "options": ["Oxygen", "Gold", "Osmium", "Silver"],
        "answer": "Oxygen",
        "explanation": "The chemical symbol 'O' represents Oxygen."
    },
    {
        "question": "Who wrote 'Romeo and Juliet'?",
        "options": ["William Shakespeare", "Charles Dickens", "Jane Austen", "Mark Twain"],
        "answer": "William Shakespeare",
        "explanation": "'Romeo and Juliet' is a famous play by Shakespeare."
    },
    {
        "question": "Which planet is known as the Red Planet?",
        "options": ["Venus", "Mars", "Jupiter", "Saturn"],
        "answer": "Mars",
        "explanation": "Mars is called the Red Planet due to its reddish appearance."
    },
    {
        "question": "What is the largest ocean on Earth?",
        "options": ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        "answer": "Pacific Ocean",
        "explanation": "The Pacific Ocean is the largest ocean on Earth."
    },
    {
        "question": "Which language is primarily spoken in Brazil?",
        "options": ["Spanish", "Portuguese", "French", "English"],
        "answer": "Portuguese",
        "explanation": "Portuguese is the official and most widely spoken language in Brazil."
    },
    {
        "question": "What is the square root of 64?",
        "options": ["6", "7", "8", "9"],
        "answer": "8",
        "explanation": "8 multiplied by 8 equals 64, so the square root is 8."
    },
    {
        "question": "Which gas do plants absorb from the atmosphere?",
        "options": ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
        "answer": "Carbon Dioxide",
        "explanation": "Plants absorb carbon dioxide for photosynthesis."
    },
    {
        "question": "Who painted the Mona Lisa?",
        "options": ["Vincent van Gogh", "Leonardo da Vinci", "Pablo Picasso", "Michelangelo"],
        "answer": "Leonardo da Vinci",
        "explanation": "The Mona Lisa was painted by Leonardo da Vinci."
    },
    {
        "question": "What is H2O commonly known as?",
        "options": ["Salt", "Water", "Hydrogen Peroxide", "Oxygen"],
        "answer": "Water",
        "explanation": "H2O is the chemical formula for water."
    }
];


console.log(data[0].question);
console.log(data[0].options);
console.log(data[0].answer);

submit.addEventListener("click", () => {
    const selected = document.querySelector('input[name="answer"]:checked');

    if (selected) {
        // console.log(selected.id);        // option1, option2, etc.
        const answer = selected.nextElementSibling.textContent; // Paris, London, etc.
        console.log(answer);
        console.log("question no is ", questionNumber.textContent);
        if (answer == data[questionNumber.textContent - 1].answer) {
            score++;
            result.textContent = `Correct! Score: ${score}`;
            console.log("Correct! Score: " + score);
            const explanation = document.createElement("p");
            explanation.textContent = data[questionNumber.textContent - 1].explanation;
            result.appendChild(explanation);
        } else {
            result.textContent = `Wrong! Score: ${score}`;
            console.log("Wrong! Score: " + score);
        }

    } else {
        console.log("No option selected");
        alert("Please select an option before submitting.");
    }
    submit.disabled = true; // Disable submit button after submission
});

function updateQuestion() {
    const currentQuestion = data[questionNumber.textContent - 1];
    question.textContent = currentQuestion.question;
    option1.nextElementSibling.textContent = currentQuestion.options[0];
    option2.nextElementSibling.textContent = currentQuestion.options[1];
    option3.nextElementSibling.textContent = currentQuestion.options[2];
    option4.nextElementSibling.textContent = currentQuestion.options[3];
}


nextQuestion.addEventListener("click", () => {
    if (questionNumber.textContent - 1 < data.length - 1) {
        questionNumber.textContent++;
        updateQuestion();
        submit.disabled = false; // Enable submit button for the next question
        result.textContent = `Score: ${score}`; // Reset result text for the next question
    }
});
