
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
  playGame('Rock');
});

document.querySelector('.js-paper-button').addEventListener('click' , () =>{
  playGame('Paper');
});

document.querySelector('.js-scissors-button').addEventListener('click' , () =>{
  playGame('Scissors');
});

document.body.addEventListener('keydown' , (event) =>{
  if(event.key === 'r'){
    playGame('Rock')
  }else if(event.key === 'p'){
    playGame('Paper');
  }else if(event.key === 's'){
    playGame('Scissors');
  }
});

function playGame(playermove){
const computerMove =  pickComputermove();
let result = '' ;

if(playermove === 'Rock'){
  if(computerMove === 'Rock'){
    result = 'Tie.'
  } else if(computerMove === 'Paper'){
    result = 'You lose.';
  } else if(computerMove === 'Scissors'){
    result = 'You win.';
  }
}else

  if(playermove === 'Paper'){
    if(computerMove === 'Rock'){
    result = 'You win.'
  } else if(computerMove === 'Paper'){
    result = 'Tie.';
  } else if(computerMove === 'Scissors'){
    result = 'You lose.';
  }
}else

  if(playermove === 'Scissors'){
    if(computerMove === 'Rock'){
    result = 'You lose.';
  } else if(computerMove === 'Paper'){
    result = 'You win.';
  } else if(computerMove === 'Scissors'){
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
    computerMove = 'Rock';
  } else if(randomNumber> 1/3 && randomNumber<= 2/3){
    computerMove = 'Paper';
  } else if(randomNumber> 2/3 && randomNumber <= 3){
    computerMove = 'Scissors';
  }
  return computerMove;
}
