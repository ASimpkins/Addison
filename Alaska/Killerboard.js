function setup(){
    // left is width and right is height
    createCanvas(400, 300);
   // background(150);
}

function draw() {
background (175);
}
var one = document.getElementById("user input");

//letter from the row "asdfghjkl"
var letters = ["d","a","s","f","h","g","l",";","j","k"];

var i= 0

function printWord(i){
    //setTimeout is used to
    var setTimeout = function() {
        fill(125);
        text(letters[i], 160 , 95, 1000);
    }
}

function clearScreen(){
    //makes the top where letters spam clear for next letter
    clearRect(0,0,300,100);
}

printWord();
