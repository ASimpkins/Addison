//memeTinder.js file
$.ajax({
    url: "https://api.imgflip.com/get_memes",
}).done(function(data){
    console.log(data)
    var memes = data.memes[];
//     var meme = memes.name.first;
    $('body').append("<iframe src= "+ memes " >");
    // var results = data.results;
    // var userFirstName = /
})
