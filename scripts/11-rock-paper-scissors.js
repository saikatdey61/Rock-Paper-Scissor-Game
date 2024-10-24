
let score = JSON.parse(localStorage.getItem('score')) || {
  wins : 0 ,
  lose : 0 ,
  Tie : 0

};

updateScore();

/* if(!score){
score = {
  wins : 0 ,
  lose : 0 ,
  Tie : 0

};
} */

let isAutoPlaying = false;
let intervalId ;

function autoPlay(){
  if(!isAutoPlaying){
    intervalId = setInterval(() => {
      const playermove =  pickComputermove();
      playGame(playermove);
    },1000);
    isAutoPlaying = true;
  }else {
    clearInterval(intervalId);
    isAutoPlaying = false;
  }
}

document.querySelector('.js-rock-button').addEventListener('click' , () =>{
  playGame('rock');
});

document.querySelector('.js-paper-button').addEventListener('click' , () =>{
  playGame('paper');
});

document.querySelector('.js-scissors-button').addEventListener('click' , () =>{
  playGame('scissors');
});

document.body.addEventListener('keydown' , (event) =>{
  if(event.key === 'r'){
    playGame('rock')
  }else if(event.key === 'p'){
    playGame('paper');
  }else if(event.key === 's'){
    playGame('scissors');
  }
});

function playGame(playermove){
const computerMove =  pickComputermove();
let result = '' ;

if(playermove === 'rock'){
  if(computerMove === 'rock'){
    result = 'Tie.'
  } else if(computerMove === 'paper'){
    result = 'You lose.';
  } else if(computerMove === 'scissors'){
    result = 'You win.';
  }
}else

  if(playermove === 'paper'){
    if(computerMove === 'rock'){
    result = 'You win.'
  } else if(computerMove === 'paper'){
    result = 'Tie.';
  } else if(computerMove === 'scissors'){
    result = 'You lose.';
  }
}else

  if(playermove === 'scissors'){
    if(computerMove === 'rock'){
    result = 'You lose.';
  } else if(computerMove === 'paper'){
    result = 'You win.';
  } else if(computerMove === 'scissors'){
    result = 'Tie.';
  }
}

if(result === 'You win.'){
  score.wins += 1 ;
}else if(result === 'You lose.'){
  score.lose += 1 ;
}else if(result === 'Tie.'){
  score.Tie += 1 ;
}

localStorage.setItem('score',JSON.stringify(score)); 
 
updateScore();

document.querySelector('.js-result').innerHTML = result ;

document.querySelector('.js-moves').innerHTML = `You
<img src="images/${playermove}-emoji.png" class="move-icon">
<img src="images/${computerMove}-emoji.png" class="move-icon" > Computer`;

/*alert(`You picked ${playermove}. Computer picked ${computerMove}. ${result}  
wins: ${score.wins}, lose: ${score.lose}, Tie: ${score.Tie}`);*/

}

function updateScore(){
  document.querySelector('.js-score').innerHTML = `wins: ${score.wins}, lose: ${score.lose}, Tie: ${score.Tie}`;
}

function pickComputermove(){
const randomNumber = Math.random();
let computerMove = '';
if(randomNumber >= 0 && randomNumber<= 1/3){
    computerMove = 'rock';
  } else if(randomNumber> 1/3 && randomNumber<= 2/3){
    computerMove = 'paper';
  } else if(randomNumber> 2/3 && randomNumber <= 3){
    computerMove = 'scissors';
  }
  return computerMove;
}
