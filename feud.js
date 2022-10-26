var guesses = 3;
var tScore = 0;

start();

function start()
{
    check();
}

function check()
{
    var str = document.getElementById("mainText").value;
    var score_div = document.getElementById("score");
    var numGuesses_div = document.getElementById("guesses");
    
    var key = new Array(5); 
      
    // Loop to create 2D array using 1D array 
    for (var i = 0; i < key.length; i++)
    { 
        key[i] = new Array(2); 
    } 
    
    var key[0][0] = "quark";
    var key[1][1] = "nanometer";
    var key[2][0] = "millimeter";
    var key[3][1] = "centimeter";
    var key[4][0] = "second";
    var key[5][1] = "cell";
    var key[6][0] = "right angle";
    var key[7][1] = "gram";
    var key[8][0] = "village";
    var key[9][1] = "molecule";
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    score_div.innerHTML = "yes";
    
}