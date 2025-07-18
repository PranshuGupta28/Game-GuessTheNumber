let randamNum = parseInt(Math.random()*100+1);
console.log(randamNum)

const submit = document.getElementById('subt');
let userInput = document.querySelector('#guessfield');
let userguesses = document.querySelector('.guesses');
let remaining = document.querySelector('.lastresult');
let lowOrHi = document.querySelector('.lowOrHi');
let startOver = document.querySelector('.result');

const p = document.createElement('p');
let prevGuess =[];
let numguess =0; 

let playgame = true;

if (playgame){
    submit.addEventListener('click',function(e){
        e.preventDefault() ; // click hone par value kahi aur naa jaye 
        
        const guess =parseInt(userInput.value);
        validateguess(guess)
        console.log(guess);
    });
};

function validateguess(guess){
    if(isNaN(guess) || guess<1 ||guess>100){
        // alert('Please enter vaild Number')
        displaymsg(`Please enter vaild Number`)
    }
    else{
        prevGuess.push(guess);
        if(numguess===10){
            displayguess(guess)
            displaymsg(`Bad Luck... Game Over. Random number was ${randamNum}`)
            endGame()
        }
        else{
            checkguess(guess);
            displayguess(guess);
        }
    }

}
    // for cheaking your given input guess
function checkguess(guess) {
    if (guess === randamNum) {
        displaymsg(`Congratulations You Guess The correct Number `)
        endGame();
    }
    else if (guess < randamNum) {
        displaymsg(`Number is TOO low , Try Again`)
    }
    else if (guess > randamNum) {
        displaymsg(`Number is TOO High , Try Again`)
    }

};
// To store Your Given previous Guess
function displayguess(guess){
   userInput.value =''
   userguesses.innerHTML+=`${guess},`
   console.log(numguess)
   remaining.innerHTML=`${10-numguess}`
   numguess++;

}

function displaymsg(msg){
   lowOrHi.innerHTML=`${msg}`;
}

function endGame(){
    userInput.value='';
    userInput.setAttribute('disabled','')
    p.classList.add('button');
    p.innerHTML= `<button id="New">Start New Game</button>`;
    startOver.appendChild(p);
    playgame=false;
    New()
}

function New(){
    const Newbtn =document.querySelector('#New')
    Newbtn.addEventListener('click',function(){
        randamNum = parseInt(Math.random()*100+1)
        prevGuess =[]
        numguess =0
        userguesses.innerHTML =''
        remaining.innerHTML=`${10-numguess}`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p);
        playgame =true; 
        displaymsg('');
    })

}