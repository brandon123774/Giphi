//document ready on startup using on click function
$(document).ready(function () {
    $("#search-btn").on("click", getSearch);
    $("#reset-btn".on("click", function () {
        document.location.reload();
    }))
});

// function getSearch() {
//     $(""#");
// }
//Array of car makes
var topics = ["Acura", "BMW", "Cheverolet", "Dodge", "Ford", "GMC", "Honda", "Jeep", "Hyundai", "Toyota", "Mercedes-Benz", "Mazda"];

//create a loop for the car makes
for (var i = 0; i < topics.length; i++) {

    //create a variable and set it equal to a button div
    var topicsBtn = $("<button>");
    //set attributes so that the class of buttons links
    topicsBtn.attr("class", "letter-button letter letter-button-color");
    topicsBtn.attr("data-car", topics[i]);
    topicsBtn.text(topics[i]);
    //append the buttons to the DOM
    $("#buttons").append(topicsBtn);

}

//create variables for the program that link to Giphy website database
var apiKey = 'h10JPz5uC89880QCKzXN1dGLBdYd0SuW';
var queryURL = "https://api.giphy.com/v1/gifs/search?q=kittens&limit=10&api_key=wslWpWhssAgYDK6zVXacBDsacT47flr4";

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (response) {
    console.log(response);

    var gifs = response.data
    for (var i = 0; i < gifs.length; i++) {
        console.log(gifs[i].images.original.url);
    }
});
