//answers for name section array                                                                                                                                                                                                 
var nameArray = ["day", "swayze", "melrose", "stewart", "wilson", "star", "fiori", "rothfuss", "dempsey", "hellmann"]

//array to know how many x's to put
var guessArray = [0, 1, 2, 3];

//how many guesses left
var guessRemainder = 3;

//introduces way to keep track of guess without popping up x's every time
var guessSub = 0;

//starting score
var nScore = 0;

function start() {
    
    //plays while guesses are left
    
    if (guessRemainder != 0 && nScore != 55000)
    { 
    
        //first set of if statements check if your answer is correct
        
        if (document.getElementById("maintext").value == nameArray[0]) {
            
            nOne.innerHTML = nameArray[0] + " 10k";
            add(1);
            
        }
        
        else if (document.getElementById("maintext").value == nameArray[1]) {
            
            nTwo.innerHTML = nameArray[1] + " 9k";
            add(2);
        }
        
        else if (document.getElementById("maintext").value == nameArray[2]) {
            
            nThree.innerHTML = nameArray[2] + " 8k";
            add(3);
        }
        
        else if (document.getElementById("maintext").value == nameArray[3]) {
            
            nFour.innerHTML = nameArray[3] + " 7k";
            add(4);
        }
        
        else if (document.getElementById("maintext").value == nameArray[4]) {
            
            nFive.innerHTML = nameArray[4] + " 6k";
            add(5);
        }
        
        else if (document.getElementById("maintext").value == nameArray[5]) {
            
            nSix.innerHTML = nameArray[5] + " 5k";
            add(6);
        }
        
        else if (document.getElementById("maintext").value == nameArray[6]) {
            
            nSeven.innerHTML = nameArray[6] + " 4k";
            add(7);
        }
        
        else if (document.getElementById("maintext").value == nameArray[7]) {
            
            nEight.innerHTML = nameArray[7] + " 3k";
            add(8);
        }
        
        else if (document.getElementById("maintext").value == nameArray[8]) {
            
            nNine.innerHTML = nameArray[8] + " 2k";
            add(9);
        }
        
        else if (document.getElementById("maintext").value == nameArray[9]) {
            
            nTen.innerHTML = nameArray[9] + " 1k";
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
            textAboveBox.innerHTML = "Game Over. Your final score was " + nScore;
            
            
            
        }
        
        else {
            
            return;
            
        }
        
    }
    
    if (nScore == 55000) {
        
        textAboveBox.innerHTML = "You Win! Your final score was " + nScore;
        
        totalScore += nScore;
        
        totalScoreId.innerHTML = totalScore;
        
    }
    
}

function add(val)
{
    var num = 11-val;
    nScore += num*1000;
    nameArray.splice(val-1, 1);
    score.innerHTML = nScore;
}

//if you click on 'x', return to game
document.getElementById("firstx").addEventListener("click",
    function() {
        
        document.querySelector(".bgModal").style.display = "none";
        
    }
)