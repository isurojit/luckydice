const dices = document.querySelectorAll('.dice-view');
const rollDice = document.querySelector('.roll_btn');
const playerOneScore = document.querySelector('.player-score');
const resetBtn = document.querySelector('.reset_btn');
const resetBtnSecond = document.querySelector('.reset_btn_second');
const secondDices = document.querySelectorAll('.dice-view-second');
const rollDiceSecond = document.querySelector('.roll_btn_second');
const playerTwoScore = document.querySelector('.player-score-second');
const chanceOne = document.querySelector('.chance-one');
const chanceTwo = document.querySelector('.chance-two');
const resultOne = document.querySelector('.result-one');
const resultTwo = document.querySelector('.result-two');

for(let i=1; i<=5;i++){
    dices[i].style.display = "none";
    secondDices[i].style.display = "none";
}
let counterOne = 0, totalOne = 0, playerOneChances = 5;

//event listnener
rollDice.addEventListener("click", function(e){
    let randomNumber = Math.floor((Math.random() * 5)+1);
    for(let i=0;i<=5;i++){
        if(randomNumber === i){
            seek(dices[randomNumber]);
            totalOne = totalOne + randomNumber+1;
        }else{
            hide(dices[i]);
        }
    }
    playerOneScore.innerText = totalOne;

    playerOneChances --;
    chanceOne.innerHTML = ` ${playerOneChances} `;

    counterOne++;
    if(counterOne === 5){
        rollDice.classList.add('disabled');
    }
});

let counterTwo = 0, totalTwo = 0, playerTwoChances= 5;
rollDiceSecond.addEventListener("click", function(e){
    let randomNumber = Math.floor((Math.random() * 5)+1);
    for(let i=0; i<=5; i++){
        if(randomNumber === i){
            seek(secondDices[randomNumber]);
            totalTwo = totalTwo + randomNumber+1;
        }else{
            hide(secondDices[i]);
        }
    }
    playerTwoScore.innerText = totalTwo;

    playerTwoChances --;
    chanceTwo.innerHTML = ` ${playerTwoChances} `;

    counterTwo++;
    if(counterTwo === 5){
        rollDiceSecond.classList.add('disabled');
    }
});
resetBtnSecond.addEventListener("click", function(e){
    reset();
})

resetBtn.addEventListener("click", function(e){
    reset();
})


//Hide
function seek(show){
    show.style.display= "block";
}
//Seek
function hide(hide){
    hide.style.display= "none";
}

//reset
function reset(){
    rollDice.classList.remove('disabled');
    rollDiceSecond.classList.remove('disabled');
    playerOneScore.innerText = 0;
    playerTwoScore.innerText = 0;
    counterOne = 0;
    totalOne = 0;
    counterTwo = 0;
    totalTwo = 0;
}
