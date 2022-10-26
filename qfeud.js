//answers for question section array                                                                                                                                                                                                 
var questionArray = ["cat", "pigeon", "mouse", "rat", "fox", "squirrel", "leprechaun", "snake", "rabbit", "beaver"]

//array to know how many x's to put
var guessArray = [0, 1, 2, 3];

//how many guesses left
var guessRemainder = 3;

//introduces way to keep track of guess without popping up x's every time
var guessSub = 0;

//starting score
var qScore = 0;

function start() {
    
    //plays while guesses are left
    if (guessRemainder != 0 && qScore != 55000) {
        
        //first set of if statements check if your answer is correct
        if (document.getElementById("maintext").value == questionArray[0]) {
            
            qOne.innerHTML = questionArray[0] + " 10k";
            add(1);
        }
        
        else if (document.getElementById("maintext").value == questionArray[1]) {
            
            qTwo.innerHTML = questionArray[1] + " 9k";
            add(2);
        }
        
        else if (document.getElementById("maintext").value == questionArray[2]) {
            
            qThree.innerHTML = questionArray[2] + " 8k";
            add(3);
        }
        
        else if (document.getElementById("maintext").value == questionArray[3]) {
            
            qFour.innerHTML = questionArray[3] + " 7k";
            add(4);
        }
        
        else if (document.getElementById("maintext").value == questionArray[4]) {
            
            qFive.innerHTML = questionArray[4] + " 6k";
            add(5);
        }
        
        else if (document.getElementById("maintext").value == questionArray[5]) {
            
            qSix.innerHTML = questionArray[5] + " 5k";
            add(6);
        }
        
        else if (document.getElementById("maintext").value == questionArray[6]) {
            
            qSeven.innerHTML = questionArray[6] + " 4k";
            add(7);
        }
        
        else if (document.getElementById("maintext").value == questionArray[7]) {
            
            qEight.innerHTML = questionArray[7] + " 3k";
            add(8);
        }
        
        else if (document.getElementById("maintext").value == questionArray[8]) {
            
            qNine.innerHTML = questionArray[8] + " 2k";
            add(9);
        }
        
        else if (document.getElementById("maintext").value == questionArray[9]) {
            
            qTen.innerHTML = questionArray[9] + " 1k";
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
            textAboveBox.innerHTML = "Game Over. Your final score was " + qScore;
            
            
            
        }
        
        else {
            
            return;
            
        }
        
    }
    
    if (qScore == 55000) {
        
        textAboveBox.innerHTML = "You Win! Your final score was " + qScore;
        
        totalScore += qScore;
        
        totalScoreId.innerHTML = totalScore;
        
    }
    
}
function add(val)
{
    var num = 11-val;
    qScore += num*1000;
    questionArray.splice(val-1, 1);
    
    score.innerHTML = qScore;
}

//if you click on 'x', return to game
document.getElementById("firstx").addEventListener("click",
    function() {
        
        document.querySelector(".bgModal").style.display = "none";
        
    }
)