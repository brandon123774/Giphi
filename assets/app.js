//document ready on startup using on click function
$(document).ready(function () {
    $("#search-btn").on("click", getSearch);
    $("#reset-btn".on("click", function () {
        document.location.reload();
    }))
});



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
//create event listener for buttons
$("button").on("click", function () {
    //create variables for the program that link to Giphy website database
    var car = $(this).attr("buttons");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + car + "&api_key=10JPz5uC89880QCKzXN1dGLBdYd0SuW&limit=10";
    //use ajax method to 'get' the request from the Giphy URL
    $.ajax({
        url: queryURL,
        method: "GET"
    })
        //data that is retrieved from Giphy 
        .then(function (response) {
            console.log(response);
            //save this data into an array
            var results = response.data;
            //create a loop to get more results pertaining to search term
            for (var i = 0; i < results.length; i++) {
                //add in ratings to this
                if (results[i].rating !== "r" && results[i].rating !== "pg-13") {
                    //create a place to hold the gifs that come up
                    var gifHolder = $("<div>");
                    var rating = results[i].rating;
                    //store the new ratings above the gifs
                    var pOne = $("<p>").text("Rating: " + rating);
                    //need an image tag 
                    var imageOne = $("<img>");
                    imageOne.attr("src", results[i].images.fixed_height.url);
                    //need to stick these images to the page 
                    gifHolder.append(pOne);
                    gifHolder.append(imageOne);
                    // put these into the gif location on the page
                    $("#gifs-here").prepend(gifHolder);
                }
            }
        })

});
