
function setup(){
    createCanvas(700,700);
    background(50);
}

function mouseDragged(){
    // noStroke();
    fill(random(255),random(255),random(255));
    ellipse(mouseX, mouseY,random(20),random(20));
}

// function mousePressed(){
//     clear();
// }

