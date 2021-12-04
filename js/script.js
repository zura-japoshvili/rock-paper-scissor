const opChoice = document.querySelector('.computer-choice');
let computer_score = 0;
let user_score = 0;
let result_ref = document.getElementById("result");

// The object stores the cases with which we can determine which side won
let choices_object = {
    'rock' : {
        'rock' : 'draw',
        'scissor' : 'win',
        'paper' : 'lose'
    },
    'scissor' : {
        'rock' : 'lose',
        'scissor' : 'draw',
        'paper' : 'win'
    },
    'paper' : {
        'rock' : 'win',
        'scissor' : 'lose',
        'paper' : 'draw'
    }

}

const rock = 'far fa-hand-rock';
const paper = 'far fa-hand-paper';
const scissor = 'far fa-hand-scissors';

// A function that holds the appropriate icon on the opponent's side
function showChoice(arg){
    opChoice.innerHTML = `<i class="far fa-hand-${arg}"></i>`;
}

// This is the main function, when you click on any "weapon" the function is 
// given the name of the "weapon" as an argument, 
// and using the switch we determine which side is the winner
function checker(input){
    var choices = ["rock", "paper", "scissors"];
    var num = Math.floor(Math.random()*3);

    document.getElementById("comp_choice").innerHTML = 
    ` Computer choose <span> ${choices[num].toUpperCase()} </span>`;

    document.getElementById("user_choice").innerHTML = 
    ` You choose <span> ${input.toUpperCase()} </span>`;

    let computer_choice = choices[num];
    showChoice(computer_choice);

    switch(choices_object[input][computer_choice]){
        case 'win':
            result_ref.style.cssText = "background-color: #cefdce; color: #689f38";
            result_ref.innerHTML = "YOU WIN";
            user_score++;
            break;
        case 'lose':
            result_ref.style.cssText = "background-color: #ffdde0; color: #d32f2f";
            result_ref.innerHTML = "YOU LOSE";
            computer_score++;
            break;
        default:
            result_ref.style.cssText = "background-color: #e5e5e5; color: #808080";
            result_ref.innerHTML = "DRAW";
            break;
    }

    document.getElementById("computer_score").innerHTML = computer_score;
    document.getElementById("user_score").innerHTML = user_score;
}