

function computerPlay() {
    let items = Array("Rock", "Paper", "Scissors");
    let item = items[Math.floor(Math.random()*items.length)];
    return item
}

console.log(computerPlay());

