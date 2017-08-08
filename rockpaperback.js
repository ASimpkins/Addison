//Set database object
var database = firebase.database().ref();

//button executes this function
function updateDB(){
    var username = $("#username").val();
    var score = $("#score").val();
    console.log(name0);

    //Update database here

    var newValue = {
        username: username,
        score: score,
    }

    database.push(newValue);
}

database.on("child_added", function(rowData) {

    var row = rowData.val();
    var username = row.username;
    var score = row.score;
    var full = "<p>" + username + ":" + score +"</p>"
    $(".allMessages").append(full);
});