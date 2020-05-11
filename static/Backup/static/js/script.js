// Challenge 1: Your Age in Days

function ageInDays() {
    var birthYear = prompt('What year were you born... Good friend?');
    var ageInDayss = (2020 - birthYear) * 365;
    var h1 = document.createElement('h1');
    var textAnswer = document.createTextNode('You are ' + ageInDayss + ' days old');
    h1.setAttribute('id', 'ageInDays');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);
}

function reset() {
    document.getElementById('ageInDays').remove();
}

// Challenge 2:Cat Generator 

function generateCat() {
    var image = document.createElement('img');
    var div = document.getElementById('flex-cat-gen');
    image.src = "http://thecatapi.com/api/images/get?format=src&type=gif&size=small";
    div.appendChild(image);
}

// Challenge 3: Rock Paper Scissors
function rpsGame(yourChoice) {
    console.log(yourChoice);
    var humanChoice, botChoice;
    // humanChoice = yourChoice.id;
    // botChoice =
    // results = decideWinner(humanChoice, botChoice); // [0, 1] human lost | bot won
    // message = finalMessage(results) // 'You won!'
    rpsFrontEnd(yourChoice.id, botChoice, message)

}

// timestamp: 3:09:27