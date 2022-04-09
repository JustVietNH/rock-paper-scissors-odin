

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
    console.log(className.split(" ")[1])
    return className.split(" ")[1];
}

const playerBtns = document.querySelectorAll("button");
const playScore = document.querySelector(".playScore");
const comScore = document.querySelector(".comScore");

function updateScore(result) {
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




playerBtns.forEach(function (e) {
    e.addEventListener('click', function() {
        
        let playerOption  = splitString(e.className);
        let comOption = computerPlay();
        
        let result = singleGame(playerOption, comOption);
        updateScore(result)
        
        
        

    });
});
