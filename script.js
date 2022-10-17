'use strict'

let randomNumber = Math.floor(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function(message) {
    document.querySelector('.message').textContent = message;
};


const numberDisplay = function(style, text ) {

    document.querySelector('.number').style.width = style;
    document.querySelector('.number').textContent = text;

}

const h1Display = function(text, color ){

      document.querySelector('h1').textContent = text
        document.querySelector('h1').style.backgroundColor = color

}

const score1 = function(points) {
    document.querySelector('.score').textContent = points

}


    // When there is NO INPUT!
document.querySelector('.check').addEventListener('click',function(){
    let guess = parseInt(document.querySelector('.guess').value)
    if(!guess){
       displayMessage('⛔ No Number')
    } 
    

    // When the player WINS!
    else if(guess === randomNumber) {
        h1Display(" You Won", " ");
        displayMessage( "🎉 Correct Number")
        document.querySelector('body').style.backgroundColor = '#60b347';
        numberDisplay('30rem', randomNumber)
         if(score > highscore){ 
            highscore = document.querySelector('.highscore').textContent = score;}
         
          
    
    // When the player guess is too LOW or too High!
    }    else if (guess !== randomNumber){
            displayMessage( guess < randomNumber ? "📉 Too low" : "📈 Too High");
            score--
            score1(score)

    // when the game is over
        } if (score < 1) {

            h1Display("Game Over", "#FF0606")
            displayMessage( "💥 You lost") 
            score1(0)
        }
     

    })

    // game resset
    document.querySelector('.again').addEventListener('click', function() {
        randomNumber = Math.floor(Math.random()* 20) +1;
        score = 20
        h1Display("Guess My Number!", "")
        score1(score);
        numberDisplay('15rem', '?')
        document.querySelector('body').style.backgroundColor ='#222'
        displayMessage( 'Start guessing...' )
        document.querySelector('.guess').value = ""
        document.querySelector('.highscore').textContent = highscore ;
       
    })



