// Rock Paper Game
let score = JSON.parse(localStorage.getItem('score')) || {
    win: 0,
    losses: 0,
    ties: 0
};

updateScore();


function resetScore() {
    score.win = 0;
    score.losses = 0;
    score.ties = 0;
    localStorage.removeItem('score');
}

function playGame(playerMove){
    const computerMove = pickComputerMove();
    let result;
    if (playerMove === 'scissor'){
        if (computerMove === 'rock'){
        result = 'You lose';
        } else if (computerMove === 'paper'){
            result = 'You win';
        }
        else if (computerMove === 'scissor'){
            result = 'Tie';
        }
    } else if (playerMove === 'rock'){
        if (computerMove === 'rock'){
        result = 'Tie';
        } else if (computerMove === 'paper'){
            result = 'You lose';
        }
        else if (computerMove === 'scissor'){
            result = 'You win';
        }
    } else if (playerMove === 'paper'){
        if (computerMove === 'rock'){
        result = 'You win';
        } else if (computerMove === 'paper'){
            result = 'Tie';
        }
        else if (computerMove === 'scissor'){
            result = 'You lose';
        }
    }

    if (result === 'You lose'){
        score.losses ++;
    } else if (result === 'You win'){
        score.win ++;
    } else if (result === 'Tie'){
        score.ties ++;
    }

    localStorage.setItem("score", JSON.stringify(score));

    document.querySelector('.js-result').innerHTML = result;

    document.querySelector('.js-moves').innerHTML = `You <img src="./img/${playerMove}.png" class="moveicon"><img src="./img/${computerMove}.png" class="moveicon">Computer`;

    updateScore();
    
    
}

function updateScore() {
    document.querySelector('.js-scores').innerHTML = `Wins: ${score.win}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

function pickComputerMove(){
    const randomNumber = Math.random();
    let computerMove = '';

    if ( randomNumber >= 0 && randomNumber < 1/3) {
        computerMove = 'rock';
    } if (randomNumber >= 1/3 && randomNumber < 2/3) {
        computerMove = 'paper';
    } if (randomNumber >= 2/3 && randomNumber < 1) {
        computerMove = 'scissor'
    }
    return computerMove;
}