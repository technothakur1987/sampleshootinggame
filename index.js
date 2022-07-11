console.log("Welcome to shooting game ");
let gameovera= new Audio("gameover.wav")
let gameplay= new Audio("gameplay.mp3")
let shot1= new Audio("shot1.mp3")
let shot2= new Audio("shot2.mp3")
let health11 = 100;
let health22 = 100;
let game = 0;
let gamecounter = 0;
let play1score = 0;
let play2score = 0;
let startGame = document.getElementById("startGame");
let gameCount = document.getElementById("gameCount");
let player1Score = document.getElementById("player1Score");
let player2Score = document.getElementById("player2Score");
let progressBar1 = document.getElementById("progressBar1");
let progressBar2 = document.getElementById("progressBar2");
let shoot1 = document.getElementById("shoot1");
let shoot2 = document.getElementById("shoot2");
let health1 = document.getElementById("health1");
let player1 = document.getElementById("player1");
let player2 = document.getElementById("player2");
let health2 = document.getElementById("health2");
let gameoverhua = document.getElementById("gameoverhua");
health1.innerHTML = ` `;
health2.innerHTML = ` `;

// Function to generate random number
function randomNumber1(min1, max1) {
  result1 = Math.random() * (max1 - min1) + min1;
  console.log(`${Math.floor(result1)}`);
}
// Function to generate random number
function randomNumber2(min2, max2) {
  result2 = Math.random() * (max2 - min2) + min2;
  console.log(`${Math.floor(result2)}`);
}

/*as the health reaches 0 gameover function is run */
function gameover() {
  console.log("gameover function is running");
  //updtae the game
  gamecounter = gamecounter + 1;
  gameCount.innerHTML = `game:${gamecounter} `;
  //update the player1-won and player2-won
  player1Score.innerHTML = `Player1-won:${play1score} `;
  player2Score.innerHTML = `Player2-won:${play2score} `;
}

  /*When we click on start button player1 and player2 is made visible with
        shoot1buttn and shoot2button is also made visible 
        with update the haelth and start btn is hidden*/
  startGame.addEventListener("click", () => {
    gameplay.play();
    console.log("start buton is clicked ");
    player1.style.display = "initial";
    player2.style.display = "initial";
    shoot1.style.display = "initial";
    shoot2.style.display = "initial";
    health1.innerHTML = `health:${health11} `;
    health2.innerHTML = ` health:${health22}`;
    startGame.style.display = "none"
  });
  shoot1.addEventListener("click", () => {
    shot1.play();
    console.log("shoot1 btn is clicked ");
    progressBar1.classList.add("mymove1");
    setTimeout(() => {
      console.log("removing mymove1 class");
      progressBar1.classList.remove("mymove1");
    }, 1000);
    randomNumber2(1, 5);
    console.log(health11);
    health22 = health22 - result2;
    Math.floor(health22);
    console.log(`${Math.floor(health22)}`);
    health2.innerHTML = ` health:${Math.floor(health22)}`;
    if (health22 <= 0) {
      console.log("gameover");
      play1score = play1score + 1;
      health22 = 100;
      health2.innerHTML = ` health:${health22}`;
      health11 = 100;
      health1.innerHTML = ` health:${health11}`;


      gameover();
    } else {
      console.log("continue the game plz ");
    }
  });
  shoot2.addEventListener("click", () => {
    shot2.play();
    console.log("shoot2 btn is clicked ");
    progressBar2.classList.add("mymove2");
    setTimeout(() => {
      console.log("removing mymove2 class");
      progressBar2.classList.remove("mymove2");
    }, 1000);
    randomNumber1(1, 5);
    console.log(health11);
    health11 = health11 - result1;
    Math.floor(health11);
    console.log(`${Math.floor(health11)}`);
    health1.innerHTML = ` health:${Math.floor(health11)}`;
    if (health11 <= 0) {
        console.log("gameover");
        play2score = play2score + 1;
        health11 = 100;
        health22 = 100;
        health1.innerHTML = ` health:${health11}`;
        health2.innerHTML = ` health:${health22}`;
  
        gameover();
    } else {
      console.log("continue the game plz ");
    }
  });

setInterval(() => {
    console.log(`the value of gamecounter is ${gamecounter}`)
    if(gamecounter==5){
        console.log("game to be overed")
        gameplay.pause();
        gameovera.play();
        
        if(play1score>play2score){
            gameoverhua.style.display="block";
            gameoverhua.innerHTML = `<h1>game:${gamecounter}</h1>
                                <h1> Player1-won:${play1score}</h1>
                                <h1>Player2-won:${play2score}</h1>
                                <hr><hr>
                                <h1>Player1 won the match</h1>
                                <br><br><br>
                                <p>THE GAME WILL AUTOMATICALLY RELOAD AFTER 2 SEC</p>
                                `;
                                setTimeout(() => {
                                    location.reload(true);
                                    
                                    
                                }, 2000); 
            

        }else{
            gameoverhua.style.display="block";
            gameoverhua.innerHTML = `<h1>game:${gamecounter}</h1>
                                <h1> Player1-won:${play1score}</h1>
                                <h1>Player2-won:${play2score}</h1>
                                <hr><hr>
                                <h1>Player2 won the match</h1>
                                <br><br><br>
                                <p>THE GAME WILL AUTOMATICALLY RELOAD AFTER 2 SEC</p>
                                `;
                                setTimeout(() => {
                                    location.reload(true);
                                    
                                    
                                }, 2000); 

        }
        
        
                               
        
        


    }else{

         console.log("game to be continued ")

    }
    
}, 100);



