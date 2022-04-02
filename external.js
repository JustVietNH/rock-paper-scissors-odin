

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
        return "Tie Game! You chose " + playerSel + " and the computer as well!"
    }

    if (playerSelect == "Rock") {
        if (comSelect == "Paper") {
            return "You lose! " + comSelect + " beats " + playerSelect
        } else if (comSelect == "Scissors") {
            return "You win! "  + playerSelect + " beats " + comSelect
        }
    } else if (playerSelect == "Paper") {
        if (comSelect == "Scissors") {
            return "You lose! " + comSelect + " beats " + playerSelect
        } else if (comSelect == "Rock") {
            return "You win! "  + playerSelect + " beats " + comSelect
        }
    } else if (playerSelect == "Scissors") {
        if (comSelect == "Rock") {
            return "You lose! " + comSelect + " beats " + playerSelect
        } else if (comSelect == "Paper") {
            return "You win! "  + playerSelect + " beats " + comSelect
        }
    }
    }

let player ="Rock";
let com = computerPlay()

console.log(singleGame(player, com));

