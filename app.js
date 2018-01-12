/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/


var gamePlaying,activePlayer,scores,roundScores;
init();


document.querySelector('.btn-roll').addEventListener('click', function() {
  if (gamePlaying) {

  var  Dice=Math.floor(Math.random()*6)+1;
  document.querySelector('.dice').style.display='block';
  document.querySelector('.dice').src='dice-'+ Dice + '.png';

  if(Dice>1)
  {
    roundScores+=Dice;
    document.querySelector('#current-' + activePlayer).textContent=roundScores;
  }
  else {

  nextPlayer();
  }

  }

});

document.querySelector('.btn-hold').addEventListener('click',function(){

if (gamePlaying) {
  //Add current score to global score

  scores[activePlayer]+=roundScores;

  //update the UI

  document.querySelector('#score-'+activePlayer).textContent=scores[activePlayer];


  //Check if the player won the game

  if (scores[activePlayer]>=20) {
    document.querySelector('#name-' + activePlayer).textContent='WINNER!!';
    document.querySelector('.player-'+ activePlayer +'-panel').classList.add('winner');
    document.querySelector('.player-'+ activePlayer +'-panel').classList.toggle('active');
    document.querySelector('.dice').style.display='none';
    gamePlaying=false;
  }
  else {
    nextPlayer();
  }

}

});

document.querySelector('.btn-new').addEventListener('click',init);
function init()
{
  activePlayer=0;
gamePlaying=true;
  scores=[0,0];
  roundScores=0;
  document.querySelector('#current-0').textContent=0;
  document.querySelector('#current-1').textContent=0;
  document.querySelector('#score-0').textContent=0;
  document.querySelector('#score-1').textContent=0;
  document.querySelector('.dice').style.display='none';
  document.querySelector('#name-' + activePlayer).textContent='Player ' + activePlayer;
  document.querySelector('.player-' + activePlayer + '-panel').classList.remove('winner');
  document.querySelector('.player-0-panel').classList.remove('active');
  document.querySelector('.player-1-panel').classList.remove('active');
  document.querySelector('.player-0-panel').classList.add('active');

}


function nextPlayer()
{

    document.querySelector('#current-' + activePlayer).textContent=0;
  activePlayer===0 ? activePlayer = 1 : activePlayer = 0;
  roundScores=0;
  document.querySelector('#current-' + activePlayer).textContent=0;
  document.querySelector('.dice').style.display='none';
  document.querySelector('.player-0-panel').classList.toggle('active');
  document.querySelector('.player-1-panel').classList.toggle('active');


}
