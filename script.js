const randomNum = Math.floor(Math.random() * 10);
console.log(randomNum); 

const num = document.getElementById('num');

let score = 10;

function checkNum(n) {
    const scores = document.getElementById('score') || document.createElement('p');
    scores.id = 'score'
    console.log(n,randomNum);
    const para = document.getElementById('message') || document.createElement('p');
    para.id = 'message';
    const fields = document.querySelectorAll('#num,#submit');
    if (score >= 5) {
        if(n > randomNum) {
            para.textContent = 'Too high';
            score--;
        } else if(n < randomNum) {
            para.textContent = 'Too low';
            score--;
        } else if(n === randomNum) {
            para.textContent = 'Correct!';
            fields.forEach(field => field.setAttribute('disabled', 'true'));
        }
    }

    if (score < 5) {
        para.textContent = 'fail';
    }

    scores.textContent = `Score : ${score}`;
    document.body.appendChild(para);
    document.body.appendChild(scores);
}

function inputNum() {
    const n = num.value;
    console.log(`inp -> ${n}`);
   checkNum(+n);
}


const submit = document.getElementById('submit');
submit.addEventListener('click',inputNum);





