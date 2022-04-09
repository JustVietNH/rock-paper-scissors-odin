

function computerPlay() {
    let items = Array("Rock", "Paper", "Scissors");
    let item = items[Math.floor(Math.random()*items.length)];
    return item
}

function singleGame(playerSel, computerSel) {
    // playerSel and computerSel are either Rock, Paper or Scissors
    let playerSelect = playerSel.toLowerCase().charAt(0).toUpperCase() + playerSel.toLowerCase().slice(1);
    let comSelect = computerSel.toLowerCase().charAt(0).toUpperCase() + computerSel.toLowerCase().slice(1);

    // if tie just get out of func
    if (playerSel == computerSel) {
        return;
        //"Tie Game! You chose " + playerSel + " and the computer as well!"
    }

    if (playerSelect == "Rock") {
        if (comSelect == "Paper") {
            return 0;
            //"You lose! " + comSelect + " beats " + playerSelect
        } else if (comSelect == "Scissors") {
            return 1;
            //"You win! "  + playerSelect + " beats " + comSelect
        }
    } else if (playerSelect == "Paper") {
        if (comSelect == "Scissors") {
            return 0;
            //"You lose! " + comSelect + " beats " + playerSelect
        } else if (comSelect == "Rock") {
            return 1;
            //"You win! "  + playerSelect + " beats " + comSelect
        }
    } else if (playerSelect == "Scissors") {
        if (comSelect == "Rock") {
            return 0;
            //"You lose! " + comSelect + " beats " + playerSelect
        } else if (comSelect == "Paper") {
            return 1;
            //"You win! "  + playerSelect + " beats " + comSelect
        }
    }
}

function splitString(className) {
    return className.split(" ")[1];
}

const playerBtns = document.querySelectorAll("button");
const playScore = document.querySelector(".playScore");
const comScore = document.querySelector(".comScore");
let DONE = false;

function updateScore(result, done) {
    if (done) {
        return;
    }

    if(result == 0){
        let currentComScore = parseInt(comScore.textContent);
        comScore.textContent = currentComScore + 1;
    } else if (result == 1) {
        let currentPlayerScore = parseInt(playScore.textContent);
        playScore.textContent = currentPlayerScore + 1;
    } else {
        return;
    }

}

function checkScore() {
    if (parseInt(comScore.textContent) == 5 || parseInt(playScore.textContent)== 5) {
        console.log("Game done");
        DONE =true;
    }
}

function toggleIcon(playerOption, comOption) {
    const playerIcon = document.querySelector("." + playerOption);
    const comIcon = document.querySelector(".icon" + comOption);

    playerIcon.classList.add('playing');
    comIcon.classList.add('playing')
}

function removePlaying() {

    let btnIconsArray= Array.from(document.querySelectorAll('.rm'));
    
    btnIconsArray.forEach( val => {
        val.classList.remove('playing');
    });
}

playerBtns.forEach(function (e) {
    e.addEventListener('click', function() {
        removePlaying()
        let playerOption  = splitString(e.className);
        let comOption = computerPlay();
        
        toggleIcon(playerOption, comOption);

        let result = singleGame(playerOption, comOption);
        updateScore(result, DONE)
        checkScore();

    });
});
