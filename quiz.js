const quizForm = document.querySelector('.quiz-form');
const btn = document.querySelector("#submit");
const Output = document.querySelector("#output-quiz");

const correctAnswers = ['90°', 'right angled','a geometry figure','3','polygon'];

function calculateScore()
{

    let score = 0;
    let index = 0;
    const formResults = new FormData(quizForm);//form data syntax
    for (let value of formResults.values())//for let loop and .values , .entries
    {
        if( value === correctAnswers[index])
        {
            score = score+1;
        }
        index = index + 1;
    }

    Output.innerText = "Your score is : " + score;

}



btn.addEventListener('click',calculateScore);