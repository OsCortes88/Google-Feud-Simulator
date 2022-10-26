//answers for people section array                                                                                                                                                                                                 
var peopleArray = ["plastic", "paper", "butter", "grass", "earwax", "bread", "roses", "my hair", "catnip", "flowers"]

//array to know how many x's to put
var guessArray = [0, 1, 2, 3];

//how many guesses left
var guessRemainder = 3;

//introduces way to keep track of guess without popping up x's every time
var guessSub = 0;

//starting score
var pScore = 0;

function start() {
    
    //plays while guesses are left
    if (guessRemainder != 0 && pScore != 55000) {
        
        //first set of if statements check if your answer is correct
        if (document.getElementById("maintext").value == peopleArray[0]) {
            
            pOne.innerHTML = peopleArray[0] + " 10k";
            add(1);
        }
        
        else if (document.getElementById("maintext").value == peopleArray[1]) {
            
            pTwo.innerHTML = peopleArray[1] + " 9k";
            add(2);
        }
        
        else if (document.getElementById("maintext").value == peopleArray[2]) {
            
            pThree.innerHTML = peopleArray[2] + " 8k";
            add(3);
        }
        
        else if (document.getElementById("maintext").value == peopleArray[3]) {
            
            pFour.innerHTML = peopleArray[3] + " 7k";
            add(4);
        }
        
        else if (document.getElementById("maintext").value == peopleArray[4]) {
            
            pFive.innerHTML = peopleArray[4] + " 6k";
            add(5);
        }
        
        else if (document.getElementById("maintext").value == peopleArray[5]) {
            
            pSix.innerHTML = peopleArray[5] + " 5k";
            add(6);
        }
        
        else if (document.getElementById("maintext").value == peopleArray[6]) {
            
            pSeven.innerHTML = peopleArray[6] + " 4k";
            add(7);
        }
        
        else if (document.getElementById("maintext").value == peopleArray[7]) {
            
            pEight.innerHTML = peopleArray[7] + " 3k";
            add(8);
        }
        
        else if (document.getElementById("maintext").value == peopleArray[8]) {
            
            pNine.innerHTML = peopleArray[8] + " 2k";
            add(9);
        }
        
        else if (document.getElementById("maintext").value == peopleArray[9]) {
            
            pTen.innerHTML = peopleArray[9] + " 1k";
            add(10);
        }
        
        else {
            
            if (guessRemainder != 0) {
                
                //increases by 1 to add an x each incorrect answer
                guessSub += 1
                
                //subtracts by increasing value to be able to get to 0
                guessRemainder -= guessSub;
                
                //changes value of "guess" on website by referencing guess array
                guessesId.innerHTML = guessArray[guessRemainder];
                
            }
            
        }
        
        //second set of if statements checks how many "x's" need to get displayed
        if (guessRemainder == 2) {
            
            //makes first x appear
            document.getElementById("firstx").src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQoHkc-89HZCe1dq2Xw0ZwWcz-WgYNGsq26vYsUidX01P06g25fw&s";
            
            //displays x's and black background
            document.querySelector(".bgModal").style.display = "flex";
            
            //resets this value to prevent from popping up an x everytime you guess after an incorrect answer
            guessRemainder = 3;
            
        }
        
        else if (guessRemainder == 1) {
            
            //makes second x appear
            document.getElementById("secondx").src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQoHkc-89HZCe1dq2Xw0ZwWcz-WgYNGsq26vYsUidX01P06g25fw&s";
            
            //displays x's and black background
            document.querySelector(".bgModal").style.display = "flex";
            
            //resets this value to prevent from popping up an x everytime you guess after an incorrect answer
            guessRemainder = 3;
            
        }
        
        else if (guessRemainder == 0) {
            
            //makes third x appear
            document.getElementById("thirdx").src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQoHkc-89HZCe1dq2Xw0ZwWcz-WgYNGsq26vYsUidX01P06g25fw&s";
            
            //displays x's and black background
            document.querySelector(".bgModal").style.display = "flex";
            
            //changes text to indicate game over
            textAboveBox.innerHTML = "Game Over. Your final score was " + pScore;
            
            totalScore += pScore;
            
            totalScoreId.innerHTML = totalScore;
            
            
            
        }
        
        else {
            
            return;
            
        }
        
    }
    
    if (pScore == 55000) {
        
        textAboveBox.innerHTML = "You Win! Your final score was " + pScore;
        
        totalScore += pScore;
        
        totalScoreId.innerHTML = totalScore;
        
    }
    
}

function add(val)
{
    var num = 11-val;
    pScore += num*1000;
    peopleArray.splice(val-1, 1);
    
    score.innerHTML = pScore;
}

//if you click on 'x', return to game
document.getElementById("firstx").addEventListener("click",
    function() {
        
        document.querySelector(".bgModal").style.display = "none";
        
    }
)