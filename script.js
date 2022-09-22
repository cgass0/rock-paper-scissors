//                       LOADING AND RENDERING                       //
window.addEventListener('load', function() {
    document.getElementById("fullScreenMenuContainer").style.display = 'grid';
    document.getElementById("body").style.overflow = 'hidden';
}, false);

window.onload=function() {
    document.getElementById("startBtn").addEventListener("click", function() {
        document.getElementById("fullScreenMenuContainer").style.display = 'none';
        document.getElementById("body").style.overflow = 'visible';
        //fades in wrapper after 2s
        setTimeout(function(){
            let wrapper = document.getElementById('wrapper');
            wrapper.classList.toggle('fadeIn');
          }, 2000);
    })
} 


//                           GAMEPLAY                                  //
const weapons = ["ROCK", "PAPER", "SCISSORS"]; //output choice array

let cpuChoice; //computers weapon variable
let randomNumber = Math.floor(Math.random() * weapons.length); //this assigns a random weapon to the computer every game
let playerChoice;
let playerScore = 0;
let computerScore = 0;


//This is the function to call for the computers random weapon
function getComputerChoice() {
    randomNumber = Math.floor(Math.random() * weapons.length);
    cpuChoice = weapons[randomNumber];
    return cpuChoice;
}

//This function compares the two weapons and decides the winner
function checkWinner() {
    if(playerChoice === cpuChoice) {
        document.getElementById("hitScreenTitle").textContent = "You Were Evenly Matched";
        document.getElementById("hitImg").src="https://i.makeagif.com/media/3-03-2017/mC3oVm.gif";
    } else if (playerChoice === "ROCK" && cpuChoice === "SCISSORS") {
        document.getElementById("hitScreenTitle").textContent = "What a hit! Those Scissors Are No Match!";
        document.getElementById("hitImg").src="https://i.makeagif.com/media/9-19-2022/AoLsN7.gif";
        playerScore += 1;
    } else if (playerChoice === "ROCK" && cpuChoice === "PAPER") {
        document.getElementById("hitScreenTitle").textContent = "Oh No! You Got Trapped By Paper!";
        document.getElementById("hitImg").src="https://comicvine.gamespot.com/a/uploads/original/11138/111388963/6957829-konan%20powers.gif";
        computerScore += 1;
    } else if (playerChoice === "PAPER" && cpuChoice === "ROCK") {
        document.getElementById("hitScreenTitle").textContent = "Well Played! You Trapped The Enemy!";
        document.getElementById("hitImg").src="https://comicvine.gamespot.com/a/uploads/original/11138/111388963/6957829-konan%20powers.gif";
        playerScore += 1;
    } else if (playerChoice === "PAPER" && cpuChoice === "SCISSORS") {
        document.getElementById("hitScreenTitle").textContent = "Ouch! You Got Sliced By Scissors!";
        document.getElementById("hitImg").src="https://static.wikia.nocookie.net/animevice/images/6/61/Sheele_using_Extase_defensively.gif/revision/latest/scale-to-width-down/400?cb=20160305023421";
        computerScore += 1;
    } else if (playerChoice === "SCISSORS" && cpuChoice === "PAPER") {
        document.getElementById("hitScreenTitle").textContent = "Like A Hot Knife Through Butter! What A Move!";
        document.getElementById("hitImg").src="https://static.wikia.nocookie.net/animevice/images/6/61/Sheele_using_Extase_defensively.gif/revision/latest/scale-to-width-down/400?cb=20160305023421";
        playerScore += 1;
    } else if (playerChoice === "SCISSORS" && cpuChoice === "ROCK") {
        document.getElementById("hitScreenTitle").textContent = "You Brought Scissors To A Rock Fight... Bad Play!";
        document.getElementById("hitImg").src="https://i.makeagif.com/media/9-19-2022/AoLsN7.gif";
        computerScore += 1;
    }
}

//This function updates the score on screen
function updateScore() {
    document.getElementById("playerScore").textContent = playerScore;
    document.getElementById("cpuScore").textContent = computerScore;
}

//This function starts round based on weapopn clicked
let weaponBtn = document.querySelectorAll('.weapon')
weaponBtn.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        playerChoice = (e.target.id);
        playRound();
        return playerChoice;
    });
});

//play a round
function playRound() {
    getComputerChoice();
    checkWinner(); 
    weaponAni();
}

//                                                    Different Animation Screens                                     //

//Screen changes to weapons screen
function weaponAni() {
    document.getElementById("fullScreenWeaponContainer").style.display = 'grid';
    document.getElementById("body").style.overflow = 'hidden';  
}

//SCreen changes to the fight scene
function fightBtn() {
    document.getElementById("fullScreenWeaponContainer").style.display = 'none';
    document.getElementById("fullScreenHitContainer").style.display = 'grid';
}

//Screen changes to the winner screen or returns to main if game not over
function nextBtn() { 
document.getElementById("hitImg").src=""; //reset gif to begining

    if (playerScore >= 5) {
        document.getElementById("fullScreenHitContainer").style.display = 'none';
        document.getElementById("fullScreenWinnerContainer").style.display = 'grid';
        document.getElementById("winnerScreenTitle").textContent = "Congratulations! You have defeated the Computer!";
        document.getElementById("winnerImg").src="https://i.pinimg.com/originals/0a/2d/95/0a2d9547dbdd655b6af54218dbd73b3b.gif";
        playerScore = 0;
        computerScore = 0;
        updateScore();
    } else if (computerScore >= 5) {
        document.getElementById("fullScreenHitContainer").style.display = 'none';
        document.getElementById("fullScreenWinnerContainer").style.display = 'grid';
        document.getElementById("winnerScreenTitle").textContent = "Oh... You were defeated and all is lost...";
        document.getElementById("winnerImg").src="https://c.tenor.com/mClW4CbYFLsAAAAM/lol-get-shit-on-kid-loser.gif";
        playerScore = 0;
        computerScore = 0;
        updateScore();
    } else {
        updateScore();
        document.getElementById("fullScreenHitContainer").style.display = 'none';
        document.getElementById("body").style.overflow = 'visible';
    }   
}

//Returns to start after game over
function restartBtn() {
    document.getElementById("fullScreenWinnerContainer").style.display = 'none';
    document.getElementById("fullScreenMenuContainer").style.display = 'grid';
    wrapper.classList.toggle('fadeIn'); //reset opacity for fade effect
}


//                                       Audio Functions                             //
/*window.onload=function() {
const audio = document.getElementById("bg-music");
    const audioQuery = document.querySelector('audio');
    window.addEventListener("DOMContentLoaded", e => {
        audioQuery.volume = 1;
        audio.play();
    }
);
}

const audioBtn = document.getElementById('audioBtn').addEventListener('click', audioController);
function audioController() {
      if (!audio.paused) {
           audio.pause();
       }
      else {
          audio.play();
      }
   } 
      */